import Link from "next/link";
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
      <div className="container-site grid gap-10 section-pad md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href={localizedPath(locale)} className="display text-4xl text-yellow">
            {siteConfig.shortName}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{dict.footer.blurb}</p>
          <p className="mt-3 text-sm font-bold text-yellow">
            {dict.about.experienceYears}+ {dict.about.experienceLabel}
          </p>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="mt-5 inline-block font-display text-2xl text-foreground transition hover:text-yellow"
          >
            {siteConfig.phoneDisplay}
          </a>
          <p className="mt-2 text-sm text-muted">
            {dict.common.wechat}: {siteConfig.wechat}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">
            {dict.footer.services}
          </h3>
          <ul className="mt-4 space-y-2">
            {dict.services.items.map((s) => (
              <li key={s.id}>
                <Link
                  href={localizedPath(locale, "/services")}
                  className="text-sm text-muted transition hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">
            {dict.footer.explore}
          </h3>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={localizedPath(locale, item.href)}
                  className="text-sm text-muted transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">
            {dict.footer.contact}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}, {siteConfig.address.postalCode}
            <br />
            {dict.about.country}
          </p>
          <p className="mt-4 text-sm text-muted">
            {dict.common.available} {siteConfig.hours}
          </p>
          <Link href={localizedPath(locale, "/contact")} className="btn btn-primary mt-5">
            {dict.common.bookYourRide}
          </Link>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {dict.common.rights}
          </p>
          <p>
            {dict.common.companyNo} {siteConfig.companyNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
