import { useEffect } from "react";

interface SmoothScrollOptions {
  duration?: number;
  ease?: "linear" | "easeIn" | "easeOut" | "easeInOut";
  offset?: number;
}

export function useSmoothScroll(options: SmoothScrollOptions = {}) {
  const { duration = 800, ease = "easeInOut", offset = 0 } = options;

  useEffect(() => {
    const getEasingFunction = (type: string) => {
      switch (type) {
        case "linear":
          return (t: number) => t;
        case "easeIn":
          return (t: number) => t * t;
        case "easeOut":
          return (t: number) => t * (2 - t);
        case "easeInOut":
        default:
          return (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
      }
    };

    const easeFunction = getEasingFunction(ease);

    const smoothScrollTo = (targetPosition: number) => {
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = easeFunction(progress);

        window.scrollTo(0, startPosition + distance * easeProgress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#")) return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      e.preventDefault();

      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;
      smoothScrollTo(targetPosition);

      history.pushState(null, "", href);
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, [duration, ease, offset]);
}
