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
    <section className="relative isolate min-h-[42vh] overflow-hidden py-28 sm:min-h-[48vh] sm:py-32">
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
      <div className="absolute inset-y-0 left-0 w-1.5 bg-yellow" />
      <div className="container-site relative z-10">
        <SlideIn immediate delay={80}>
          <p className="eyebrow">{eyebrow}</p>
        </SlideIn>
        <SlideIn immediate delay={220}>
          <h1 className="display mt-4 text-5xl text-foreground sm:text-6xl md:text-7xl">
            {title}
          </h1>
        </SlideIn>
        {subtitle ? (
          <SlideIn immediate delay={380}>
            <p className="mt-4 max-w-2xl text-base text-foreground/80 sm:text-lg">{subtitle}</p>
          </SlideIn>
        ) : null}
      </div>
    </section>
  );
}
