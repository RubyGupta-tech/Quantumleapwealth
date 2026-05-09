"use client";
import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    // --- 1. Timeline items animation ---
    const timelineItems = document.querySelectorAll(".timeline-item");
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("active");
          } else {
            e.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 }
    );
    timelineItems.forEach((item) => timelineObserver.observe(item));

    // --- 2. General scroll reveal (.reveal elements) ---
    const revealItems = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    revealItems.forEach((item) => revealObserver.observe(item));

    return () => {
      timelineObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return null; // This component renders nothing — it just runs JS
}
