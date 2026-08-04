"use client";

import { FormEvent, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function BookingForm({
  dict,
  compact = false,
}: {
  dict: Dictionary;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: String(data.get("firstName") ?? ""),
      lastName: String(data.get("lastName") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      vehicle: String(data.get("vehicle") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || dict.booking.error);
      }
      setStatus("success");
      setMessage(dict.booking.success);
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : dict.booking.error);
    }
  }

  const prefer = dict.booking.prefer
    .replace("{phone}", siteConfig.phoneDisplay)
    .replace("{whatsapp}", siteConfig.whatsappDisplay)
    .replace("{wechat}", siteConfig.wechat)
    .replace("{line}", siteConfig.lineDisplay);

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-4" : "space-y-5"}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-muted">
            {dict.booking.firstName}
          </span>
          <input
            required
            name="firstName"
            className="w-full border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-yellow"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-muted">
            {dict.booking.lastName}
          </span>
          <input
            required
            name="lastName"
            className="w-full border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-yellow"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-muted">
            {dict.booking.email}
          </span>
          <input
            required
            type="email"
            name="email"
            className="w-full border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-yellow"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-muted">
            {dict.booking.phone}
          </span>
          <input
            name="phone"
            className="w-full border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-yellow"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-muted">
          {dict.booking.vehicle}
        </span>
        <select
          name="vehicle"
          defaultValue=""
          className="w-full border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-yellow"
        >
          <option value="">{dict.booking.selectVehicle}</option>
          {dict.fleet.vehicles.map((v) => (
            <option key={v.id} value={v.name}>
              {v.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-muted">
          {dict.booking.message}
        </span>
        <textarea
          required
          name="message"
          rows={compact ? 3 : 5}
          placeholder={dict.booking.messagePlaceholder}
          className="w-full resize-y border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-yellow"
        />
      </label>

      <button
        type="submit"
        className="btn btn-primary w-full sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? dict.booking.sending : dict.booking.submit}
      </button>

      {message ? (
        <p
          className={`text-sm ${status === "success" ? "text-yellow" : "text-red-400"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}

      <p className="text-xs text-muted">
        {prefer.split(siteConfig.phoneDisplay).map((part, i, arr) =>
          i < arr.length - 1 ? (
            <span key={i}>
              {part}
              <a href={`tel:${siteConfig.phoneTel}`} className="text-yellow">
                {siteConfig.phoneDisplay}
              </a>
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </p>
    </form>
  );
}
