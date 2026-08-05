import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

export function ContactQuickBar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div className="contact-quick-bar border-b border-line bg-surface-2">
      <div className="container-site flex flex-col gap-2 py-2.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-yellow sm:text-xs">
          {dict.header.messageUs}
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill contact-pill--whatsapp"
          >
            {dict.common.whatsapp}
            <span className="contact-pill-value">{siteConfig.whatsappDisplay}</span>
          </a>
          <Link
            href={`${localizedPath(locale, "/contact")}#wechat`}
            className="contact-pill"
          >
            {dict.common.wechat}
            <span className="contact-pill-value">{siteConfig.wechat}</span>
          </Link>
          <a
            href={siteConfig.lineHref}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill"
          >
            {dict.common.line}
            <span className="contact-pill-value">{siteConfig.lineDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
