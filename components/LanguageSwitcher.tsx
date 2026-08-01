"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

export function LanguageSwitcher({
  locale,
  labels,
}: {
  locale: Locale;
  labels: { english: string; chinese: string };
}) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(en|zh)/, "") || "";

  return (
    <div
      className="inline-flex items-center overflow-hidden border border-line text-xs font-bold uppercase tracking-[0.12em]"
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => {
        const active = locale === code;
        const href = `/${code}${rest}`;
        const label = code === "en" ? labels.english : labels.chinese;
        return (
          <Link
            key={code}
            href={href}
            hrefLang={code === "zh" ? "zh-CN" : "en"}
            className={`px-2.5 py-1.5 transition ${
              active ? "bg-yellow text-ink" : "bg-transparent text-muted hover:text-yellow"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
