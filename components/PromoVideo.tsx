"use client";

import Image from "next/image";
import { useState } from "react";
import { SlideIn } from "@/components/SlideIn";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10" fill="currentColor" aria-hidden>
      <path d="M8.5 6.8v10.4L18 12 8.5 6.8z" />
    </svg>
  );
}

export function PromoVideo({ dict }: { dict: Dictionary }) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative w-full max-w-full overflow-x-clip border-y border-line bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.06),transparent_65%)]" />
      <div className="container-site relative section-pad">
        <div className="mx-auto w-full max-w-4xl text-center">
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
            <div className="video-frame mt-6 w-full sm:mt-10">
              <div className="video-frame-accent" aria-hidden />
              <div className="video-embed">
                {playing ? (
                  <iframe
                    src={`${siteConfig.promoVideo.embedUrl}?autoplay=1`}
                    title={dict.video.caption}
                    className="video-embed-frame"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <button
                    type="button"
                    className="video-thumb-btn"
                    onClick={() => setPlaying(true)}
                    aria-label={dict.video.playLabel}
                  >
                    <Image
                      src={siteConfig.promoVideo.thumbnail}
                      alt={dict.video.caption}
                      fill
                      priority={false}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                      className="video-thumb-image"
                    />
                    <span className="video-thumb-shade" aria-hidden />
                    <span className="video-play-badge">
                      <PlayIcon />
                    </span>
                  </button>
                )}
              </div>
            </div>
            <p className="mt-4 px-2 text-[0.65rem] uppercase tracking-[0.14em] text-muted sm:text-xs sm:tracking-[0.16em]">
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
