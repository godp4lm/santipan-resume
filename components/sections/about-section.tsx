"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Passionate Developer</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  With over 5 years of experience in full-stack development, I specialize in creating scalable web
                  applications using modern technologies. My journey began with a curiosity for problem-solving and has
                  evolved into a passion for crafting exceptional user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I thrive in collaborative environments and enjoy mentoring junior developers. My approach combines
                  technical expertise with creative problem-solving to deliver solutions that not only meet requirements
                  but exceed expectations.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solver", "Team Player", "Continuous Learner", "Innovation Driven"].map((trait, index) => (
                    <motion.span
                      key={trait}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {[
              { label: "Years of Experience", value: "5+", color: "from-cyan-400 to-blue-500" },
              { label: "Projects Completed", value: "50+", color: "from-green-400 to-emerald-500" },
              { label: "Technologies Mastered", value: "20+", color: "from-purple-400 to-pink-500" },
              { label: "Client Satisfaction", value: "100%", color: "from-orange-400 to-red-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-900/30 rounded-xl border border-gray-800"
              >
                <span className="text-gray-300 font-medium">{stat.label}</span>
                <span className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
