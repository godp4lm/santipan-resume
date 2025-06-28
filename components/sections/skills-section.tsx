"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { techCategories, favoriteStack } from "@/data/skills.data";
import { useTheme } from "@/components/theme-provider";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { colors, isMounted } = useTheme();

  // Use default colors until mounted to prevent hydration mismatch
  const primaryGradient = isMounted
    ? colors.primary
    : "from-cyan-400 to-blue-500";
  const gradientColors = isMounted
    ? colors.gradient
    : "from-cyan-400 via-blue-500 to-purple-500";

  // Memoize filtered categories to prevent unnecessary re-renders
  const filteredCategories = useMemo(() => {
    return techCategories.filter(
      (category) => !selectedCategory || category.title === selectedCategory
    );
  }, [selectedCategory]);

  // Simplified animation variants for better performance
  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.02, // Reduced from 0.05
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gray-900/20 relative overflow-hidden"
    >
      {/* Simplified Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
            }
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-base"
          >
            <span className="text-base">💻</span>
            <span className="text-xs font-medium text-gray-300">
              Professional Expertise
            </span>
          </motion.div>

          <h2
            className={`text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}
          >
            Tech Stack & Tools
          </h2>
          <div
            className={`w-16 h-1 bg-gradient-to-r ${gradientColors} mx-auto rounded-full shadow-lg`}
          />
          <p className="text-gray-300 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
            Cutting-edge technologies and tools I use to build exceptional
            digital experiences with precision and innovation
          </p>
        </motion.div>

        {/* Favorite Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-10"
        >
          <div className="text-center mb-5">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
              }
              transition={{ duration: 0.4, delay: 0.3 }}
              className={`inline-flex items-center gap-2 mb-2 px-3 py-1 bg-gradient-to-r ${primaryGradient} rounded-full shadow-lg text-sm`}
            >
              <span className="text-base">⭐</span>
              <span className="text-xs font-semibold text-black">
                Featured Stack
              </span>
            </motion.div>
            <h3 className="text-lg font-bold text-white mb-1">
              Current Favorite Stack
            </h3>
            <p className="text-gray-400 max-w-md mx-auto text-xs">
              The technologies I'm most excited about right now
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-3 md:grid-cols-6 gap-3"
          >
            {favoriteStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                whileHover={{
                  y: -2,
                  scale: 1.01,
                  transition: { duration: 0.1 },
                }}
                className="group relative"
              >
                <div
                  className={`relative bg-gradient-to-r ${tech.gradient} p-[1px] rounded-lg shadow-md`}
                >
                  <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg p-3 h-full flex flex-col items-center justify-center text-center transition-all duration-200 group-hover:bg-gray-800/95">
                    <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-200">
                      {tech.logo}
                    </div>
                    <h4 className="text-white font-bold text-xs">
                      {tech.name}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <motion.button
            onClick={() => setSelectedCategory(null)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-xs ${
              selectedCategory === null
                ? `bg-gradient-to-r ${primaryGradient} text-black shadow`
                : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
            }`}
          >
            All Skills
          </motion.button>
          {techCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-1 text-xs ${
                selectedCategory === category.title
                  ? `bg-gradient-to-r ${category.gradient} text-black shadow`
                  : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
              }`}
            >
              <span className="text-base">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid - Optimized */}
        <div className="space-y-6">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.3, delay: 0.4 + categoryIndex * 0.1 }}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-xl bg-gradient-to-r ${category.gradient} shadow`}
                >
                  <span className="text-xl">{category.icon}</span>
                </div>
                <div>
                  <h3
                    className={`text-lg font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                  >
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    {category.technologies.length} technologies
                  </p>
                </div>
              </div>

              {/* Skills Grid - Using CSS Grid with reduced animations */}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="group relative transform transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02]"
                    style={{
                      animationDelay: `${
                        categoryIndex * 0.1 + techIndex * 0.02
                      }s`,
                      animation: isInView
                        ? "fadeInUp 0.3s ease-out forwards"
                        : "none",
                      opacity: isInView ? 1 : 0,
                      transform: isInView
                        ? "translateY(0)"
                        : "translateY(10px)",
                    }}
                  >
                    <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-xl border border-gray-700/50 p-4 shadow-lg transition-all duration-300 group-hover:border-gray-600/70 group-hover:bg-gradient-to-br group-hover:from-gray-800/90 group-hover:via-gray-700/70 group-hover:to-gray-800/90 group-hover:shadow-xl">
                      {/* Subtle gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                      />

                      <div className="flex items-center gap-3 relative z-10">
                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-lg">
                          {tech.logo}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white text-sm mb-2 group-hover:text-gray-100 transition-colors duration-200 truncate">
                            {tech.name}
                          </h4>
                          <Badge
                            variant="secondary"
                            className={`text-[10px] font-medium px-2.5 py-1 rounded-full border-0 shadow-sm transition-all duration-200 group-hover:scale-105 ${
                              tech.category === "Language"
                                ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                                : tech.category === "Framework"
                                ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                                : tech.category === "Database"
                                ? "bg-green-500/20 text-green-300 border-green-500/30"
                                : tech.category === "Styling"
                                ? "bg-pink-500/20 text-pink-300 border-pink-500/30"
                                : tech.category === "UI Library"
                                ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                                : tech.category === "Animation"
                                ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                                : tech.category === "API"
                                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                                : tech.category === "Runtime"
                                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                                : tech.category === "ORM"
                                ? "bg-teal-500/20 text-teal-300 border-teal-500/30"
                                : tech.category === "Real-time"
                                ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                                : tech.category === "Backend"
                                ? "bg-red-500/20 text-red-300 border-red-500/30"
                                : tech.category === "Services"
                                ? "bg-violet-500/20 text-violet-300 border-violet-500/30"
                                : tech.category === "Payment"
                                ? "bg-rose-500/20 text-rose-300 border-rose-500/30"
                                : tech.category === "Platform"
                                ? "bg-sky-500/20 text-sky-300 border-sky-500/30"
                                : tech.category === "Cache"
                                ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                                : tech.category === "Container"
                                ? "bg-lime-500/20 text-lime-300 border-lime-500/30"
                                : tech.category === "Tunneling"
                                ? "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30"
                                : tech.category === "Design"
                                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                                : tech.category === "Management"
                                ? "bg-slate-500/20 text-slate-300 border-slate-500/30"
                                : tech.category === "Version Control"
                                ? "bg-gray-500/20 text-gray-300 border-gray-500/30"
                                : "bg-gray-600/20 text-gray-300 border-gray-600/30"
                            }`}
                          >
                            {tech.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Hover effect glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 blur-sm`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            {
              label: "Technologies",
              count: techCategories.reduce(
                (acc, cat) => acc + cat.technologies.length,
                0
              ),
              icon: "🛠️",
              gradient: primaryGradient,
            },
            {
              label: "Frontend",
              count: techCategories[0].technologies.length,
              icon: "🧑‍🎨",
              gradient: "from-cyan-400 to-blue-500",
            },
            {
              label: "Backend",
              count: techCategories[1].technologies.length,
              icon: "🛠️",
              gradient: "from-green-400 to-emerald-500",
            },
            {
              label: "Categories",
              count: techCategories.length,
              icon: "📂",
              gradient: "from-purple-400 to-pink-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="text-center p-3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg border border-white/20 shadow group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {stat.icon}
              </div>
              <div
                className={`text-xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}
              >
                {stat.count}+
              </div>
              <div className="text-gray-400 text-xs font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CSS Animation for better performance */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
