import type { ReactNode } from "react";

/** The one button on the site: ash border, signal only on hover. */
export function BracketLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-block border border-ash px-6 py-3 text-xs font-medium tracking-[0.12em] text-bone transition-colors duration-300 hover:border-signal hover:bg-signal hover:text-void focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-stone md:px-8 md:py-4 md:text-sm"
    >
      [ {children} ]
    </a>
  );
}
