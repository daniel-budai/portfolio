"use client";

import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll();

  return (
    <div>
      <Header />

      <div id="hero">
        <AnimateOnScroll animation="fadeIn" duration={0.8}>
          <HeroSection />
        </AnimateOnScroll>
      </div>

      <div id="projects">
        <AnimateOnScroll animation="slideUp" duration={0.7} delay={0.1}>
          <ProjectsSection />
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animation="scale" duration={0.6}>
        <TapeSection />
      </AnimateOnScroll>

      <div id="testimonials">
        <AnimateOnScroll animation="slideLeft" duration={0.7}>
          <TestimonialsSection />
        </AnimateOnScroll>
      </div>

      <div id="about">
        <AnimateOnScroll animation="slideRight" duration={0.7}>
          <AboutSection />
        </AnimateOnScroll>
      </div>

      <div id="contact">
        <AnimateOnScroll animation="slideUp" duration={0.7} delay={0.2}>
          <ContactSection />
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animation="fadeIn" duration={0.5} delay={0.1}>
        <Footer />
      </AnimateOnScroll>
    </div>
  );
}
