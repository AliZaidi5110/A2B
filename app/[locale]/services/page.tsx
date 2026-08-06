import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/ServicesGrid";
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
    title: dict.meta.servicesTitle,
    description: dict.meta.servicesDescription,
    alternates: {
      canonical: localizedPath(locale, "/services"),
      languages: { en: "/en/services", "zh-CN": "/zh/services" },
    },
  };
}

export default async function ServicesPage({
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
        title={dict.services.pageTitle}
        subtitle={dict.services.pageSubtitle}
        image="/images/hero/banner2.jpg"
      />
      <ServicesGrid locale={locale} dict={dict} />

      <section className="section-pad">
        <div className="container-site grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <SlideIn>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/about/story-main.jpg"
                alt={dict.services.whyImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </SlideIn>
          <div className="min-w-0">
            <SlideIn delay={80}>
              <p className="eyebrow">{dict.services.whyEyebrow}</p>
            </SlideIn>
            <SlideIn delay={180}>
              <h2 className="display mt-3 text-3xl text-foreground sm:mt-4 sm:text-4xl md:text-5xl">
                {dict.services.whyTitle}
              </h2>
            </SlideIn>
            <SlideIn delay={280}>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                {dict.services.whyBody}
              </p>
            </SlideIn>
            <SlideIn delay={380}>
              <Link
                href={localizedPath(locale, "/contact")}
                className="btn btn-primary mt-6 min-h-11 sm:mt-8"
              >
                {dict.common.requestQuote}
              </Link>
            </SlideIn>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-site w-full max-w-3xl">
          <SlideIn>
            <p className="eyebrow">{dict.services.faqEyebrow}</p>
            <h2 className="display mt-3 text-3xl text-foreground sm:mt-4 sm:text-4xl">
              {dict.services.faqTitle}
            </h2>
          </SlideIn>
          <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            {dict.faqs.map((item, index) => (
              <SlideIn key={item.q} delay={index * 80}>
                <details className="faq-item surface-card group overflow-hidden">
                  <summary className="faq-summary flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-sm font-bold text-foreground sm:px-5 sm:py-4 sm:text-base">
                    <span className="min-w-0 flex-1 text-left leading-snug">{item.q}</span>
                    <span
                      className="faq-chevron shrink-0 text-yellow transition duration-200 group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="border-t border-line px-4 pb-4 pt-3 text-sm leading-relaxed text-muted sm:px-5 sm:pb-5">
                    {item.a}
                  </p>
                </details>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
