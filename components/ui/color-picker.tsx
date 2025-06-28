"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Palette, X, RotateCcw, Sparkles } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { colors, themes, applyTheme, resetColors, isMounted } = useTheme();

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleThemeChange = (themeId: string) => {
    applyTheme(themeId);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const categories = [
    { id: "all", name: "All Themes", icon: "🎨" },
    { id: "professional", name: "Professional", icon: "💼" },
    { id: "dark", name: "Dark", icon: "🌙" },
  ];

  const filteredThemes =
    selectedCategory === "all"
      ? themes
      : themes.filter((theme) => theme.category === selectedCategory);

  return (
    <>
      {/* Floating Color Picker Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Open theme picker"
        >
          <Palette className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </motion.div>

      {/* Theme Picker Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 p-2 sm:p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl mx-auto max-h-[95vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col max-h-[95vh]">
                {/* Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-white/10 flex-shrink-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Choose Your Theme</span>
                    <span className="sm:hidden">Theme</span>
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClose}
                    className="text-gray-400 hover:text-white p-1"
                    aria-label="Close theme picker"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 p-3 sm:p-4 md:p-6 border-b border-white/10 flex-shrink-0">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                        selectedCategory === category.id
                          ? "bg-white/20 text-white shadow-lg"
                          : "bg-white/5 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredThemes.map((theme) => {
                      const isSelected =
                        isMounted &&
                        colors.primary === theme.colors.primary &&
                        colors.background === theme.colors.background;

                      return (
                        <motion.button
                          key={theme.id}
                          onClick={() => handleThemeChange(theme.id)}
                          className={`relative p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 text-left overflow-hidden ${
                            isSelected
                              ? "border-white shadow-xl bg-white/10"
                              : "border-white/20 hover:border-white/40 bg-white/5"
                          }`}
                          whileHover={{ y: -4 }}
                        >
                          {/* Background Preview */}
                          <div
                            className={`absolute inset-0 ${getBackgroundThemeClasses(
                              theme.colors.background
                            )} opacity-20`}
                          />

                          {/* Content */}
                          <div className="relative z-10">
                            {/* Theme Preview */}
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${theme.colors.primary} shadow-lg`}
                              />
                              <div
                                className={`w-8 h-8 rounded-lg bg-gradient-to-r ${theme.colors.secondary} shadow-lg`}
                              />
                              <div
                                className={`w-6 h-6 rounded-md bg-gradient-to-r ${theme.colors.accent} shadow-lg`}
                              />
                            </div>

                            {/* Theme Info */}
                            <h4
                              className={`text-lg font-bold mb-2 ${
                                isSelected ? "text-white" : "text-white"
                              }`}
                            >
                              {theme.name}
                            </h4>
                            <p
                              className={`text-sm mb-3 ${
                                isSelected ? "text-gray-200" : "text-gray-400"
                              }`}
                            >
                              {theme.description}
                            </p>

                            {/* Category Badge */}
                            <div
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                isSelected
                                  ? "bg-white/20 text-white"
                                  : "bg-white/10 text-gray-300"
                              }`}
                            >
                              {
                                categories.find((c) => c.id === theme.category)
                                  ?.icon
                              }{" "}
                              {theme.category}
                            </div>
                          </div>

                          {/* Selection Indicator */}
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                            >
                              <div className="w-3 h-3 bg-black rounded-full" />
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-center p-3 sm:p-4 md:p-6 border-t border-white/10 flex-shrink-0">
                  <Button
                    onClick={resetColors}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white text-sm sm:text-base backdrop-blur-sm drop-shadow-md"
                  >
                    <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    <span className="hidden sm:inline">Reset to Default</span>
                    <span className="sm:hidden">Reset</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Helper function to get background theme classes
function getBackgroundThemeClasses(theme: string) {
  const themes: { [key: string]: string } = {
    // Light themes
    white: "bg-white",
    "light-gray": "bg-gray-50",
    "warm-cream": "bg-amber-50",
    "cool-blue": "bg-blue-50",
    "mint-fresh": "bg-emerald-50",
    lavender: "bg-purple-50",
    "rose-gold": "bg-rose-50",
    "sky-blue": "bg-sky-50",

    // Dark themes
    dark: "bg-black",
    charcoal: "bg-gray-900",
    midnight: "bg-slate-900",
    navy: "bg-blue-950",
    "forest-night": "bg-green-950",
    burgundy: "bg-red-950",
    "purple-night": "bg-purple-950",
    steel: "bg-zinc-900",

    // Light gradients
    sunset: "bg-gradient-to-br from-orange-100 via-pink-100 to-red-100",
    ocean: "bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100",
    forest: "bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100",
    "lavender-dream":
      "bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100",
    "golden-hour":
      "bg-gradient-to-br from-yellow-100 via-orange-100 to-amber-100",
    "cotton-candy":
      "bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100",
    "mint-chocolate":
      "bg-gradient-to-br from-emerald-100 via-teal-100 to-slate-100",
    aurora: "bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100",

    // Dark gradients
    "deep-space": "bg-gradient-to-br from-gray-950 via-gray-900 to-black",
    "ocean-depth": "bg-gradient-to-br from-blue-950 via-slate-900 to-black",
    "forest-depth": "bg-gradient-to-br from-green-950 via-gray-900 to-black",
    "royal-night": "bg-gradient-to-br from-purple-950 via-slate-900 to-black",
    "sunset-dark": "bg-gradient-to-br from-orange-950 via-red-900 to-black",
    "midnight-blue": "bg-gradient-to-br from-indigo-950 via-blue-900 to-black",
  };

  return themes[theme] || themes.dark;
}
