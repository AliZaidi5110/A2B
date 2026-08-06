import Image from "next/image";
import Link from "next/link";
import { SlideIn } from "@/components/SlideIn";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const icons: Record<string, string> = {
  plane: "✈",
  briefcase: "▣",
  city: "⌂",
  map: "◎",
  booking: "✦",
  vip: "◆",
};

const serviceImages: Record<string, string> = {
  airport: "/images/hero/slide1.jpg",
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
          <h2 className="display mt-4 text-4xl text-foreground sm:text-5xl">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-muted">{dict.services.intro}</p>
        </SlideIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <SlideIn key={service.id} delay={index * 100} as="article">
              <div className="surface-card group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-yellow/40">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={serviceImages[service.id] ?? "/images/hero/banner2.jpg"}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center bg-yellow text-xl text-ink">
                    {icons[service.icon] ?? "●"}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                  <Link
                    href={localizedPath(locale, `/fleet?service=${service.id}`)}
                    className="mt-5 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-yellow transition group-hover:translate-x-1"
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
