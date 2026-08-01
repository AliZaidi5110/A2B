import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { BookingBand } from "@/components/BookingBand";
import { Drivers } from "@/components/Drivers";
import { FleetGrid } from "@/components/FleetGrid";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
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
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    alternates: {
      canonical: localizedPath(locale),
      languages: {
        en: "/en",
        "zh-CN": "/zh",
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (isLocale(localeParam) ? localeParam : "en") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <ServicesGrid locale={locale} dict={dict} limit={3} />
      <AboutSection locale={locale} dict={dict} />
      <FleetGrid locale={locale} dict={dict} limit={4} />
      <BookingBand dict={dict} />
      <Drivers dict={dict} />
      <Stats dict={dict} />
      <Testimonials dict={dict} />
    </>
  );
}
