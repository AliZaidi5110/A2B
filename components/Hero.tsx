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
    <section className="relative isolate min-h-[78vh] overflow-hidden sm:min-h-[88vh]">
      <Image
        src="/images/hero/slide1.jpg"
        alt={dict.hero.imageAlt}
        fill
        priority
        className="object-cover object-[70%_center] sm:object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute inset-y-0 left-0 w-1 bg-yellow animate-pulse-line sm:w-1.5" />

      <div className="container-site relative flex min-h-[78vh] items-center py-14 sm:min-h-[88vh] sm:py-20">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="max-w-3xl">
            <SlideIn immediate delay={80}>
              <div className="mb-4 flex items-center gap-3 sm:gap-4">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  width={88}
                  height={88}
                  className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-yellow/50 sm:h-20 sm:w-20 md:h-24 md:w-24"
                  priority
                />
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-yellow sm:text-xs sm:tracking-[0.18em]">
                    {dict.common.brandSub}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-foreground sm:text-base md:text-lg">
                    {dict.common.brandLine}
                  </p>
                </div>
              </div>
              <p className="eyebrow text-[0.7rem] sm:text-sm">{dict.hero.eyebrow}</p>
            </SlideIn>
            <SlideIn immediate delay={220}>
              <h1 className="display mt-4 text-[2.75rem] leading-[0.95] text-foreground sm:mt-5 sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="block text-yellow">{siteConfig.shortName}</span>
                <span className="mt-2 block text-[0.42em] normal-case tracking-normal sm:text-[0.55em] md:text-[0.72em]">
                  {dict.hero.tagline}
                </span>
              </h1>
            </SlideIn>
            <SlideIn immediate delay={380}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/80 sm:mt-6 sm:text-base md:text-lg">
                {dict.hero.support}
              </p>
            </SlideIn>
            <SlideIn immediate delay={520}>
              <p className="mt-5 text-[0.7rem] font-bold uppercase leading-snug tracking-[0.12em] text-yellow sm:mt-6 sm:text-sm sm:tracking-[0.14em]">
                {dict.header.tapMessage}
              </p>
              <div className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:flex-row sm:flex-wrap sm:gap-3">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full sm:w-auto"
                >
                  {dict.common.whatsapp} · {dict.header.dmNow}
                </a>
                <WeChatOpenButton
                  className="btn btn-ghost w-full sm:w-auto"
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
                  className="btn btn-ghost w-full sm:w-auto"
                >
                  {dict.common.line} · {dict.header.dmNow}
                </a>
              </div>
            </SlideIn>
          </div>

          <SlideIn
            immediate
            delay={640}
            className="hidden justify-start sm:flex lg:justify-end"
          >
            <RotatingBadge label={orbitLabel} />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
