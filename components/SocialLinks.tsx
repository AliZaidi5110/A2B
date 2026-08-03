import { siteConfig } from "@/lib/site";

type SocialLinksProps = {
  className?: string;
  /** Smaller icons for header / compact areas */
  compact?: boolean;
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[1.1em] w-[1.1em]" fill="currentColor" aria-hidden>
      <path d="M12 7.2A4.8 4.8 0 1016.8 12 4.8 4.8 0 0012 7.2zm0 7.9A3.1 3.1 0 1115.1 12 3.1 3.1 0 0112 15.1z" />
      <circle cx="17.4" cy="6.6" r="1.15" />
      <path d="M16.8 2.1H7.2A5.1 5.1 0 002.1 7.2v9.6a5.1 5.1 0 005.1 5.1h9.6a5.1 5.1 0 005.1-5.1V7.2a5.1 5.1 0 00-5.1-5.1zm3.4 14.7a3.4 3.4 0 01-3.4 3.4H7.2a3.4 3.4 0 01-3.4-3.4V7.2a3.4 3.4 0 013.4-3.4h9.6a3.4 3.4 0 013.4 3.4z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[1.15em] w-[1.15em]" fill="currentColor" aria-hidden>
      <path d="M14.2 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1A23 23 0 0014.5 4c-2.6 0-4.4 1.6-4.4 4.5v2.5H7.3v3.2h2.8V22z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[1.15em] w-[1.15em]" fill="currentColor" aria-hidden>
      <path d="M19.6 8.1a6.5 6.5 0 01-3.8-1.2v7.1a5.7 5.7 0 11-5.7-5.7c.3 0 .6 0 .9.1v2.8a2.9 2.9 0 00-.9-.1 2.9 2.9 0 102.9 2.9V2.5h2.7a6.5 6.5 0 003.9 3.8v1.8z" />
    </svg>
  );
}

const links = [
  {
    key: "instagram",
    href: siteConfig.social.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    key: "facebook",
    href: siteConfig.social.facebook,
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    key: "tiktok",
    href: siteConfig.social.tiktok,
    label: "TikTok",
    Icon: TikTokIcon,
  },
] as const;

export function SocialLinks({ className = "", compact = false }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map(({ key, href, label, Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? "social-orb social-orb--compact" : "social-orb"}
          aria-label={label}
          title={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
