"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led team of 5 developers on major product redesign",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2020 - 2022",
    description:
      "Developed MVP and scaled platform from 0 to 50K users. Built responsive web applications and RESTful APIs.",
    achievements: [
      "Built core platform features from scratch",
      "Integrated payment processing and user authentication",
      "Optimized database queries improving performance by 50%",
    ],
    gradient: "from-green-400 to-emerald-500",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "Remote",
    period: "2019 - 2020",
    description:
      "Created responsive websites and web applications for various clients. Collaborated with design teams to implement pixel-perfect UIs.",
    achievements: [
      "Delivered 20+ client projects on time and budget",
      "Improved website performance scores by average 35%",
      "Established component library used across projects",
    ],
    gradient: "from-purple-400 to-pink-500",
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-black hidden md:block" />

                <div className="md:ml-20">
                  <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8">
                    <div className={`absolute inset-0 bg-gradient-to-r ${experience.gradient} opacity-5`} />

                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3
                            className={`text-xl font-bold bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent`}
                          >
                            {experience.title}
                          </h3>
                          <p className="text-lg text-white font-medium">{experience.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end text-gray-400 text-sm mt-2 md:mt-0">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {experience.period}
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin className="mr-1 h-4 w-4" />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

                      <div className="space-y-2">
                        <h4 className="text-white font-medium">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 + 0.3 }}
                              className="flex items-start text-gray-300"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.gradient} mt-2 mr-3 flex-shrink-0`}
                              />
                              {achievement}
                            </motion.li>
                          ))}
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
  )
}
