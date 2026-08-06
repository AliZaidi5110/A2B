import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const nav = [
    { href: "/", label: dict.nav.home },
    { href: "/fleet", label: dict.nav.fleet },
    { href: "/services", label: dict.nav.services },
    { href: "/tours", label: dict.nav.tours },
    { href: "/about", label: dict.nav.about },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-site grid grid-cols-1 gap-8 section-pad sm:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="min-w-0 lg:col-span-1">
          <Link
            href={localizedPath(locale)}
            className="inline-flex min-h-11 min-w-0 max-w-full items-center gap-3"
          >
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={64}
              height={64}
              className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-yellow/40 sm:h-14 sm:w-14"
              sizes="56px"
            />
            <span className="flex min-w-0 flex-col">
              <span className="truncate text-[0.65rem] font-bold uppercase tracking-[0.14em] text-yellow sm:text-xs">
                {dict.common.brandSub}
              </span>
              <span className="text-sm font-semibold leading-snug text-foreground">
                {dict.common.brandLine}
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{dict.footer.blurb}</p>
          <p className="mt-3 text-sm font-bold text-yellow">
            {dict.about.experienceYears}+ {dict.about.experienceLabel}
          </p>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="mt-4 inline-flex min-h-11 items-center font-display text-xl text-foreground transition hover:text-yellow sm:mt-5 sm:text-2xl"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">
            {dict.footer.services}
          </h3>
          <ul className="mt-3 space-y-0.5 sm:mt-4">
            {dict.services.items.map((s) => (
              <li key={s.id}>
                <Link
                  href={localizedPath(locale, "/services")}
                  className="inline-flex min-h-11 items-center text-sm text-muted transition hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">
            {dict.footer.explore}
          </h3>
          <ul className="mt-3 space-y-0.5 sm:mt-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={localizedPath(locale, item.href)}
                  className="inline-flex min-h-11 items-center text-sm text-muted transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">
            {dict.footer.contact}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}, {siteConfig.address.postalCode}
            <br />
            {dict.about.country}
          </p>
          <p className="mt-4 text-sm text-muted">
            {dict.common.available} {siteConfig.hours}
          </p>
          <div className="mt-5 space-y-1 text-sm text-muted sm:mt-6 sm:space-y-2">
            <p className="flex min-h-11 flex-wrap items-center gap-x-1">
              <span>{dict.common.whatsapp}:</span>{" "}
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center transition hover:text-yellow"
              >
                {siteConfig.whatsappDisplay}
              </a>
            </p>
            <p className="flex min-h-11 items-center">
              {dict.common.wechat}: {siteConfig.wechat}
            </p>
            <p className="flex min-h-11 flex-wrap items-center gap-x-1">
              <span>{dict.common.line}:</span>{" "}
              <a
                href={siteConfig.lineHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center transition hover:text-yellow"
              >
                {siteConfig.lineDisplay}
              </a>
            </p>
          </div>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-yellow sm:mt-6">
            {dict.contact.social}
          </p>
          <SocialLinks className="mt-3" />
          <Link
            href={localizedPath(locale, "/contact")}
            className="btn btn-primary mt-5 min-h-11 w-full sm:w-auto"
          >
            {dict.common.bookYourRide}
          </Link>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-5 text-xs leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="min-w-0 break-words">
            © {new Date().getFullYear()} {siteConfig.name}. {dict.common.rights}
          </p>
          <p className="shrink-0">
            {dict.common.companyNo} {siteConfig.companyNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
