"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SocialLinks } from "@/components/SocialLinks";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

const navKeys = [
  { key: "home", href: "/" },
  { key: "fleet", href: "/fleet" },
  { key: "services", href: "/services" },
  { key: "tours", href: "/tours" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="hamburger-icon" aria-hidden>
      <span className={open ? "is-open" : undefined} />
      <span className={open ? "is-open" : undefined} />
      <span className={open ? "is-open" : undefined} />
    </span>
  );
}

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-50 w-full max-w-full overflow-x-clip border-b border-line bg-background/95 backdrop-blur-md">
      <div className="hidden border-b border-line bg-surface lg:block">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-2 text-sm text-muted">
          <p className="font-medium tracking-wide">
            {dict.header.callLabel} · <span className="text-yellow">{siteConfig.hours}</span>
            <span className="mx-2 text-line">|</span>
            <span className="text-yellow">
              {dict.about.experienceYears}+ {dict.about.experienceLabel}
            </span>
          </p>
          <div className="flex items-center gap-4">
            <SocialLinks compact />
            <LanguageSwitcher locale={locale} label={dict.common.selectLanguage} />
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="font-display text-lg tracking-wide text-foreground transition hover:text-yellow"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="container-site flex w-full max-w-full items-center gap-3 py-2.5">
        <Link
          href={localizedPath(locale)}
          className="group flex min-w-0 flex-1 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={48}
            height={48}
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-yellow/40 sm:h-12 sm:w-12"
            priority
          />
          <span className="flex min-w-0 flex-col pr-1">
            <span className="truncate text-[0.58rem] font-bold uppercase tracking-[0.1em] text-yellow sm:text-xs">
              {dict.common.brandSub}
            </span>
            <span className="truncate text-[0.7rem] font-semibold leading-tight text-foreground sm:text-sm">
              {dict.common.brandLine}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navKeys.map((item) => {
            const href = localizedPath(locale, item.href);
            const active = pathname === href;
            return (
              <Link
                key={item.key}
                href={href}
                className={`text-sm font-semibold uppercase tracking-[0.12em] transition ${
                  active ? "text-yellow" : "text-foreground/80 hover:text-yellow"
                }`}
              >
                {dict.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? dict.common.close : dict.common.menu}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="hamburger-btn inline-flex lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <HamburgerIcon open={open} />
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="mobile-nav border-t border-line bg-surface lg:hidden"
        >
          <nav className="container-site flex flex-col gap-1 py-4">
            <div className="mb-3">
              <LanguageSwitcher locale={locale} label={dict.common.selectLanguage} />
            </div>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="rounded-sm px-3 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-yellow"
              onClick={() => setOpen(false)}
            >
              {dict.hero.call} {siteConfig.phoneDisplay}
            </a>
            {navKeys.map((item) => (
              <Link
                key={item.key}
                href={localizedPath(locale, item.href)}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground hover:bg-surface-2 hover:text-yellow"
              >
                {dict.nav[item.key]}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
