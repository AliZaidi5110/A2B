"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type SlideInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animate immediately on mount (hero / page hero). Default: on scroll into view */
  immediate?: boolean;
  as?: "div" | "section" | "article" | "li" | "p" | "h1" | "h2" | "span";
};

export function SlideIn({
  children,
  className = "",
  delay = 0,
  immediate = false,
  as: Tag = "div",
}: SlideInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (immediate) {
      const id = window.setTimeout(() => setVisible(true), 40);
      return () => window.clearTimeout(id);
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`slide-in ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
