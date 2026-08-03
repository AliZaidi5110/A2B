import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SlideIn } from "@/components/SlideIn";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (isLocale(localeParam) ? localeParam : "en") as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
    alternates: {
      canonical: localizedPath(locale, "/about"),
      languages: { en: "/en/about", "zh-CN": "/zh/about" },
    },
  };
}

export default async function AboutPage({
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
        title={dict.about.pageTitle}
        subtitle={dict.about.pageSubtitle}
        image="/images/about/hero-about.jpg"
      />

      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SlideIn>
              <p className="eyebrow">{dict.about.storyEyebrow}</p>
            </SlideIn>
            <SlideIn delay={80}>
              <div className="mt-4 inline-flex items-end gap-3 border border-yellow/40 bg-yellow/10 px-4 py-3">
                <span className="display text-5xl leading-none text-yellow">
                  {dict.about.experienceYears}
                </span>
                <span className="pb-1 text-xs font-bold uppercase tracking-[0.16em] text-foreground">
                  {dict.about.experienceLabel}
                </span>
              </div>
            </SlideIn>
            <SlideIn delay={120}>
              <h2 className="display mt-4 text-4xl text-foreground sm:text-5xl">
                {dict.about.storyTitle}
              </h2>
            </SlideIn>
            <SlideIn delay={220}>
              <p className="mt-5 text-muted leading-relaxed">{dict.about.storyP1}</p>
            </SlideIn>
            <SlideIn delay={320}>
              <p className="mt-4 text-muted leading-relaxed">{dict.about.storyP2}</p>
            </SlideIn>
            <SlideIn delay={420}>
              <ul className="mt-7 space-y-3">
                {dict.about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-1 inline-block h-2 w-2 shrink-0 bg-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </SlideIn>
          </div>
          <SlideIn delay={180}>
            <div className="relative">
              <div className="absolute -right-3 -top-3 h-20 w-20 border-r-2 border-t-2 border-yellow" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/about/story-main.jpg"
                  alt={dict.about.imageAlt1}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -left-3 w-[48%] overflow-hidden border-4 border-background sm:-left-5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/about/story-car.jpg"
                    alt={dict.about.imageAlt2}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      <section className="border-y border-line bg-surface section-pad">
        <div className="container-site grid gap-8 md:grid-cols-3">
          <SlideIn>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">
              {dict.about.office}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.postalCode}
              <br />
              {dict.about.country}
            </p>
          </SlideIn>
          <SlideIn delay={120}>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">
              {dict.about.company}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {siteConfig.name}
              <br />
              {dict.common.companyNo} {siteConfig.companyNumber}
            </p>
          </SlideIn>
          <SlideIn delay={220}>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">
              {dict.about.bookNow}
            </h3>
            <p className="mt-3 text-sm text-muted">
              {dict.hero.call}{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="text-yellow">
                {siteConfig.phoneDisplay}
              </a>
              <br />
              {dict.common.wechat} {siteConfig.wechat}
              <br />
              {dict.common.line}{" "}
              <a
                href={siteConfig.lineHref}
                target="_blank"
                rel="noreferrer"
                className="text-yellow"
              >
                {siteConfig.lineDisplay}
              </a>
            </p>
            <Link href={localizedPath(locale, "/contact")} className="btn btn-primary mt-5">
              {dict.common.contactUs}
            </Link>
          </SlideIn>
        </div>
      </section>
    </>
  );
}
