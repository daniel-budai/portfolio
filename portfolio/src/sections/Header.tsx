"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { motion } from "framer-motion";

export const Header = () => {
  const activeSection = useActiveSection();

  useSmoothScroll({
    duration: 800,
    ease: "easeInOut",
    offset: 20,
  });

  const getNavItemClass = (section: string) => {
    return `nav-item ${activeSection === section ? "nav-item-active" : ""}`;
  };

  return (
    <motion.div
      className="flex justify-center items-center fixed top-3 w-full z-10"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
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
    </motion.div>
  );
};
