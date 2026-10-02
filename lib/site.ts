/** Single source of truth for identity + contact. Edit here, site-wide. */
export const site = {
  name: "Ford Heacock",
  role: "Software Consultant · AI & Ops Automation",
  location: "Lakeland, FL",
  /** Primary contact channel. */
  email: "ford@fordheacock.com",
  linkedin: "https://www.linkedin.com/in/ford-heacock/",
  /** Set after domain purchase. Used for metadata + OG absolute URLs. */
  url: "https://fordheacock.com",
  tagline: "AI and ops automation for SMB operators. One workflow that pays for itself.",
  description:
    "Ford Heacock builds AI and ops automation for small businesses in Lakeland, FL. One production workflow you own, then the next. 13 years shipping software for startups and NASA.",
} as const;

export const introSubject = "AI consulting - intro call";

export const mailto = (subject: string = introSubject) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
