"use client";

import { usePathname, useRouter } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const rest = pathname.replace(/^\/(en|zh|id|ms|th)/, "") || "";

  return (
    <label className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted">
      <span className="sr-only">Language</span>
      <select
        value={locale}
        aria-label="Language"
        className="max-w-[11rem] cursor-pointer border border-line bg-surface px-2 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-foreground outline-none transition hover:border-yellow focus:border-yellow"
        onChange={(e) => {
          const next = e.target.value as Locale;
          router.push(`/${next}${rest}`);
        }}
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
