import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LangAttr } from "@/components/LangAttr";
import { isLocale, localeHtmlLang, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const fontClass = locale === "zh" || locale === "th" ? "font-cjk" : "";

  return (
    <div
      lang={localeHtmlLang[locale]}
      className={`flex min-h-full w-full max-w-full flex-1 flex-col overflow-x-clip ${fontClass}`}
    >
      <LangAttr locale={locale} />
      <JsonLd />
      <Header locale={locale} dict={dict} />
      <main className="w-full max-w-full flex-1 overflow-x-clip">{children}</main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
