"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/config";

export function LangAttr({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en-GB";
  }, [locale]);

  return null;
}
