import { hero, nav } from "@/lib/content";
import { BracketLink } from "@/components/bracket-link";
import { NebulaField } from "@/components/nebula-field";

/**
 * Hero: crisp mono copy over a slow nebula smoke cloud.
 * The canvas is decorative — all content is real, semantic HTML.
 */
export function AsciiHero() {
  return (
    <header className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Terminal prompt header — in-flow so it never collides with the copy below */}
      <div className="relative z-10 px-6 pt-6 md:px-10 md:pt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-xs tracking-[0.14em] text-graphite">
            ~/ $ whoami <span className="text-granite">fordheacock.com</span>
          </p>
          <nav aria-label="On this page">
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] tracking-[0.14em] text-graphite md:text-xs">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors duration-300 hover:text-bone focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-stone"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

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
              <BracketLink href={hero.cta.href}>{hero.cta.label}</BracketLink>
              <p className="mt-4 text-xs leading-relaxed text-graphite">{hero.ctaNote}</p>
              <p className="mt-3 text-xs leading-relaxed">
                <a
                  href={hero.sublink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-graphite underline decoration-ash underline-offset-4 transition-colors duration-300 hover:text-signal hover:decoration-signal focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-stone"
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
