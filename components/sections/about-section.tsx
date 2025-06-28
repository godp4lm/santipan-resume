"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/components/theme-provider";
import { aboutData } from "@/data/about.data";
import {
  Code,
  Users,
  Lightbulb,
  Target,
  Award,
  Clock,
  FolderOpen,
  Heart,
} from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { colors, isMounted } = useTheme();

  // Use default colors until mounted to prevent hydration mismatch
  const primaryGradient = isMounted
    ? colors.primary
    : "from-cyan-400 to-blue-500";
  const accentGradient = isMounted
    ? colors.accent
    : "from-emerald-400 to-teal-500";
  const secondaryGradient = isMounted
    ? colors.secondary
    : "from-purple-400 to-pink-500";

  const traitIcons = [Code, Users, Lightbulb, Target];
  const statIcons = [Clock, FolderOpen, Award, Heart];

  return (
    <section id="about" className="py-16 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/2 via-transparent to-purple-500/2" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/3 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/3 rounded-full blur-2xl" />

      <div className="container mx-auto max-w-6xl relative">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
          >
            <span className="text-lg">👨‍💻</span>
            <span className="text-sm font-medium text-gray-300">My Story</span>
          </motion.div>

          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${primaryGradient} bg-clip-text text-transparent`}
          >
            {aboutData.title}
          </h2>
          <div
            className={`w-20 h-1 bg-gradient-to-r ${primaryGradient} mx-auto rounded-full shadow-lg`}
          />
          <p className="text-gray-300 mt-4 text-base max-w-2xl mx-auto leading-relaxed">
            A passionate full-stack developer with a love for creating
            exceptional digital experiences
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Main About Card */}
            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${primaryGradient} opacity-8 rounded-2xl blur-xl`}
              />
              <div className="relative bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 bg-gradient-to-r ${primaryGradient} rounded-lg shadow-lg`}
                  >
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {aboutData.subtitle}
                  </h3>
                </div>

                <div className="space-y-3">
                  {aboutData.description.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                      }
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="text-gray-300 leading-relaxed text-sm"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>

            {/* Traits Grid */}
            <div className="grid grid-cols-2 gap-3">
              {aboutData.traits.map((trait, index) => {
                const Icon = traitIcons[index];
                return (
                  <motion.div
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="p-3 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-sm rounded-xl border border-white/15 hover:border-white/30 transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-2 bg-gradient-to-r ${secondaryGradient} rounded-lg group-hover:scale-105 transition-transform duration-300`}
                        >
                          <Icon className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-white font-medium text-xs group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                          {trait}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {aboutData.stats.map((stat, index) => {
              const Icon = statIcons[index];
              const gradientMap = {
                "from-cyan-400 to-blue-500": primaryGradient,
                "from-green-400 to-emerald-500": accentGradient,
                "from-purple-400 to-pink-500": secondaryGradient,
                "from-orange-400 to-red-500": "from-orange-400 to-red-500",
              };
              const statGradient =
                gradientMap[stat.color as keyof typeof gradientMap] ||
                primaryGradient;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-visible">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${statGradient} opacity-8 rounded-xl blur-lg group-hover:opacity-15 transition-opacity duration-300`}
                    />
                    <div className="relative p-4 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl rounded-xl border border-white/15 hover:border-white/30 transition-all duration-300 group-hover:scale-[1.01] shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 bg-gradient-to-r ${statGradient} rounded-lg group-hover:scale-105 transition-transform duration-300 shadow-lg`}
                          >
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                              {stat.label}
                            </h4>
                          </div>
                        </div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.8 + index * 0.1,
                          }}
                          className={`text-2xl font-bold bg-gradient-to-r ${statGradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                        >
                          {stat.value}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
