"use client";

import { FormEvent, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Status = "idle" | "loading" | "success" | "error";

export function ContactMessageForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
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
      setFeedback(dict.booking.success);
      form.reset();
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : dict.booking.error);
    }
  }

  return (
    <form onSubmit={onSubmit} className="contact-message-form mx-auto w-full max-w-md space-y-5">
      <label className="block">
        <span className="sr-only">{dict.contact.yourName}</span>
        <input
          required
          name="name"
          placeholder={dict.contact.yourName}
          className="contact-input"
        />
      </label>
      <label className="block">
        <span className="sr-only">{dict.contact.yourEmail}</span>
        <input
          required
          type="email"
          name="email"
          placeholder={dict.contact.yourEmail}
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          className="contact-input"
        />
      </label>
      <label className="block">
        <span className="sr-only">{dict.contact.yourMessage}</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder={dict.contact.yourMessage}
          className="contact-input resize-y"
        />
      </label>

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? dict.booking.sending : dict.contact.send}
      </button>

      {feedback ? (
        <p
          className={`text-center text-sm ${status === "success" ? "text-yellow" : "text-red-400"}`}
          role="status"
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
