"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollAnimateProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
}

export default function ScrollAnimate({ 
  children, 
  direction = "up",
  delay = 0,
  className = "" 
}: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const directionClass = `scroll-animate-${direction}`;
  const visibleClass = isVisible ? "animate" : "";
  const baseClass = `${directionClass} ${visibleClass} ${className || ""}`.trim();

  return (
    <div ref={ref} className={baseClass}>
      {children}
    </div>
  );
}

