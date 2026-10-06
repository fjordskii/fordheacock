/**
 * Page copy. The accent line renders in signal red;
 * keep it the sharpest line on the hero.
 *
 * Published prices are locked. Do not drift them to match a draft.
 */
import { introSubject, mailto, site } from "./site";

export const nav = [
  { href: "#fit", label: "fit" },
  { href: "#process", label: "process" },
  { href: "#packages", label: "packages" },
  { href: "#proof", label: "proof" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
] as const;

export const hero = {
  name: "FORD HEACOCK",
  role: "SOFTWARE CONSULTANT · AI & OPS AUTOMATION · LAKELAND, FL",
  /** Accent line renders red. */
  pitchLead: "Still chasing follow-ups by hand?",
  pitchAccent: "I find the chore that costs you money, fix the process, then automate it.",
  sub: "On the tools you already run.",
  cta: { label: "BOOK A FIT CALL", href: mailto(introSubject) },
  ctaNote: "Free, 20-30 min",
  sublink: { label: "FIND ME ON LINKEDIN →", href: site.linkedin },
};

export const fit = {
  id: "fit",
  kicker: "01  /  FIT",
  title: "Who this is for",
  body: "Operators and founders at small businesses drowning in follow-ups and spreadsheet ops. Wholesale, DTC, field services, small teams. Whatever stack you already use is fine.",
  aside:
    "One workflow for a small team. You own it.",
};

export const process = {
  id: "process",
  kicker: "02  /  PROCESS",
  title: "How we work",
  lead: "A free 20-30 minute fit call comes first. It is there to see whether the problem is real, and whether I am the right person to fix it.",
  steps: [
    {
      kicker: "01",
      name: "Discovery",
      price: "$1,000-$1,500",
      body: "Walk through where time and money leak. Map the process, rank the fixes, and leave with a fixed Pilot quote.",
    },
    {
      kicker: "02",
      name: "Pilot",
      price: "$4,500-$7,500",
      body: "One production workflow you own. Build, error handling, short docs, a Loom, and a live handoff. n8n, Sheets, Gmail, or whatever you already run. Done when your team can run it without you.",
    },
    {
      kicker: "03",
      name: "Retain",
      price: "$1,200-$2,000/mo",
      body: "Keep the Pilot healthy. Small changes, and one modest new flow a month when the first is paying for itself. Priority when something breaks.",
    },
  ],
};

export const packages = {
  id: "packages",
  kicker: "03  /  PACKAGES",
  title: "Packages",
  lead: "The exact quote comes after Discovery, or after the fit call if the problem is already crisp. The pilot stays a fixed price.",
  fitCall: "Fit call is free, 20-30 minutes.",
  items: [
    {
      name: "Discovery / Ops Audit",
      price: "$1,000-$1,500",
      duration: "about 1 week",
      body: "Walk through where time and money leak. Short process map, 3-5 ranked fixes, what to do yourself vs with me, fixed Pilot quote. 100% of the fee credits toward Pilot if you start within 30 days.",
    },
    {
      name: "Pilot",
      price: "$4,500-$7,500",
      duration: "2-4 weeks",
      body: "One production workflow you own. Build, error handling, short docs, a Loom, live handoff. n8n, Sheets, Gmail, or whatever you already run. Done when your team can run it without me.",
    },
    {
      name: "Retain",
      price: "$1,200-$2,000/mo",
      duration: "month to month",
      body: "Keep the Pilot healthy, small changes, and one modest new flow a month when the first one is paying for itself. Priority when something breaks.",
    },
  ],
};

export const proof = {
  id: "proof",
  kicker: "04  /  PROOF",
  title: "Wholesale follow-up that does not drop the ball",
  body: "Due rows in a sheet send templated emails; a real reply stops the chase and pings the owner. They saw the demo and moved ahead.",
  facts: [
    { label: "STACK", value: "Google Sheets · n8n · Gmail" },
    { label: "RESULT", value: "They saw a demo and moved ahead." },
  ],
};

export const about = {
  id: "about",
  kicker: "05  /  ABOUT",
  title: "About",
  bio: "I’ve spent 13 years building and shipping software for startups and NASA, working on everything from payment systems processing hundreds of millions of dollars to tools used to manage software for the International Space Station. Along the way, I’ve built products and user experiences used by millions of people.",
  now: "Now I help Florida operators automate the work that fills their week.",
};

export const contact = {
  id: "contact",
  kicker: "06  /  CONTACT",
  title: "Book a free fit call.",
  subject: introSubject,
  cta: { label: "BOOK A FIT CALL", href: mailto(introSubject) },
};
