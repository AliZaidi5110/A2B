import type { Metadata } from "next";
import Link from "next/link";
import { FleetGrid } from "@/components/FleetGrid";
import { PageHero } from "@/components/PageHero";
import { SlideIn } from "@/components/SlideIn";
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
    title: dict.meta.fleetTitle,
    description: dict.meta.fleetDescription,
    alternates: {
      canonical: localizedPath(locale, "/fleet"),
      languages: { en: "/en/fleet", "zh-CN": "/zh/fleet" },
    },
  };
}

export default async function FleetPage({
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
        title={dict.fleet.pageTitle}
        subtitle={dict.fleet.pageSubtitle}
        image="/images/hero/banner2.jpg"
      />
      <FleetGrid locale={locale} dict={dict} showHeader={false} />
      <section className="border-t border-line bg-surface py-16">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <SlideIn>
            <h2 className="display text-3xl text-foreground sm:text-4xl">
              {dict.fleet.ctaTitle}
            </h2>
            <p className="mt-2 text-muted">{dict.fleet.ctaBody}</p>
          </SlideIn>
          <SlideIn delay={160}>
            <Link href={localizedPath(locale, "/contact")} className="btn btn-primary">
              {dict.common.bookYourRide}
            </Link>
          </SlideIn>
        </div>
      </section>
    </>
  );
}
