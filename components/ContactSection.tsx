import Link from "next/link";
import { ContactMessageForm } from "@/components/ContactMessageForm";
import { SlideIn } from "@/components/SlideIn";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1.4 1.4 0 011.5-.3c1.6.5 3.4.8 5.2.8a1.4 1.4 0 011.4 1.4V20a1.4 1.4 0 01-1.4 1.4C10.6 21.4 2.6 13.4 2.6 3.4A1.4 1.4 0 014 2h3.1A1.4 1.4 0 018.5 3.4c0 1.8.3 3.6.8 5.2a1.4 1.4 0 01-.3 1.5L6.6 10.8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v7A2.5 2.5 0 0117.5 16H10l-4 3.5V16H6.5A2.5 2.5 0 014 13.5v-7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ContactSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const address = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.postalCode}`;

  return (
    <section className="contact-taxipark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.08),transparent_50%)]" />
      <div className="container-site relative grid gap-12 section-pad lg:grid-cols-2 lg:gap-16">
        <SlideIn>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow">
            {dict.contact.openingHours}
          </p>
          <h2 className="display mt-2 text-7xl text-foreground sm:text-8xl md:text-9xl">
            <span className="text-yellow">{dict.contact.hoursValue}</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {dict.contact.hoursBody}
          </p>

          <ul className="mt-10 space-y-5">
            <li>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="group flex items-start gap-4 text-foreground transition hover:text-yellow"
              >
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-yellow/40 bg-yellow/10 text-yellow transition group-hover:bg-yellow group-hover:text-ink">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {dict.contact.callUs}
                  </span>
                  <span className="mt-1 block font-display text-2xl tracking-wide">
                    {siteConfig.phoneDisplay}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-4 text-foreground">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-yellow/40 bg-yellow/10 text-yellow">
                  <ChatIcon />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {dict.common.wechat}
                  </span>
                  <span className="mt-1 block font-display text-2xl tracking-wide">
                    {siteConfig.wechat}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {dict.common.wechatId}: {siteConfig.wechat}
                  </span>
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-4 text-foreground">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-yellow/40 bg-yellow/10 text-yellow">
                  <PinIcon />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {dict.contact.office}
                  </span>
                  <span className="mt-1 block max-w-xs text-base leading-relaxed">
                    {address}
                    <br />
                    {dict.about.country}
                  </span>
                </span>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <p className="text-sm font-bold text-foreground">{dict.contact.social}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={siteConfig.social.tripadvisor}
                target="_blank"
                rel="noreferrer"
                className="social-orb"
                aria-label="Tripadvisor"
              >
                T
              </a>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="social-orb"
                aria-label="Phone"
              >
                ☎
              </a>
              <span className="social-orb" title={`WeChat ${siteConfig.wechat}`}>
                微
              </span>
            </div>
          </div>

          <Link
            href={localizedPath(locale, "/fleet")}
            className="btn btn-ghost mt-10 border-2 border-yellow text-yellow hover:bg-yellow hover:text-ink"
          >
            {dict.contact.getTaxiOnline}
          </Link>
        </SlideIn>

        <SlideIn delay={200}>
          <div className="contact-form-panel relative h-full border border-line bg-surface/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10 lg:p-12">
            <div className="absolute left-0 top-0 h-1 w-full bg-yellow" />
            <div className="text-center">
              <h3 className="display text-4xl text-foreground sm:text-5xl">
                {dict.contact.formTitle}
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm text-muted">{dict.contact.formIntro}</p>
            </div>
            <div className="mt-10">
              <ContactMessageForm dict={dict} />
            </div>
          </div>
        </SlideIn>
      </div>

      {/* Map band */}
      <div className="border-t border-line bg-surface">
        <div className="container-site py-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-yellow">
            {dict.contact.mapTitle}
          </p>
        </div>
        <div className="relative h-[340px] w-full overflow-hidden border-t border-line sm:h-[420px]">
          <iframe
            title={dict.contact.mapTitle}
            src="https://maps.google.com/maps?q=71-75%20Shelton%20Street%20Covent%20Garden%20London%20WC2H%209JQ&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="h-full w-full border-0 grayscale-[30%] contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
