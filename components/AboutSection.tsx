import Image from "next/image";
import Link from "next/link";
import { SlideIn } from "@/components/SlideIn";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

export function AboutSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-pad overflow-hidden">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <SlideIn>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-yellow" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about/story-main.jpg"
                alt={dict.about.imageAlt1}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 w-[55%] overflow-hidden border-4 border-background sm:-right-6">
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
            <div className="absolute bottom-8 left-4 bg-yellow px-5 py-4 text-ink shadow-lg sm:left-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em]">
                {dict.about.callForTaxi}
              </p>
              <a href={`tel:${siteConfig.phoneTel}`} className="display mt-1 block text-2xl">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </SlideIn>

        <div className="lg:pl-6">
          <SlideIn delay={80}>
            <p className="eyebrow">{dict.about.eyebrow}</p>
          </SlideIn>
          <SlideIn delay={140}>
            <div className="mt-4 inline-flex items-end gap-3 border border-yellow/40 bg-yellow/10 px-4 py-3">
              <span className="display text-5xl leading-none text-yellow">
                {dict.about.experienceYears}
              </span>
              <span className="pb-1 text-xs font-bold uppercase tracking-[0.16em] text-foreground">
                {dict.about.experienceLabel}
              </span>
            </div>
          </SlideIn>
          <SlideIn delay={180}>
            <h2 className="display mt-4 text-4xl text-foreground sm:text-5xl">
              {dict.about.title}
            </h2>
          </SlideIn>
          <SlideIn delay={280}>
            <p className="mt-5 text-base leading-relaxed text-muted">{dict.about.body}</p>
          </SlideIn>
          <SlideIn delay={380}>
            <ul className="mt-7 space-y-3">
              {dict.about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 bg-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </SlideIn>
          <SlideIn delay={480}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={localizedPath(locale, "/about")} className="btn btn-primary">
                {dict.common.aboutA2b}
              </Link>
              <Link href={localizedPath(locale, "/fleet")} className="btn btn-ghost">
                {dict.common.viewFleet}
              </Link>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
