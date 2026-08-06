import Image from "next/image";
import { SlideIn } from "@/components/SlideIn";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/images/hero/banner1.jpg",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate min-h-[32vh] overflow-hidden py-14 sm:min-h-[40vh] sm:py-20 md:min-h-[48vh] md:py-28 lg:py-32">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute inset-y-0 left-0 w-1 bg-yellow sm:w-1.5" />
      <div className="container-site relative z-10 max-w-full">
        <SlideIn immediate delay={80}>
          <p className="eyebrow text-[0.65rem] sm:text-sm">{eyebrow}</p>
        </SlideIn>
        <SlideIn immediate delay={220}>
          <h1 className="display mt-3 text-3xl text-foreground sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </SlideIn>
        {subtitle ? (
          <SlideIn immediate delay={380}>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:mt-4 sm:text-base md:text-lg">
              {subtitle}
            </p>
          </SlideIn>
        ) : null}
      </div>
    </section>
  );
}
