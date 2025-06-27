"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { FloatingSidebar } from "@/components/floating-sidebar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Main Content - Full Width */}
      <main className="w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </motion.div>
      </main>

      {/* Footer - Full Width */}
      <footer className="w-full border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Alex Johnson. Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </footer>

      {/* Floating Sidebar - Overlay on top */}
      <FloatingSidebar />
    </div>
  )
}
