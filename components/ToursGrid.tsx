import Image from "next/image";
import Link from "next/link";
import { SlideIn } from "@/components/SlideIn";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function ToursGrid({
  locale,
  dict,
  limit,
  showHeader = true,
}: {
  locale: Locale;
  dict: Dictionary;
  limit?: number;
  showHeader?: boolean;
}) {
  const items = limit ? dict.tours.items.slice(0, limit) : dict.tours.items;

  return (
    <section className="section-pad">
      <div className="container-site">
        {showHeader ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SlideIn className="max-w-2xl">
              <p className="eyebrow">{dict.tours.eyebrow}</p>
              <h2 className="display mt-4 text-4xl text-foreground sm:text-5xl">
                {dict.tours.title}
              </h2>
              <p className="mt-4 text-muted">{dict.tours.intro}</p>
            </SlideIn>
            <SlideIn delay={140}>
              <div className="inline-flex flex-col items-start border border-yellow/50 bg-yellow/10 px-5 py-4">
                <span className="display text-4xl text-yellow">{dict.about.experienceYears}</span>
                <span className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-foreground">
                  {dict.about.experienceLabel}
                </span>
              </div>
            </SlideIn>
          </div>
        ) : null}

        <div className={`grid gap-6 sm:grid-cols-2 ${showHeader ? "mt-12" : ""}`}>
          {items.map((tour, index) => (
            <SlideIn key={tour.id} delay={index * 100} as="article">
              <div className="surface-card group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-yellow/40">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-ink">
                    {tour.duration}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{tour.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{tour.description}</p>
                  <Link
                    href={localizedPath(locale, "/contact")}
                    className="mt-5 inline-flex text-sm font-bold uppercase tracking-[0.12em] text-yellow transition group-hover:translate-x-1"
                  >
                    {dict.tours.bookTour} →
                  </Link>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>

        {showHeader ? (
          <SlideIn delay={200} className="mt-10">
            <Link href={localizedPath(locale, "/tours")} className="btn btn-ghost">
              {dict.common.learnMore}
            </Link>
          </SlideIn>
        ) : null}
      </div>
    </section>
  );
}
