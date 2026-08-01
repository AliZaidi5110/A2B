import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";
import { SlideIn } from "@/components/SlideIn";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function BookingBand({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero/cta-bg.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/85" />
      <div className="container-site relative grid gap-10 section-pad lg:grid-cols-2 lg:items-center">
        <SlideIn>
          <p className="eyebrow">{dict.booking.eyebrow}</p>
          <h2 className="display mt-4 text-4xl text-foreground sm:text-5xl">
            {dict.booking.title}
          </h2>
          <p className="mt-4 max-w-md text-muted">{dict.booking.body}</p>
        </SlideIn>
        <SlideIn delay={180}>
          <div className="surface-card p-6 sm:p-8">
            <BookingForm dict={dict} compact />
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
