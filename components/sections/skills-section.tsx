"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

const techCategories = [
  {
    title: "Frontend Development",
    gradient: "from-cyan-400 to-blue-500",
    icon: "🎨",
    technologies: [
      { name: "React", level: 95, years: 4, category: "Framework", logo: "⚛️" },
      { name: "Next.js", level: 90, years: 3, category: "Framework", logo: "▲" },
      { name: "TypeScript", level: 88, years: 3, category: "Language", logo: "📘" },
      { name: "JavaScript", level: 92, years: 5, category: "Language", logo: "🟨" },
      { name: "Tailwind CSS", level: 85, years: 2, category: "Styling", logo: "🎨" },
      { name: "Framer Motion", level: 80, years: 2, category: "Animation", logo: "🎭" },
      { name: "Vue.js", level: 75, years: 2, category: "Framework", logo: "💚" },
      { name: "Sass/SCSS", level: 82, years: 3, category: "Styling", logo: "🎨" },
    ],
  },
  {
    title: "Backend Development",
    gradient: "from-green-400 to-emerald-500",
    icon: "⚙️",
    technologies: [
      { name: "Node.js", level: 90, years: 4, category: "Runtime", logo: "🟢" },
      { name: "Express.js", level: 85, years: 3, category: "Framework", logo: "🚀" },
      { name: "Python", level: 80, years: 3, category: "Language", logo: "🐍" },
      { name: "FastAPI", level: 75, years: 2, category: "Framework", logo: "⚡" },
      { name: "PostgreSQL", level: 82, years: 3, category: "Database", logo: "🐘" },
      { name: "MongoDB", level: 78, years: 2, category: "Database", logo: "🍃" },
      { name: "Redis", level: 70, years: 2, category: "Cache", logo: "🔴" },
      { name: "GraphQL", level: 72, years: 2, category: "API", logo: "🔗" },
    ],
  },
  {
    title: "DevOps & Cloud",
    gradient: "from-purple-400 to-pink-500",
    icon: "☁️",
    technologies: [
      { name: "Docker", level: 85, years: 3, category: "Container", logo: "🐳" },
      { name: "AWS", level: 80, years: 3, category: "Cloud", logo: "☁️" },
      { name: "Vercel", level: 88, years: 2, category: "Platform", logo: "▲" },
      { name: "Git", level: 92, years: 5, category: "Version Control", logo: "📝" },
      { name: "GitHub Actions", level: 75, years: 2, category: "CI/CD", logo: "🔄" },
      { name: "Kubernetes", level: 65, years: 1, category: "Orchestration", logo: "⚓" },
      { name: "Linux", level: 78, years: 4, category: "OS", logo: "🐧" },
      { name: "Nginx", level: 70, years: 2, category: "Server", logo: "🌐" },
    ],
  },
  {
    title: "Design & Tools",
    gradient: "from-orange-400 to-red-500",
    icon: "🎯",
    technologies: [
      { name: "Figma", level: 85, years: 3, category: "Design", logo: "🎨" },
      { name: "Adobe XD", level: 75, years: 2, category: "Design", logo: "🎨" },
      { name: "Photoshop", level: 70, years: 3, category: "Design", logo: "🖼️" },
      { name: "Jest", level: 80, years: 3, category: "Testing", logo: "🧪" },
      { name: "Cypress", level: 75, years: 2, category: "Testing", logo: "🌲" },
      { name: "Socket.io", level: 78, years: 2, category: "Real-time", logo: "🔌" },
      { name: "Stripe", level: 82, years: 2, category: "Payment", logo: "💳" },
      { name: "Supabase", level: 80, years: 1, category: "Backend", logo: "⚡" },
    ],
  },
]

const favoriteStack = [
  { name: "Next.js", gradient: "from-gray-400 to-gray-600", logo: "▲" },
  { name: "TypeScript", gradient: "from-blue-400 to-blue-600", logo: "📘" },
  { name: "Tailwind CSS", gradient: "from-cyan-400 to-cyan-600", logo: "🎨" },
  { name: "Framer Motion", gradient: "from-pink-400 to-pink-600", logo: "🎭" },
  { name: "Prisma", gradient: "from-indigo-400 to-indigo-600", logo: "🔷" },
  { name: "Vercel", gradient: "from-black to-gray-800", logo: "▲" },
]

