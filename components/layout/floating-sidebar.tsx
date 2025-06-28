"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code,
  FolderOpen,
  Briefcase,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export function FloatingSidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Track scroll position to change background based on current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((section) => section.element);

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Desktop Sidebar - Large screens only */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed left-0 top-0 z-[100] hidden lg:flex h-screen flex-col items-start justify-center pointer-events-none pl-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Expandable Container */}
        <motion.div
          initial={{ width: 56 }}
          animate={{
            width: isHovered ? 200 : 56,
          }}
          transition={{
            duration: 0.4,
            type: "tween",
            stiffness: 300,
            damping: 25,
          }}
          className="relative bg-black/30 backdrop-blur-xl rounded-xl overflow-hidden pointer-events-auto shadow-2xl"
        >
          {/* Background Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 0.1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl"
          />

          {/* Menu Items */}
          <div className="relative flex flex-col py-3 px-1">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative group"
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative w-full h-10 rounded-lg transition-all duration-300 border-0 px-3 ${
                    activeSection === item.id
                      ? "bg-white/20 text-cyan-400 shadow-lg shadow-cyan-400/20"
                      : "bg-transparent hover:bg-white/10 text-gray-400 hover:text-white"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 w-full transition-all duration-300 ${
                      isHovered ? "justify-start" : "justify-center"
                    }`}
                  >
                    {/* Icon */}
                    <motion.div
                      animate={{
                        scale: activeSection === item.id ? 1.1 : 1,
                        rotate:
                          isHovered && activeSection === item.id
                            ? [0, -5, 5, 0]
                            : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        type: "tween",
                        stiffness: 400,
                      }}
                      className="flex-shrink-0"
                    >
                      <item.icon className="h-4 w-4" />
                    </motion.div>

                    {/* Label */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.span
                          initial={{ opacity: 0, x: -20, width: 0 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            width: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            x: -20,
                            width: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: 0.1,
                            ease: "easeOut",
                          }}
                          className="text-sm font-medium whitespace-nowrap overflow-hidden"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: isHovered ? 1 : 0,
                      opacity: isHovered ? 0.1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${
                      activeSection === item.id
                        ? "from-cyan-400/20 to-blue-500/20"
                        : "from-white/10 to-white/5"
                    }`}
                  />
                </Button>

                {/* Ripple Effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale:
                      isHovered && activeSection === item.id ? [0, 1.5, 0] : 0,
                    opacity:
                      isHovered && activeSection === item.id ? [0, 0.3, 0] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat:
                      isHovered && activeSection === item.id
                        ? Number.POSITIVE_INFINITY
                        : 0,
                    repeatDelay: 0.5,
                  }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Tablet/Medium Screen Menu Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-6 left-6 z-[101] lg:hidden"
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-black/30 backdrop-blur-xl hover:bg-black/50 text-white border border-gray-800 hover:border-gray-600 rounded-xl p-3 shadow-2xl"
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </motion.div>
        </Button>
      </motion.div>

      {/* Tablet/Medium Screen Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.nav
              ref={sidebarRef}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{
                duration: 0.4,
                type: "tween",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed left-0 top-0 h-full w-80 bg-black/80 backdrop-blur-xl border-r border-gray-800 z-[100] lg:hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Navigation
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white hover:bg-white/10 rounded-lg p-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col p-4 space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full h-12 rounded-xl transition-all duration-300 justify-center px-4 ${
                        activeSection === item.id
                          ? "bg-white/20 text-cyan-400 shadow-lg shadow-cyan-400/20"
                          : "bg-transparent hover:bg-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-4 w-full justify-center">
                        <motion.div
                          animate={{
                            scale: activeSection === item.id ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <item.icon className="h-5 w-5" />
                        </motion.div>
                        <span className="text-base font-medium">
                          {item.label}
                        </span>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
                <p className="text-sm text-gray-500 text-center">
                  Alex Johnson Portfolio
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation Bar - Small screens only */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-[100] md:hidden"
      >
        <div className="bg-black/40 backdrop-blur-xl shadow-2xl">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10" />

          {/* Navigation Items */}
          <div className="relative flex items-center justify-around px-4 py-3 safe-area-inset-bottom">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                onClick={() => scrollToSection(item.id)}
                className="relative flex items-center justify-center p-3 rounded-xl transition-all duration-300 group"
              >
                {/* Active Background */}
                {activeSection === item.id && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      type: "tween",
                      stiffness: 300,
                    }}
                    className="absolute inset-0 bg-white/20 rounded-xl shadow-lg shadow-cyan-400/20"
                  />
                )}

                {/* Icon */}
                <motion.div
                  animate={{
                    scale: activeSection === item.id ? 1.2 : 1,
                    y: activeSection === item.id ? -2 : 0,
                  }}
                  transition={{ duration: 0.3, type: "tween", stiffness: 400 }}
                  className="relative z-10"
                >
                  <item.icon
                    className={`h-6 w-6 transition-colors duration-300 ${
                      activeSection === item.id
                        ? "text-cyan-400"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  />
                </motion.div>

                {/* Ripple Effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: activeSection === item.id ? [0, 2.5, 0] : 0,
                    opacity: activeSection === item.id ? [0, 0.15, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat:
                      activeSection === item.id ? Number.POSITIVE_INFINITY : 0,
                    repeatDelay: 1,
                  }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/30 to-blue-500/30 pointer-events-none"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
