"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ChevronUp } from "lucide-react";

export function FloatingBackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(Math.min(scrollPercent, 100));

      // Show button when user scrolls down 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate circle circumference and stroke dasharray
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Background with gradient */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

            {/* Progress Circle Container */}
            <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full p-1 shadow-2xl border border-cyan-400/30 backdrop-blur-sm transition-all duration-300 group-hover:shadow-cyan-500/25 w-12 h-12 md:w-14 md:h-14">
              {/* SVG Progress Circle */}
              <svg
                className="w-10 h-10 md:w-12 md:h-12 transform -rotate-90"
                viewBox="0 0 48 48"
              >
                {/* Background Circle */}
                <circle
                  cx="24"
                  cy="24"
                  r={radius}
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Progress Circle */}
                <motion.circle
                  cx="24"
                  cy="24"
                  r={radius}
                  stroke="rgba(255, 255, 255, 0.8)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </svg>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -1, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </motion.div>
              </div>
            </div>

            {/* Pulse ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          >
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg border border-gray-700 whitespace-nowrap">
              Back to Top
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
            </div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
