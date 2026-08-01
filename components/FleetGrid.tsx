import Image from "next/image";
import Link from "next/link";
import { SlideIn } from "@/components/SlideIn";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const fleetImages: Record<string, string> = {
  "mercedes-e-class": "/images/fleet/e-class.png",
  "mercedes-v-class": "/images/fleet/v-class.png",
  "mercedes-s-class": "/images/fleet/s-class.png",
  "vip-corporate": "/images/fleet/vip-corporate.png",
};

export function FleetGrid({
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
  const items = limit ? dict.fleet.vehicles.slice(0, limit) : dict.fleet.vehicles;

  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        {showHeader ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SlideIn className="max-w-2xl">
              <p className="eyebrow">{dict.fleet.eyebrow}</p>
              <h2 className="display mt-4 text-4xl text-foreground sm:text-5xl">
                {dict.fleet.title}
              </h2>
              <p className="mt-4 text-muted">{dict.fleet.intro}</p>
            </SlideIn>
            <SlideIn delay={160}>
              <Link
                href={localizedPath(locale, "/fleet")}
                className="btn btn-ghost self-start md:self-auto"
              >
                {dict.common.fullFleet}
              </Link>
            </SlideIn>
          </div>
        ) : null}

        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${showHeader ? "mt-12" : ""}`}
        >
          {items.map((vehicle, index) => (
            <SlideIn key={vehicle.id} delay={index * 100} as="article">
              <div className="surface-card group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-yellow/40">
                <div className="relative flex h-52 items-center justify-center bg-gradient-to-b from-surface-2 to-background p-6">
                  <Image
                    src={fleetImages[vehicle.id] ?? "/images/fleet/e-class.png"}
                    alt={vehicle.name}
                    width={280}
                    height={200}
                    className="max-h-44 w-auto object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-line p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow">
                    {vehicle.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">{vehicle.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{vehicle.description}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {vehicle.features.slice(0, 4).map((f) => (
                      <li key={f} className="text-xs text-foreground/75">
                        <span className="mr-1 text-yellow">■</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-xs uppercase tracking-wider text-muted">
                      {vehicle.passengers}
                    </span>
                    <Link
                      href={localizedPath(locale, "/contact")}
                      className="text-sm font-bold uppercase tracking-[0.12em] text-yellow transition group-hover:translate-x-1"
                    >
                      {dict.common.book}
                    </Link>
                  </div>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
