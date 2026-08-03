import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SlideIn } from "@/components/SlideIn";
import { ToursGrid } from "@/components/ToursGrid";
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
    title: dict.meta.toursTitle,
    description: dict.meta.toursDescription,
    alternates: {
      canonical: localizedPath(locale, "/tours"),
      languages: {
        en: "/en/tours",
        "zh-CN": "/zh/tours",
        id: "/id/tours",
        ms: "/ms/tours",
        th: "/th/tours",
      },
    },
  };
}

export default async function ToursPage({
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
        title={dict.tours.pageTitle}
        subtitle={dict.tours.pageSubtitle}
        image="/images/hero/banner1.jpg"
      />

      <section className="border-b border-line bg-surface py-10">
        <div className="container-site flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <SlideIn>
            <p className="display text-5xl text-yellow">{dict.tours.experienceBadge}</p>
            <p className="mt-2 max-w-xl text-muted">{dict.tours.intro}</p>
          </SlideIn>
          <SlideIn delay={160}>
            <Link href={localizedPath(locale, "/contact")} className="btn btn-primary">
              {dict.tours.bookTour}
            </Link>
          </SlideIn>
        </div>
      </section>

      <ToursGrid locale={locale} dict={dict} showHeader={false} />

      <section className="border-t border-line bg-surface py-16">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <SlideIn>
            <h2 className="display text-3xl text-foreground sm:text-4xl">
              {dict.tours.ctaTitle}
            </h2>
            <p className="mt-2 text-muted">{dict.tours.ctaBody}</p>
          </SlideIn>
          <SlideIn delay={160}>
            <Link href={localizedPath(locale, "/contact")} className="btn btn-primary">
              {dict.tours.bookTour}
            </Link>
          </SlideIn>
        </div>
      </section>
    </>
  );
}
