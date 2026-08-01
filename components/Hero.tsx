import Image from "next/image";
import Link from "next/link";
import { RotatingBadge } from "@/components/RotatingBadge";
import { SlideIn } from "@/components/SlideIn";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const orbitLabel =
    locale === "zh"
      ? "A2B 专车旅游 • 英国豪华出行 • A2B • "
      : "A2B CHAUFFEUR TOURS • LUXURY UK RIDES • A2B • ";

  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden">
      <Image
        src="/images/hero/slide1.jpg"
        alt={dict.hero.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute inset-y-0 left-0 w-1.5 bg-yellow animate-pulse-line" />

      <div className="container-site relative flex min-h-[88vh] items-center py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <SlideIn immediate delay={80}>
              <p className="eyebrow">{dict.hero.eyebrow}</p>
            </SlideIn>
            <SlideIn immediate delay={220}>
              <h1 className="display mt-5 text-6xl text-foreground sm:text-7xl md:text-8xl">
                <span className="block text-yellow">{siteConfig.shortName}</span>
                <span className="mt-2 block text-[0.72em]">{dict.hero.tagline}</span>
              </h1>
            </SlideIn>
            <SlideIn immediate delay={380}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                {dict.hero.support}
              </p>
            </SlideIn>
            <SlideIn immediate delay={520}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={`tel:${siteConfig.phoneTel}`} className="btn btn-primary">
                  {dict.hero.call} {siteConfig.phoneDisplay}
                </a>
                <Link href={localizedPath(locale, "/contact")} className="btn btn-ghost">
                  {dict.common.wechat} {siteConfig.wechat}
                </Link>
              </div>
            </SlideIn>
          </div>

          <SlideIn immediate delay={640} className="flex justify-start lg:justify-end">
            <RotatingBadge label={orbitLabel} />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
