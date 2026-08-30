"use client";

import { useEffect, useRef } from "react";

/**
 * Nebula — a slow, domain-warped smoke cloud in the upper-right void,
 * after ThreeUI's structure-flow/nebula but pulled into the PHOSPHOR
 * system: bone/graphite instead of violet, and far subtler than the
 * reference. Raw WebGL fullscreen shader — no scene graph.
 *
 * Lifecycle: paused off-screen, paused on hidden tab, single static frame
 * under prefers-reduced-motion, transparent canvas (void + grain show
 * through). WebGL unavailable → the plain void remains.
 */

const VERT = `
  attribute vec2 aPos;
  varying vec2 vUv;
  void main() {
    vUv = aPos * 0.5 + 0.5;
    gl_Position = vec4(aPos, 0.0, 1.0);
  }
`;

const FRAG = `
  #extension GL_OES_standard_derivatives : enable
  precision highp float;
  varying vec2 vUv;
  uniform vec2 uRes;
  uniform float uTime;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.03 + vec2(17.3, 9.1);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 aspect = vec2(uRes.x / uRes.y, 1.0);
    vec2 uv = vUv * aspect;

    // Cloud anchor: upper-right quadrant (the moon's old seat)
    vec2 anchor = vec2(0.72 * aspect.x, 0.66);
    vec2 p = uv - anchor;
    float t = uTime * 0.025;

    // Domain warp — the wispy, torn structure of smoke
    vec2 warp = vec2(
      fbm(uv * 1.8 + vec2(t, -t * 0.6)),
      fbm(uv * 1.8 + vec2(-t * 0.5, t) + 4.7)
    );
    float cloud = fbm(uv * 2.2 + warp * 1.1 + vec2(-t * 0.4, t * 0.3));

    // Radial falloff around the anchor — the cloud dies into the void
    float radial = exp(-dot(p, p) * 3.2);

    // Shape: high-pass so only the dense cores glow, then soften
    float body = smoothstep(0.38, 0.78, cloud) * radial;

    // Wisp detail: second warp layer at higher frequency — strong
    // contrast so the smoke reads as torn filaments, not a smudge
    float wisp = fbm(uv * 4.6 + warp * 1.6 + vec2(t * 0.5, -t * 0.4));
    body *= 0.45 + 0.55 * smoothstep(0.3, 0.75, wisp);

    // Subtlety dial: peak alpha ~0.34 — a presence, not a picture
    float a = body * 0.34;

    // Slight cool tint in the densest core, bone at the edges — keeps
    // the phosphor monochrome but gives the smoke depth
    vec3 ink = mix(vec3(0.93), vec3(0.72, 0.74, 0.86), body * 0.5);

    gl_FragColor = vec4(ink, a);
  }
`;

export function NebulaField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    if (!gl) return; // no WebGL — plain void stays
    // fwidth() in WebGL1 lives behind this extension
    gl.getExtension("OES_standard_derivatives");

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(sh) ?? "shader compile failed");
      }
      return sh;
    };

    let prog: WebGLProgram;
    try {
      prog = gl.createProgram()!;
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(prog) ?? "link failed");
      }
    } catch (e) {
      console.warn("nebula shader failed:", e);
      return; // shader unsupported — plain void stays
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    let raf = 0;
    let inView = true;
    const draw = (t: number) => {
      resize();
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!raf && inView && !document.hidden) raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    if (reduced) {
      resize();
      draw(4000); // one mid-drift frame, then rest
    } else {
      start();
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView && !reduced) start();
        else stop();
      },
      { threshold: 0.02 },
    );
    io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : !reduced && start());
    document.addEventListener("visibilitychange", onVis);
    const onResize = () => reduced && draw(4000);
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", onResize);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
      // Never loseContext() here: under StrictMode the effect unmounts and
      // remounts on the SAME canvas element, and getContext would return
      // the deliberately-lost context — a silently blank canvas.
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
