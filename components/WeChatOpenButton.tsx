"use client";

import { useEffect, useState, type ReactNode } from "react";
import { siteConfig } from "@/lib/site";

type WeChatOpenButtonProps = {
  className?: string;
  children: ReactNode;
  copyLabel: string;
  openAppLabel: string;
  hint: string;
  closeLabel: string;
};

export function WeChatOpenButton({
  className,
  children,
  copyLabel,
  openAppLabel,
  hint,
  closeLabel,
}: WeChatOpenButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function copyId() {
    try {
      await navigator.clipboard.writeText(siteConfig.wechat);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function openWeChatApp() {
    // Deep link opens WeChat app when installed (mainly mobile)
    window.location.href = siteConfig.wechatHref;
  }

  async function onClick() {
    setOpen(true);
    await copyId();
    // Attempt to launch WeChat immediately on devices that support it
    openWeChatApp();
  }

  return (
    <>
      <button type="button" className={className} onClick={onClick}>
        {children}
      </button>

      {open ? (
        <div
          className="wechat-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={siteConfig.wechat}
          onClick={() => setOpen(false)}
        >
          <div className="wechat-modal" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow">
              WeChat
            </p>
            <p className="mt-3 font-display text-3xl tracking-wide text-foreground">
              {siteConfig.wechat}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{hint}</p>
            {copied ? (
              <p className="mt-2 text-sm font-semibold text-yellow">{copyLabel} ✓</p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-2">
              <button type="button" className="btn btn-primary" onClick={copyId}>
                {copyLabel}
              </button>
              <button type="button" className="btn btn-ghost" onClick={openWeChatApp}>
                {openAppLabel}
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => setOpen(false)}>
                {closeLabel}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
