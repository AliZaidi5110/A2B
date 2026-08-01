import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (isLocale(localeParam) ? localeParam : "en") as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
    alternates: {
      canonical: localizedPath(locale, "/contact"),
      languages: { en: "/en/contact", "zh-CN": "/zh/contact" },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (isLocale(localeParam) ? localeParam : "en") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.pageHero.eyebrow}
        title={dict.contact.pageTitle}
        subtitle={dict.contact.pageSubtitle}
        image="/images/hero/cta-bg.jpg"
      />
      <ContactSection locale={locale} dict={dict} />
    </>
  );
}
