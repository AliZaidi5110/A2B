import { SlideIn } from "@/components/SlideIn";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

export function PromoVideo({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.06),transparent_65%)]" />
      <div className="container-site relative section-pad">
        <div className="mx-auto max-w-4xl text-center">
          <SlideIn immediate>
            <p className="eyebrow justify-center">{dict.video.eyebrow}</p>
            <h2 className="display mt-4 text-3xl text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              {dict.video.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {dict.video.body}
            </p>
          </SlideIn>

          <SlideIn immediate delay={180}>
            <div className="video-frame mt-6 sm:mt-10">
              <div className="video-frame-accent" aria-hidden />
              <div className="video-embed">
                <iframe
                  src={siteConfig.promoVideo.embedUrl}
                  title={dict.video.caption}
                  className="video-embed-frame"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">
              {dict.video.caption}
            </p>
            <a
              href={siteConfig.promoVideo.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-yellow transition hover:text-foreground"
            >
              {dict.video.openExternal}
            </a>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
