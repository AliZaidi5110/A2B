import Image from "next/image";
import { SlideIn } from "@/components/SlideIn";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

const images = [
  "/images/drivers/team1.jpg",
  "/images/drivers/team2.jpg",
  "/images/drivers/team3.jpg",
];

export function Drivers({ dict }: { dict: Dictionary }) {
  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <SlideIn className="max-w-2xl">
          <p className="eyebrow">{dict.drivers.eyebrow}</p>
          <h2 className="display mt-4 text-4xl text-foreground sm:text-5xl">
            {dict.drivers.title}
          </h2>
          <p className="mt-4 text-muted">{dict.drivers.body}</p>
        </SlideIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {dict.drivers.items.map((driver, index) => (
            <SlideIn key={driver.name} delay={index * 120} as="article">
              <div className="group overflow-hidden surface-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={images[index] ?? images[0]}
                    alt={driver.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="border-t border-line p-5">
                  <h3 className="text-lg font-bold text-foreground">{driver.name}</h3>
                  <p className="mt-1 text-sm text-muted">{driver.role}</p>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="mt-3 inline-block text-sm font-bold text-yellow"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
