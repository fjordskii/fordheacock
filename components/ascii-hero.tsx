import { hero } from "@/lib/content";
import { NebulaField } from "@/components/nebula-field";

/**
 * Hero: crisp mono copy over a slow nebula smoke cloud.
 * The canvas is decorative — all content is real, semantic HTML.
 */
export function AsciiHero() {
  return (
    <header className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Terminal prompt header — in-flow so it never collides with the copy below */}
      <p className="relative z-10 px-6 pt-6 text-xs tracking-[0.14em] text-graphite md:px-10 md:pt-8">
        ~/ $ whoami{" "}
        <span className="text-granite">fordheacock.com</span>
      </p>

      <NebulaField />

      {/* Copy — anchored low on all viewports */}
      <div className="relative z-10 flex flex-1 items-end">
        <div className="w-full">
          <div className="mx-auto w-full max-w-5xl px-6 pb-10 md:px-10 md:pb-28">
            <h1 className="text-4xl font-medium tracking-display text-chalk md:text-7xl">
              {hero.name}
            </h1>
            <p className="mt-2 text-xs tracking-[0.08em] text-stone md:mt-3 md:text-base">
              {hero.role}
              <span className="block-cursor" aria-hidden />
            </p>

            <p className="mt-8 max-w-[58ch] text-base leading-[1.6] text-bone md:mt-12 md:text-xl md:leading-[1.65]">
              {hero.pitchLead}
              <br />
              <span className="text-signal">{hero.pitchAccent}</span>
            </p>
            <p className="mt-4 max-w-[52ch] text-xs leading-[1.6] text-granite md:mt-5 md:text-base md:leading-[1.65]">
              {hero.sub}
            </p>

            <div className="mt-8 md:mt-12">
              <a
                href={hero.cta.href}
                className="inline-block border border-ash px-6 py-3 text-xs font-medium tracking-[0.12em] text-bone transition-colors duration-300 hover:border-signal hover:bg-signal hover:text-void md:px-8 md:py-4 md:text-sm"
              >
                [ {hero.cta.label} ]
              </a>
              <p className="mt-4 text-xs leading-relaxed">
                <a
                  href={hero.sublink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-graphite underline decoration-ash underline-offset-4 transition-colors duration-300 hover:text-signal hover:decoration-signal"
                >
                  {hero.sublink.label}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
