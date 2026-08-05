"use client";

import { WeChatOpenButton } from "@/components/WeChatOpenButton";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

export function ContactQuickBar({ dict }: { dict: Dictionary }) {
  return (
    <div className="contact-quick-bar border-b border-yellow/30 bg-surface-2">
      <div className="container-site py-2.5 sm:py-3">
        <p className="text-center text-[0.62rem] font-bold uppercase leading-snug tracking-[0.12em] text-yellow sm:text-left sm:text-xs sm:tracking-[0.16em]">
          {dict.header.tapMessage}
        </p>
        <p className="mt-0.5 hidden text-xs text-muted sm:block">
          {dict.header.messageUs}
        </p>
        <div className="contact-pill-row mt-2">
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill contact-pill--whatsapp"
          >
            {dict.common.whatsapp}
            <span className="contact-pill-value">{dict.header.dmNow}</span>
          </a>
          <WeChatOpenButton
            className="contact-pill text-left"
            copyLabel={dict.header.wechatCopy}
            openAppLabel={dict.header.wechatOpenApp}
            hint={dict.header.wechatHint}
            closeLabel={dict.common.close}
          >
            {dict.common.wechat}
            <span className="contact-pill-value">{siteConfig.wechat}</span>
          </WeChatOpenButton>
          <a
            href={siteConfig.lineHref}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill"
          >
            {dict.common.line}
            <span className="contact-pill-value">{dict.header.dmNow}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
