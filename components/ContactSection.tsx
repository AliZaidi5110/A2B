import Link from "next/link";
import { ContactMessageForm } from "@/components/ContactMessageForm";
import { SlideIn } from "@/components/SlideIn";
import { SocialLinks } from "@/components/SocialLinks";
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12.04 2.1A9.9 9.9 0 002.2 11.9a9.8 9.8 0 001.3 4.9L2.1 22l5.3-1.4a9.9 9.9 0 004.6 1.2h0a9.9 9.9 0 009.9-9.9 9.9 9.9 0 00-9.86-9.8zm5.8 14.1c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.82-.11a8.3 8.3 0 01-2.57-1.2 9.7 9.7 0 01-3.5-3.6c-.5-.75-.95-1.7-.95-2.57 0-.85.46-1.6 1.25-1.85.22-.07.44-.04.6.03.16.07.4.36.5.66.1.3.34 1.05.37 1.13.04.08.02.2-.06.3l-.34.44c-.1.1-.2.22-.08.43.12.21.53.9 1.15 1.46a6.2 6.2 0 002.05 1.2c.2.07.32.06.43-.08l.5-.6c.1-.13.25-.17.41-.1.16.07 1.03.49 1.2.58.18.09.3.13.34.2.05.08.05.45-.2 1.13z" />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M19.5 4.2H4.5A2.3 2.3 0 002.2 6.5v8.1a2.3 2.3 0 002.3 2.3h2.1V20l3.6-3.1h9.3a2.3 2.3 0 002.3-2.3V6.5a2.3 2.3 0 00-2.3-2.3zm-2.4 8.2H15v1.4h2.1v-1.4zm-3.5 0h-2.1v1.4h2.1v-1.4zm-3.5 0H8v1.4h2.1v-1.4zm7.7-3.5H8v1.4h9.8V9z" />
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
      <div className="container-site relative grid gap-8 section-pad lg:grid-cols-2 lg:gap-16">
        <SlideIn>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow">
            {dict.contact.openingHours}
          </p>
          <h2 className="display mt-2 text-5xl text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
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
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 text-foreground transition hover:text-yellow"
              >
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-yellow/40 bg-yellow/10 text-yellow transition group-hover:bg-yellow group-hover:text-ink">
                  <WhatsAppIcon />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {dict.common.whatsapp}
                  </span>
                  <span className="mt-1 block font-display text-2xl tracking-wide">
                    {siteConfig.whatsappDisplay}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {dict.common.whatsappHint}
                  </span>
                </span>
              </a>
            </li>
            <li id="wechat">
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
              <a
                href={siteConfig.lineHref}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 text-foreground transition hover:text-yellow"
              >
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-yellow/40 bg-yellow/10 text-yellow transition group-hover:bg-yellow group-hover:text-ink">
                  <LineIcon />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {dict.common.line}
                  </span>
                  <span className="mt-1 block font-display text-2xl tracking-wide">
                    {siteConfig.lineDisplay}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{dict.common.lineHint}</span>
                </span>
              </a>
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
            <SocialLinks className="mt-4" />
          </div>

          <Link
            href={localizedPath(locale, "/fleet")}
            className="btn btn-ghost mt-10 border-2 border-yellow text-yellow hover:bg-yellow hover:text-ink"
          >
            {dict.contact.getTaxiOnline}
          </Link>
        </SlideIn>

        <SlideIn delay={200}>
          <div className="contact-form-panel relative h-full border border-line bg-surface/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10 lg:p-12">
            <div className="absolute left-0 top-0 h-1 w-full bg-yellow" />
            <div className="text-center">
              <h3 className="display text-3xl text-foreground sm:text-4xl md:text-5xl">
                {dict.contact.formTitle}
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm text-muted">{dict.contact.formIntro}</p>
            </div>
            <div className="mt-8 sm:mt-10">
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