const getSkillLevel = (level: number) => {
  if (level >= 90) return { label: "Expert", color: "from-green-400 to-emerald-500" }
  if (level >= 80) return { label: "Advanced", color: "from-blue-400 to-cyan-500" }
  if (level >= 70) return { label: "Intermediate", color: "from-yellow-400 to-orange-500" }
  return { label: "Beginner", color: "from-gray-400 to-gray-600" }
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [hoveredFavorite, setHoveredFavorite] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
          >
            <span className="text-2xl">💻</span>
            <span className="text-sm font-medium text-gray-300">Professional Expertise</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Tech Stack & Tools
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and tools I use to build exceptional digital experiences with precision and
            innovation
          </p>
        </motion.div>

        {/* Current Favorite Stack - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20 relative"
        >
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden">
            {/* Simplified Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30"
                >
                  <span className="text-xl">⭐</span>
                  <span className="text-sm font-medium text-cyan-400">Featured Stack</span>
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-3">Current Favorite Stack</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  The technologies I'm most excited about right now and use for cutting-edge projects
                </p>
              </div>

              {/* Simplified Favorite Stack Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {favoriteStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -10 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + index * 0.1,
                      type: "tween",
                      stiffness: 120,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      transition: {
                        duration: 0.15,
                        type: "tween",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                    onHoverStart={() => setHoveredFavorite(tech.name)}
                    onHoverEnd={() => setHoveredFavorite(null)}
                    className="group relative cursor-pointer"
                  >
                    {/* Reduced Glow Effect */}
                    <motion.div
                      animate={{
                        opacity: hoveredFavorite === tech.name ? 0.3 : 0.1,
                        scale: hoveredFavorite === tech.name ? 1.05 : 1,
                      }}
                      transition={{
                        duration: 0.15,
                        type: "tween",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-2xl blur-lg`}
                    />

                    {/* Card */}
                    <div className={`relative bg-gradient-to-r ${tech.gradient} p-[1px] rounded-2xl`}>
                      <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-150 group-hover:bg-gray-800/90">
                        {/* Logo */}
                        <motion.div
                          animate={{
                            scale: hoveredFavorite === tech.name ? 1.1 : 1,
                          }}
                          transition={{
                            duration: 0.15,
                            type: "tween",
                            stiffness: 400,
                            damping: 25,
                          }}
                          className="text-3xl mb-3"
                        >
                          {tech.logo}
                        </motion.div>

                        {/* Name */}
                        <h4 className="text-white font-bold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-150">
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stack Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
              >
                {[
                  { icon: "⚡", label: "Performance", desc: "Optimized for speed" },
                  { icon: "🔧", label: "Developer Experience", desc: "Modern tooling" },
                  { icon: "🚀", label: "Scalability", desc: "Enterprise ready" },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="text-2xl mb-2">{benefit.icon}</div>
                    <div className="text-white font-medium text-sm">{benefit.label}</div>
                    <div className="text-gray-400 text-xs">{benefit.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={() => setSelectedCategory(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-black shadow-lg shadow-cyan-500/25"
                : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
            }`}
          >
            All Skills
          </motion.button>
          {techCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.title
                  ? `bg-gradient-to-r ${category.gradient} text-black shadow-lg`
                  : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Simplified Skills Grid */}
        <div className="space-y-16">
          {techCategories
            .filter((category) => !selectedCategory || category.title === selectedCategory)
            .map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.gradient} shadow-lg`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    >
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.technologies.length} technologies •{" "}
                      {Math.round(
                        category.technologies.reduce((acc, tech) => acc + tech.years, 0) / category.technologies.length,
                      )}{" "}
                      years avg experience
                    </p>
                  </div>
                </div>

                {/* Simplified Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.technologies.map((tech, techIndex) => {
                    const skillLevel = getSkillLevel(tech.level)
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + techIndex * 0.05,
                          type: "tween",
                          stiffness: 120,
                        }}
                        whileHover={{
                          y: -8,
                          scale: 1.03,
                          transition: {
                            duration: 0.2,
                            type: "tween",
                            stiffness: 400,
                            damping: 25,
                          },
                        }}
                        onHoverStart={() => setHoveredSkill(tech.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="group relative cursor-pointer"
                      >
                        {/* Simplified Card */}
                        <motion.div
                          className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl overflow-hidden"
                          animate={{
                            borderColor:
                              hoveredSkill === tech.name ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.2)",
                            backgroundColor:
                              hoveredSkill === tech.name ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.05)",
                          }}
                          transition={{
                            duration: 0.2,
                            type: "tween",
                            stiffness: 400,
                            damping: 25,
                          }}
                        >
                          {/* Smooth Background Glow */}
                          <motion.div
                            animate={{
                              opacity: hoveredSkill === tech.name ? 0.12 : 0,
                            }}
                            transition={{
                              duration: 0.2,
                              type: "tween",
                              stiffness: 400,
                              damping: 25,
                            }}
                            className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl`}
                          />

                          <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <motion.div
                                  animate={{
                                    scale: hoveredSkill === tech.name ? 1.15 : 1,
                                    rotate: hoveredSkill === tech.name ? [0, -5, 5, 0] : 0,
                                  }}
                                  transition={{
                                    duration: 0.2,
                                  type: "tween",
                                    stiffness: 400,
                                    damping: 25,
                                  }}
                                  className="text-2xl"
                                >
                                  {tech.logo}
                                </motion.div>
                                <div>
                                  <motion.h4
                                    className="font-bold text-white text-lg"
                                    animate={{
                                      color: hoveredSkill === tech.name ? "#ffffff" : "#ffffff",
                                    }}
                                    transition={{
                                      duration: 0.2,
                                    }}
                                  >
                                    {tech.name}
                                  </motion.h4>
                                  <Badge
                                    variant="secondary"
                                    className="text-xs bg-white/10 text-gray-300 border-white/20"
                                  >
                                    {tech.category}
                                  </Badge>
                                </div>
                              </div>
                              <motion.div
                                className="text-right"
                                animate={{
                                  scale: hoveredSkill === tech.name ? 1.05 : 1,
                                }}
                                transition={{
                                  duration: 0.2,
                                  type: "tween",
                                  stiffness: 400,
                                  damping: 25,
                                }}
                              >
                                <div
                                  className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${skillLevel.color} text-black`}
                                >
                                  {skillLevel.label}
                                </div>
                              </motion.div>
                            </div>

                            {/* Experience */}
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2 text-gray-400">
                                <motion.span
                                  className="w-2 h-2 bg-cyan-400 rounded-full"
                                  animate={{
                                    scale: hoveredSkill === tech.name ? 1.3 : 1,
                                    boxShadow: hoveredSkill === tech.name ? "0 0 8px rgba(34, 211, 238, 0.6)" : "none",
                                  }}
                                  transition={{
                                    duration: 0.2,
                                    type: "tween",
                                    stiffness: 400,
                                    damping: 25,
                                  }}
                                />
                                <span>{tech.years} years experience</span>
                              </div>
                              <motion.div
                                animate={{
                                  scale: hoveredSkill === tech.name ? 1.4 : 1,
                                  opacity: hoveredSkill === tech.name ? 1 : 0.7,
                                  boxShadow: hoveredSkill === tech.name ? "0 0 12px rgba(34, 211, 238, 0.8)" : "none",
                                }}
                                transition={{
                                  duration: 0.2,
                                  type: "tween",
                                  stiffness: 400,
                                  damping: 25,
                                }}
                                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                              />
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            {
              label: "Technologies",
              count: techCategories.reduce((acc, cat) => acc + cat.technologies.length, 0),
              icon: "🛠️",
              gradient: "from-cyan-400 to-blue-500",
            },
            {
              label: "Expert Level",
              count: techCategories.reduce(
                (acc, cat) => acc + cat.technologies.filter((tech) => tech.level >= 90).length,
                0,
              ),
              icon: "🏆",
              gradient: "from-green-400 to-emerald-500",
            },
            {
              label: "Years Combined",
              count: techCategories.reduce(
                (acc, cat) => acc + cat.technologies.reduce((sum, tech) => sum + tech.years, 0),
                0,
              ),
              icon: "📅",
              gradient: "from-purple-400 to-pink-500",
            },
            {
              label: "Categories",
              count: techCategories.length,
              icon: "📂",
              gradient: "from-orange-400 to-red-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl group"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                className="text-3xl mb-3"
              >
                {stat.icon}
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1, type: "tween", stiffness: 200 }}
                className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.count}+
              </motion.div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
