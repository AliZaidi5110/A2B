import Image from "next/image";
import { SlideIn } from "@/components/SlideIn";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden border-y border-line">
      <Image
        src="/images/hero/bg1.jpg"
        alt=""
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
      <div className="container-site relative grid grid-cols-2 gap-8 py-16 lg:grid-cols-4">
        {dict.stats.items.map((stat, index) => (
          <SlideIn key={stat.label} delay={index * 100} className="text-center">
            <p className="display text-4xl text-yellow sm:text-5xl">{stat.value}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-muted">
              {stat.label}
            </p>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}
