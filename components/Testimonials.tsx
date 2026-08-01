import { SlideIn } from "@/components/SlideIn";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <section className="section-pad">
      <div className="container-site">
        <SlideIn className="max-w-2xl">
          <p className="eyebrow">{dict.testimonials.eyebrow}</p>
          <h2 className="display mt-4 text-4xl text-foreground sm:text-5xl">
            {dict.testimonials.title}
          </h2>
        </SlideIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {dict.testimonials.items.map((t, index) => (
            <SlideIn key={t.name} delay={index * 120}>
              <blockquote className="surface-card relative h-full p-8">
                <span className="display absolute right-6 top-4 text-6xl text-yellow/20">“</span>
                <p className="relative text-base leading-relaxed text-foreground/90">{t.quote}</p>
                <footer className="mt-6 border-t border-line pt-4">
                  <cite className="not-italic">
                    <span className="block font-bold text-foreground">{t.name}</span>
                    <span className="text-sm text-muted">{t.role}</span>
                  </cite>
                </footer>
              </blockquote>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
