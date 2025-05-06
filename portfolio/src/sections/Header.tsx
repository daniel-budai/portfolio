"use client";

import { useActiveSection } from "@/hooks/useActiveSection";

export const Header = () => {
  const activeSection = useActiveSection();

  const getNavItemClass = (section: string) => {
    return `nav-item ${activeSection === section ? "nav-item-active" : ""}`;
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/5 backdrop-blur">
        <a href="#hero" className={getNavItemClass("hero")}>
          Home
        </a>
        <a href="#projects" className={getNavItemClass("projects")}>
          Projects
        </a>
        <a href="#testimonials" className={getNavItemClass("testimonials")}>
          Testimonials
        </a>
        <a href="#about" className={getNavItemClass("about")}>
          About
        </a>
        <a href="#contact" className={getNavItemClass("contact")}>
          Contact
        </a>
      </nav>
    </div>
  );
};
