import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px", once = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
};

// For staggered children animations
export const useStaggerReveal = (itemCount: number, options: ScrollRevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px 0px -30px 0px" } = options;
  const containerRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-reveal-index"));
            if (!isNaN(index)) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    const items = container.querySelectorAll("[data-reveal-index]");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [itemCount, threshold, rootMargin]);

  return { containerRef, visibleItems };
};
