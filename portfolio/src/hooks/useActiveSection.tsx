"use client";

import { useState, useEffect } from "react";

export function useActiveSection(
  sectionIds: string[] = [
    "hero",
    "projects",
    "testimonials",
    "about",
    "contact",
  ],
  defaultActive: string = "hero"
): string {
  const [activeSection, setActiveSection] = useState(defaultActive);

  useEffect(() => {
    // Kör handleScroll en gång när sidan laddas
    setTimeout(() => {
      handleScroll();
    }, 500);

    const handleScroll = () => {
      // Special hantering för slutet av sidan
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = activeSection;

      for (const section of sectionIds) { 
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = section;
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeSection, sectionIds]);

  return activeSection;
}
