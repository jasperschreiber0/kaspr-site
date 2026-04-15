"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${stagger ? "reveal-stagger" : "reveal"} ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
