"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/experience.data";
import { useTheme } from "@/components/theme-provider";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { colors, isMounted } = useTheme();

  // Use default colors until mounted to prevent hydration mismatch
  const primaryGradient = isMounted
    ? colors.primary
    : "from-cyan-400 to-blue-500";

  return (
    <section id="experience" className="py-16 px-6 bg-gray-900/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${primaryGradient} bg-clip-text text-transparent`}
          >
            Experience
          </h2>
          <div
            className={`w-20 h-1 bg-gradient-to-r ${primaryGradient} mx-auto rounded-full`}
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b ${primaryGradient} hidden md:block`}
          />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 top-6 w-4 h-4 bg-gradient-to-r ${primaryGradient} rounded-full border-4 border-black hidden md:block`}
                />

                <div className="md:ml-20">
                  <div className="relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${experience.gradient} opacity-3`}
                    />

                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <h3
                            className={`text-lg font-bold bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent`}
                          >
                            {experience.title}
                          </h3>
                          <p className="text-base text-white font-medium">
                            {experience.company}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end text-gray-400 text-xs mt-2 md:mt-0">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {experience.period}
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin className="mr-1 h-3 w-3" />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-3 leading-relaxed text-sm">
                        {experience.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-white font-medium text-sm">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map(
                            (achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                initial={{ opacity: 0, x: -15 }}
                                animate={
                                  isInView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -15 }
                                }
                                transition={{
                                  duration: 0.4,
                                  delay:
                                    index * 0.2 + achievementIndex * 0.1 + 0.3,
                                }}
                                className="flex items-start text-gray-300 text-sm"
                              >
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.gradient} mt-2 mr-2 flex-shrink-0`}
                                />
                                {achievement}
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
