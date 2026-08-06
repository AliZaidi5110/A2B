import Image from "next/image";
import Link from "next/link";
import { SlideIn } from "@/components/SlideIn";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const icons: Record<string, string> = {
  plane: "✈",
  anchor: "⚓",
  briefcase: "▣",
  city: "⌂",
  map: "◎",
  booking: "✦",
  vip: "◆",
};

const serviceImages: Record<string, string> = {
  airport: "/images/hero/slide1.jpg",
  seaport: "/images/hero/banner2.jpg",
  business: "/images/about/story-car.jpg",
  city: "/images/hero/bg1.jpg",
  tours: "/images/about/hero-about.jpg",
  online: "/images/hero/cta-bg.jpg",
  vip: "/images/about/story-main.jpg",
};

export function ServicesGrid({
  locale,
  dict,
  limit,
}: {
  locale: Locale;
  dict: Dictionary;
  limit?: number;
}) {
  const items = limit ? dict.services.items.slice(0, limit) : dict.services.items;

  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <SlideIn className="max-w-2xl">
          <p className="eyebrow">{dict.services.eyebrow}</p>
          <h2 className="display mt-3 text-3xl text-foreground sm:mt-4 sm:text-4xl md:text-5xl">
            {dict.services.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
            {dict.services.intro}
          </p>
        </SlideIn>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {items.map((service, index) => (
            <SlideIn key={service.id} delay={index * 100} as="article">
              <div className="surface-card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-yellow/40">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={serviceImages[service.id] ?? "/images/hero/banner2.jpg"}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center bg-yellow text-lg text-ink sm:bottom-4 sm:left-4 sm:h-12 sm:w-12 sm:text-xl">
                    {icons[service.icon] ?? "●"}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg font-bold text-foreground sm:text-xl">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:mt-3">
                    {service.description}
                  </p>
                  <Link
                    href={localizedPath(locale, `/fleet?service=${service.id}`)}
                    className="mt-4 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-[0.14em] text-yellow transition group-hover:translate-x-1 sm:mt-5"
                  >
                    {dict.common.bookNow} →
                  </Link>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
