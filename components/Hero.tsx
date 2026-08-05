import Image from "next/image";
import { RotatingBadge } from "@/components/RotatingBadge";
import { SlideIn } from "@/components/SlideIn";
import { WeChatOpenButton } from "@/components/WeChatOpenButton";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const orbitLabels: Record<Locale, string> = {
    en: "A2B CHAUFFEUR TOURS • 28 YEARS EXPERIENCE • A2B • ",
    zh: "A2B 专车旅游 • 28年经验 • A2B • ",
    id: "A2B CHAUFFEUR TOURS • 28 TAHUN PENGALAMAN • A2B • ",
    ms: "A2B CHAUFFEUR TOURS • 28 TAHUN PENGALAMAN • A2B • ",
    th: "A2B CHAUFFEUR TOURS • ประสบการณ์ 28 ปี • A2B • ",
  };
  const orbitLabel = orbitLabels[locale];

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
              <div className="mb-4 flex items-center gap-4">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  width={88}
                  height={88}
                  className="h-20 w-20 rounded-full object-cover ring-2 ring-yellow/50 sm:h-24 sm:w-24"
                  priority
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow">
                    {dict.common.brandSub}
                  </p>
                  <p className="mt-1 text-base font-semibold text-foreground sm:text-lg">
                    {dict.common.brandLine}
                  </p>
                </div>
              </div>
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
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-yellow">
                {dict.header.tapMessage}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  {dict.common.whatsapp} · {dict.header.dmNow}
                </a>
                <WeChatOpenButton
                  className="btn btn-ghost"
                  copyLabel={dict.header.wechatCopy}
                  openAppLabel={dict.header.wechatOpenApp}
                  hint={dict.header.wechatHint}
                  closeLabel={dict.common.close}
                >
                  {dict.common.wechat} {siteConfig.wechat}
                </WeChatOpenButton>
                <a
                  href={siteConfig.lineHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  {dict.common.line} · {dict.header.dmNow}
                </a>
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
