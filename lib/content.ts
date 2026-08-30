/**
 * Hero copy — the entire page. The accent line renders in signal red;
 * keep it the shortest, sharpest line on screen.
 */
import { mailto, site } from "./site";

export const hero = {
  name: "FORD HEACOCK",
  role: `SOFTWARE CONSULTANT · AI & AGENTIC DEVELOPMENT — LAKELAND,\u00A0FL`,
  /** Accent line renders red — the reader's stake, not a résumé fact. */
  pitchLead: "Integrating AI or agentic workflows into your business?",
  pitchAccent: "Do it right the first time.",
  sub: "I’ve spent 13 years building and shipping software for startups and NASA, working on everything from payment systems processing hundreds of millions of dollars to tools used to manage software for the International Space Station. Along the way, I’ve built products and user experiences used by millions of people, always with a focus on making complex things feel simple and intuitive.",
  cta: { label: "START A CONVERSATION", href: mailto("AI consulting — intro call") },
  sublink: { label: "FIND ME ON LINKEDIN →", href: site.linkedin },
};

