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
  pitchAccent: "Start with one workflow that pays for itself.",
  sub: "For small businesses that already live in Google Workspace.",
  cta: { label: "BOOK A FIT CALL", href: mailto(introSubject) },
  ctaNote: "Free, 20-30 min",
  sublink: { label: "FIND ME ON LINKEDIN →", href: site.linkedin },
};

export const fit = {
  id: "fit",
  kicker: "01  /  FIT",
  title: "Who this is for",
  body: "Operators and founders at small businesses who are drowning in follow-ups and spreadsheet ops. Wholesale, DTC, field services, and small teams that already live in Google Workspace.",
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
      body: "Map the painful process, pick the first win, and leave with a fixed-price Pilot quote.",
    },
    {
      kicker: "02",
      name: "Pilot",
      price: "$4,500-$7,500",
      body: "Ship one production automation you own. n8n, Sheets, Gmail, or the tools you already run.",
    },
    {
      kicker: "03",
      name: "Retain",
      price: "$1,200-$2,000/mo",
      body: "Keep it healthy, and add the next workflow when the first one is earning its keep.",
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
      duration: "1 week",
      body: "Process map, a recommendation for the tools you already have, a sketch of the hours you get back, and a fixed Pilot quote. 100% of the fee is credited toward Pilot if you start within 30 days.",
    },
    {
      name: "Pilot",
      price: "$4,500-$7,500",
      duration: "2-4 weeks",
      body: "One production workflow, end to end: the build, error handling, short docs, a Loom, and a live handoff. You own the n8n, Sheets, and Gmail accounts.",
    },
    {
      name: "Retain",
      price: "$1,200-$2,000/mo",
      duration: "Month-to-month",
      body: "Monitoring, small changes, and one modest new flow a month. Priority response, for as long as it is useful.",
    },
  ],
};

export const proof = {
  id: "proof",
  kicker: "04  /  PROOF",
  title: "Wholesale follow-up that does not drop the ball",
  body: "A Florida company selling into grocery and DTC. Due rows in a Google Sheet send templated Gmail follow-ups through n8n. A real customer reply flips the status and notifies the owner, so the chase stops when someone writes back.",
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
