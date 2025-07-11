"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  Instagram,
  Mail,
  Heart,
  ArrowUp,
  ExternalLink,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { colors, isMounted } = useTheme();

  const currentYear = new Date().getFullYear();

  // Use default colors until mounted to prevent hydration mismatch
  const primaryGradient = isMounted
    ? colors.primary
    : "from-cyan-400 to-blue-500";
  const accentGradient = isMounted
    ? colors.accent
    : "from-emerald-400 to-teal-500";

  return (
    <footer className="relative bg-gradient-to-b from-gray-900/50 to-black border-t border-gray-800/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sm:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${primaryGradient} flex items-center justify-center text-white font-bold text-base sm:text-lg`}
              >
                SS
              </div>
              <h3
                className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${primaryGradient} bg-clip-text text-transparent`}
              >
                Santipan Sunee
              </h3>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Full Stack Developer passionate about creating exceptional digital
              experiences. Specialized in modern web technologies and innovative
              solutions.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.a
                href="https://github.com/santipan2003"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 sm:p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white`}
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a
                href="mailto:santipan.game@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 sm:p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white`}
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/santipan_palm/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 sm:p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white`}
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/santipan.sunee19"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 sm:p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white`}
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a
                href="https://line.me/ti/p/ezFWWRCdu1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 sm:p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white`}
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base`}
                  >
                    <span
                      className={`w-1 h-1 bg-gradient-to-r ${primaryGradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Contact
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail
                  className={`h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r ${primaryGradient} bg-clip-text text-transparent`}
                />
                <span className="text-xs sm:text-sm">
                  santipan.game@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${accentGradient} animate-pulse`}
                />
                <span className="text-xs sm:text-sm">
                  Available for projects
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${primaryGradient}`}
                />
                <span className="text-xs sm:text-sm">
                  Phatthalung, Thailand
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800/50 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              <span>
                &copy; {currentYear} Santipan Sunee. All rights reserved.
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with{" "}
                <Heart className="h-3 w-3 text-red-500 animate-pulse" /> in
                Thailand
              </span>
            </div>
          </div>

          {/* Tech Stack Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800/30"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-gray-500">
              <span>Built with:</span>
              {[
                { name: "Next.js", href: "https://nextjs.org" },
                { name: "React", href: "https://reactjs.org" },
                { name: "TypeScript", href: "https://typescriptlang.org" },
                { name: "Tailwind CSS", href: "https://tailwindcss.com" },
                { name: "Framer Motion", href: "https://framer.com/motion" },
              ].map((tech, index) => (
                <motion.a
                  key={tech.name}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-1 hover:text-white transition-colors duration-300`}
                >
                  {tech.name}
                  <ExternalLink className="h-3 w-3" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
