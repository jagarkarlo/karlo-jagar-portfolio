/**
 * Single source of truth for everything site-specific.
 * Fork the repo, edit this file, and the whole site follows.
 */

export const SITE = {
  name: "Karlo Jagar",
  initials: "KJ",
  role: "DevOps engineer",
  headline: "DevOps & Platform Engineer",
  description:
    "Karlo Jagar builds observable cloud platforms, reliable delivery workflows, and focused developer tools.",
  tagline:
    "I build observable cloud platforms, reliable delivery workflows, and focused developer tools.",
  location: "Varaždin",
  discipline: "Platform engineering",
  locale: "en",
  /** Origin only. The subpath belongs in `base`. */
  url: "https://jagarkarlo.github.io",
  /** Set to "/" when deploying to a domain root. */
  base: "/karlo-jagar-portfolio",
  defaultTheme: "dark",
  themeColor: { dark: "#090d10", light: "#edf0ec" },
  socialImage: "/images/azure-traffic-flow.png",
  portrait: "/images/karlo-jagar-portrait.webp",
  /** Path to a CV file in public/. Leave empty to hide the download link. */
  cv: "/CV.pdf",
  knowsAbout: ["Platform engineering", "Kubernetes", "Observability", "Developer tooling"],
} as const;

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Work", href: "/work/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export type Social = { label: string; href: string; icon: string };

export const SOCIALS: Social[] = [
  { label: "GitHub", href: "https://github.com/jagarkarlo", icon: "simple-icons:github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/karlojagar/", icon: "simple-icons:linkedin" },
];

/** Prefixes a root-relative path with the configured deployment base. */
export const withBase = (path: string): string => {
  const prefix = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${prefix}${path.startsWith("/") ? path : `/${path}`}`;
};
