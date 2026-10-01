"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const observerOptions = { threshold: 0.14, rootMargin: "0px 0px -8%" };

export default function MotionRoot() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("main > section, footer, [data-reveal], main figure, main ol, main dl"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    [...new Set(targets)].forEach((target) => {
      target.classList.add("reveal");
      if (target.tagName === "FIGURE") target.classList.add("reveal-imageReveal");
      if (target.tagName === "OL" || target.tagName === "DL") target.classList.add("reveal-stagger");
      observer.observe(target);
    });
    document.documentElement.classList.add("motion-ready");

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
