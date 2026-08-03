export const locales = ["en", "zh", "id", "ms", "th"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  id: "Bahasa Indonesia",
  ms: "Bahasa Malaysia",
  th: "ภาษาไทย",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en-GB",
  zh: "zh-CN",
  id: "id-ID",
  ms: "ms-MY",
  th: "th-TH",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localizedPath(locale: Locale, path = "/") {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}
