import type { ReactNode } from "react";
import { about, contact, fit, packages, process, proof } from "@/lib/content";
import { site } from "@/lib/site";
import { BracketLink } from "@/components/bracket-link";

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-ash">
      <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-xs tracking-[0.14em] text-graphite">{kicker}</p>
        <h2 className="mt-4 max-w-[24ch] text-2xl font-medium tracking-display text-chalk md:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export function LandingSections() {
  return (
    <>
      <Section id={fit.id} kicker={fit.kicker} title={fit.title}>
        <p className="mt-6 max-w-[62ch] text-sm leading-[1.7] text-granite md:text-base md:leading-[1.7]">
          {fit.body}
        </p>
        <p className="mt-6 max-w-[62ch] text-sm leading-[1.7] text-graphite">
          <span className="text-ash">{"// "}</span>
          {fit.aside}
        </p>
      </Section>

      <Section id={process.id} kicker={process.kicker} title={process.title}>
        <p className="mt-6 max-w-[62ch] text-sm leading-[1.7] text-granite md:text-base">
          {process.lead}
        </p>
        <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {process.steps.map((step) => (
            <li key={step.name} className="border-t border-ash pt-5">
              <p className="text-xs tracking-[0.14em] text-graphite">{step.kicker}</p>
              <h3 className="mt-3 text-lg text-chalk">{step.name}</h3>
              <p className="mt-2 text-sm text-stone">{step.price}</p>
              <p className="mt-3 text-sm leading-[1.7] text-granite">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id={packages.id} kicker={packages.kicker} title={packages.title}>
        <p className="mt-6 max-w-[62ch] text-sm leading-[1.7] text-granite md:text-base">
          {packages.lead}
        </p>
        <p className="mt-4 text-xs tracking-[0.12em] text-stone">{packages.fitCall}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {packages.items.map((item) => (
            <article key={item.name} className="flex flex-col border border-ash p-6 md:p-7">
              <h3 className="text-base text-chalk md:text-lg">{item.name}</h3>
              <p className="mt-6 text-2xl tracking-display text-chalk md:text-[1.7rem]">
                {item.price}
              </p>
              <p className="mt-2 text-xs tracking-[0.12em] text-stone">{item.duration}</p>
              <p className="mt-5 text-sm leading-[1.7] text-granite">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id={proof.id} kicker={proof.kicker} title={proof.title}>
        <p className="mt-6 max-w-[62ch] text-sm leading-[1.7] text-granite md:text-base">
          {proof.body}
        </p>
        <dl className="mt-8 max-w-[62ch] space-y-3">
          {proof.facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[5.5rem_1fr] gap-4 text-sm">
              <dt className="text-xs tracking-[0.14em] text-graphite">{fact.label}</dt>
              <dd className="text-stone">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id={about.id} kicker={about.kicker} title={about.title}>
        <p className="mt-6 max-w-[62ch] text-sm leading-[1.7] text-granite md:text-base">
          {about.bio}
        </p>
        <p className="mt-4 max-w-[62ch] text-sm leading-[1.7] text-bone md:text-base">
          {about.now}
        </p>
      </Section>

      <section id={contact.id} className="scroll-mt-8 border-t border-ash">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10 md:py-28">
          <p className="text-xs tracking-[0.14em] text-graphite">{contact.kicker}</p>
          <h2 className="mt-4 max-w-[20ch] text-2xl font-medium tracking-display text-chalk md:text-4xl">
            {contact.title}
          </h2>
          <div className="mt-8">
            <BracketLink href={contact.cta.href}>{contact.cta.label}</BracketLink>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-granite">
            <a
              href={contact.cta.href}
              className="text-stone underline decoration-ash underline-offset-4 transition-colors duration-300 hover:text-bone hover:decoration-bone"
            >
              {site.email}
            </a>
            <span className="text-ash"> · </span>
            Free, 20-30 min
          </p>
          <p className="mt-2 text-xs tracking-[0.08em] text-graphite">
            Subject: {contact.subject}
          </p>
          <p className="mt-16 text-xs tracking-[0.14em] text-graphite">
            ~/ {site.name.toLowerCase()} · {site.location.toLowerCase()}
          </p>
        </div>
      </section>
    </>
  );
}
