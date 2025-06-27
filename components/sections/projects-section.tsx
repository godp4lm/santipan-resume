"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Grid, List } from "lucide-react"
import { projectsData, type Project } from "@/data/projects.data"
import { useRouter } from "next/navigation"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const router = useRouter()

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showAll, setShowAll] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProjects = projectsData.projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)
  const featuredProjects = projectsData.projects.filter((project) => project.featured)

  const handleProjectClick = (projectId: string) => {
    router.push(`/${projectId}`)
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {projectsData.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">{projectsData.description}</p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {projectsData.categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-black hover:bg-cyan-600"
                    : "border-gray-600 text-gray-300 hover:bg-white/10 bg-transparent"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="border-gray-600 text-gray-300 hover:bg-white/10 bg-transparent"
            >
              {viewMode === "grid" ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${viewMode}-${showAll}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}
          >
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                viewMode={viewMode}
                isInView={isInView}
                onProjectClick={handleProjectClick}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-white/10 bg-transparent px-8 py-3 rounded-xl"
            >
              {showAll ? "Show Less" : `View All Projects (${filteredProjects.length})`}
            </Button>
          </motion.div>
        )}

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Projects", count: projectsData.projects.length },
            { label: "Featured", count: featuredProjects.length },
            { label: "Technologies", count: [...new Set(projectsData.projects.flatMap((p) => p.tech))].length },
            { label: "Categories", count: projectsData.categories.length - 1 },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 bg-gray-900/30 rounded-2xl border border-gray-800">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.count}+
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
  viewMode: "grid" | "list"
  isInView: boolean
  onProjectClick: (projectId: string) => void
}

function ProjectCard({ project, index, viewMode, isInView, onProjectClick }: ProjectCardProps) {
  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group"
      >
        <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          />

          <div className="grid md:grid-cols-3 gap-6 p-6">
            <div className="block cursor-pointer" onClick={() => onProjectClick(project.id)}>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.images?.[0] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer`}
                    onClick={() => onProjectClick(project.id)}
                  >
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        <div className="relative p-6 h-full flex flex-col">
          <div className="block cursor-pointer" onClick={() => onProjectClick(project.id)}>
            <div className="relative overflow-hidden rounded-xl mb-6">
              <img
                src={project.images?.[0] || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {project.featured && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-cyan-500 text-black text-xs font-medium rounded-full">
                  Featured
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3
                  className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer`}
                  onClick={() => onProjectClick(project.id)}
                >
                  {project.title}
                </h3>
                <span className="text-xs text-gray-500">{project.year}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs border border-gray-700"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded-full text-xs border border-gray-700">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-gray-600 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-gray-600 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
