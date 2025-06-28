"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FloatingSidebar } from "@/components/layout/floating-sidebar";
import { FloatingBackToTop } from "@/components/layout/floating-back-to-top";
import { ColorPicker } from "@/components/ui/color-picker";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { useTheme } from "@/components/theme-provider";
import { getBackgroundTheme } from "@/lib/utils";

export default function Home() {
  const { colors, isMounted } = useTheme();

  useEffect(() => {
    // Enhanced smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // JavaScript fallback for smooth scrolling
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }
    };

    // Add smooth scroll to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      // Cleanup event listeners
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  // Use default background until mounted to prevent hydration mismatch
  const backgroundClass = isMounted
    ? getBackgroundTheme(colors.background)
    : "bg-black";

  // Determine text color based on background
  const isLightBackground =
    isMounted &&
    (colors.background === "white" ||
      colors.background === "light-gray" ||
      colors.background === "warm-cream" ||
      colors.background === "cool-blue" ||
      colors.background === "mint-fresh" ||
      colors.background === "lavender" ||
      colors.background === "rose-gold" ||
      colors.background === "sky-blue" ||
      colors.background === "sunset" ||
      colors.background === "ocean" ||
      colors.background === "forest" ||
      colors.background === "lavender-dream" ||
      colors.background === "golden-hour" ||
      colors.background === "cotton-candy" ||
      colors.background === "mint-chocolate" ||
      colors.background === "aurora");

  const textColorClass = isLightBackground ? "text-gray-900" : "text-white";

  return (
    <div
      className={`min-h-screen overflow-x-hidden relative ${backgroundClass} ${textColorClass}`}
    >
      {/* Main Content - Full Width */}
      <main className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </motion.div>
      </main>

      {/* Footer - Full Width */}
      <Footer />

      {/* Floating Sidebar - Overlay on top */}
      <FloatingSidebar />

      {/* Floating Back to Top Button */}
      <FloatingBackToTop />

      {/* Color Picker */}
      <ColorPicker />
    </div>
  );
}
