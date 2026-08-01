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
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <SlideIn>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about/story-main.jpg"
                alt={dict.services.whyImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                priority
              />
            </div>
          </SlideIn>
          <div>
            <SlideIn delay={80}>
              <p className="eyebrow">{dict.services.whyEyebrow}</p>
            </SlideIn>
            <SlideIn delay={180}>
              <h2 className="display mt-4 text-4xl text-foreground sm:text-5xl">
                {dict.services.whyTitle}
              </h2>
            </SlideIn>
            <SlideIn delay={280}>
              <p className="mt-4 text-muted leading-relaxed">{dict.services.whyBody}</p>
            </SlideIn>
            <SlideIn delay={380}>
              <Link href={localizedPath(locale, "/contact")} className="btn btn-primary mt-8">
                {dict.common.requestQuote}
              </Link>
            </SlideIn>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-site max-w-3xl">
          <SlideIn>
            <p className="eyebrow">{dict.services.faqEyebrow}</p>
            <h2 className="display mt-4 text-4xl text-foreground">{dict.services.faqTitle}</h2>
          </SlideIn>
          <div className="mt-10 space-y-4">
            {dict.faqs.map((item, index) => (
              <SlideIn key={item.q} delay={index * 80}>
                <details className="surface-card group p-5">
                  <summary className="cursor-pointer list-none font-bold text-foreground">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
                </details>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
