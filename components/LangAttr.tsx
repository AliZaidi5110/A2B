"use client";

import { useEffect } from "react";
import { localeHtmlLang, type Locale } from "@/lib/i18n/config";

export function LangAttr({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale] ?? "en-GB";
  }, [locale]);

  return null;
}
