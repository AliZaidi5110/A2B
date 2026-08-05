"use client";

import { WeChatOpenButton } from "@/components/WeChatOpenButton";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

export function ContactQuickBar({ dict }: { dict: Dictionary }) {
  return (
    <div className="contact-quick-bar border-b border-yellow/30 bg-surface-2">
      <div className="container-site flex flex-col gap-2.5 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-yellow sm:text-xs">
            {dict.header.tapMessage}
          </p>
          <p className="mt-0.5 text-[0.65rem] text-muted sm:text-xs">
            {dict.header.messageUs}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
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
