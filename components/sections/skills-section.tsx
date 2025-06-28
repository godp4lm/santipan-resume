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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.05,
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
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.15 },
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

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
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

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                {category.technologies.map((tech, techIndex) => (
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
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg border border-white/20 p-3 shadow transition-all duration-200 group-hover:border-white/40 group-hover:bg-white/15">
                      <div className="flex items-center gap-2">
                        <div className="text-xl group-hover:scale-110 transition-transform duration-200">
                          {tech.logo}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-sm mb-1">
                            {tech.name}
                          </h4>
                          <Badge
                            variant="secondary"
                            className="text-[10px] bg-white/20 text-white border-white/30 backdrop-blur-sm px-2 py-0.5"
                          >
                            {tech.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

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
    </section>
  );
}
