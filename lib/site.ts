/** Single source of truth for identity + contact. Edit here, site-wide. */
export const site = {
  name: "Ford Heacock",
  role: "Software Consultant · AI & Agentic Development",
  location: "Lakeland, FL",
  /** Primary contact channel. */
  email: "ford@fordheacock.com",
  linkedin: "https://www.linkedin.com/in/ford-heacock/",
  /** Set after domain purchase. Used for metadata + OG absolute URLs. */
  url: "https://fordheacock.com",
  tagline:
    "Independent technical verification for founders building with AI.",
} as const;

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
