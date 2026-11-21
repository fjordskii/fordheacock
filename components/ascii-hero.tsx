import { hero } from "@/lib/content";
import { BracketLink } from "@/components/bracket-link";
import { NebulaField } from "@/components/nebula-field";

/**
 * Hero: crisp mono copy over a slow nebula smoke cloud.
 * The canvas is decorative. All content is real, semantic HTML.
 */
export function AsciiHero() {
  return (
    <header className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="relative z-10 px-6 pt-6 md:px-10 md:pt-8">
        <p className="text-xs tracking-[0.14em] text-graphite">
          ~/ $ whoami <span className="text-granite">fordheacock.com</span>
        </p>
      </div>

      <NebulaField />

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

            <div className="mt-8 md:mt-12">
              <BracketLink href={hero.cta.href} external>
                {hero.cta.label}
              </BracketLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
