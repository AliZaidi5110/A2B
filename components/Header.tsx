"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ContactQuickBar } from "@/components/ContactQuickBar";
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

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md">
      <ContactQuickBar locale={locale} dict={dict} />
      <div className="border-b border-line bg-surface">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-2 text-sm text-muted">
          <p className="font-medium tracking-wide">
            {dict.header.callLabel} · <span className="text-yellow">{siteConfig.hours}</span>
            <span className="mx-2 text-line">|</span>
            <span className="text-yellow">
              {dict.about.experienceYears}+ {dict.about.experienceLabel}
            </span>
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <SocialLinks compact className="hidden sm:flex" />
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

      <div className="container-site flex items-center justify-between gap-4 py-3">
        <Link
          href={localizedPath(locale)}
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={56}
            height={56}
            className="h-12 w-12 rounded-full object-cover ring-1 ring-yellow/40 sm:h-14 sm:w-14"
            priority
          />
          <span className="flex min-w-0 flex-col">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-yellow sm:text-xs">
              {dict.common.brandSub}
            </span>
            <span className="text-sm font-semibold leading-tight text-foreground sm:text-base">
              {dict.common.brandLine}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
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

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden sm:inline-flex"
          >
            {dict.header.freeQuote}
          </a>
          <button
            type="button"
            aria-label={dict.common.menu}
            aria-expanded={open}
            className="btn btn-ghost px-3 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? dict.common.close : dict.common.menu}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-surface lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4">
            <div className="mb-2 px-3">
              <LanguageSwitcher locale={locale} label={dict.common.selectLanguage} />
            </div>
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
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2"
            >
              {dict.header.freeQuote}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
