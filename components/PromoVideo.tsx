import { SlideIn } from "@/components/SlideIn";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

export function PromoVideo({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.06),transparent_65%)]" />
      <div className="container-site relative section-pad">
        <div className="mx-auto max-w-4xl text-center">
          <SlideIn>
            <p className="eyebrow justify-center">{dict.video.eyebrow}</p>
            <h2 className="display mt-4 text-5xl text-foreground sm:text-6xl md:text-7xl">
              {dict.video.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {dict.video.body}
            </p>
          </SlideIn>

          <SlideIn delay={180}>
            <div className="video-frame mt-10">
              <div className="video-frame-accent" aria-hidden />
              <video
                className="video-player"
                controls
                playsInline
                preload="metadata"
                poster="/images/hero/slide1.jpg"
              >
                <source src={siteConfig.promoVideo.src} type="video/mp4" />
                {dict.video.fallback}
              </video>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">
              {dict.video.caption}
            </p>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
