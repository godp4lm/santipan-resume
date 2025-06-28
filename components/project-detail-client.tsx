"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Target,
  Lightbulb,
  TrendingUp,
  Play,
  Pause,
} from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects.data";
import { Footer } from "@/components/layout/footer";

interface ProjectDetailClientProps {
  project: Project;
}

// Helper function to check if media is video
const isVideo = (mediaUrl: string) => {
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
  return videoExtensions.some((ext) => mediaUrl.toLowerCase().includes(ext));
};

// Helper function to get media type
const getMediaType = (mediaUrl: string) => {
  if (isVideo(mediaUrl)) return "video";
  return "image";
};

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    setIsVideoPlaying(false); // Pause video when changing media
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
    setIsVideoPlaying(false); // Pause video when changing media
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsVideoPlaying(false); // Pause video when changing media
  };

  const currentMedia = project.images[currentImageIndex];
  const isCurrentMediaVideo = isVideo(currentMedia);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/#projects">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                onClick={() => {
                  // Smooth scroll to projects section when going back
                  setTimeout(() => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      requestAnimationFrame(() => {
                        projectsSection.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                          inline: "nearest",
                        });
                      });
                    }
                  }, 100);
                }}
              >
                <ArrowLeft className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Back to Projects</span>
                <span className="sm:hidden">Back</span>
              </Button>
            </Link>

            <div className="flex gap-2 sm:gap-3">
              {project.liveUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-white hover:bg-white/10 bg-transparent text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Live Demo</span>
                    <span className="sm:hidden">Demo</span>
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-white hover:bg-white/10 bg-transparent text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">View Code</span>
                    <span className="sm:hidden">Code</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span
              className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${project.gradient} text-black text-xs sm:text-sm font-medium rounded-full`}
            >
              {project.category}
            </span>
            <span className="text-gray-400 text-xs sm:text-sm">
              {project.year}
            </span>
            {project.featured && (
              <span className="px-2 sm:px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium rounded-full border border-cyan-500/30">
                Featured
              </span>
            )}
          </div>

          <h1
            className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
          >
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-3xl mb-6 sm:mb-8">
            {project.overview}
          </p>

          {/* Project Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-800 rounded-lg">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm">Duration</p>
                <p className="text-white font-medium text-sm sm:text-base">
                  {project.duration}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-800 rounded-lg">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm">Year</p>
                <p className="text-white font-medium text-sm sm:text-base">
                  {project.year}
                </p>
              </div>
            </div>

            {project.teamSize && (
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm">Team Size</p>
                  <p className="text-white font-medium text-sm sm:text-base">
                    {project.teamSize} people
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-800 rounded-lg">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm">Role</p>
                <p className="text-white font-medium text-sm sm:text-base">
                  {project.role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Media Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative bg-gray-900/50 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800">
            <div className="relative aspect-video">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  {isCurrentMediaVideo ? (
                    <div className="relative w-full h-full">
                      <video
                        src={currentMedia}
                        className="w-full h-full object-cover"
                        controls={false}
                        autoPlay={isVideoPlaying}
                        loop
                        muted
                        playsInline
                        onPlay={() => setIsVideoPlaying(true)}
                        onPause={() => setIsVideoPlaying(false)}
                      />
                      {/* Video Play/Pause Overlay */}
                      <button
                        onClick={() => {
                          const video = document.querySelector(
                            "video"
                          ) as HTMLVideoElement;
                          if (video) {
                            if (isVideoPlaying) {
                              video.pause();
                            } else {
                              video.play();
                            }
                          }
                        }}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all duration-300"
                      >
                        <div className="p-3 sm:p-4 bg-black/50 rounded-full">
                          {isVideoPlaying ? (
                            <Pause className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                          ) : (
                            <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white ml-0.5 sm:ml-1" />
                          )}
                        </div>
                      </button>
                    </div>
                  ) : (
                    <img
                      src={currentMedia}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-300 z-10"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-300 z-10"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </button>
                </>
              )}

              {/* Media Counter */}
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 px-2 sm:px-3 py-1 bg-black/70 rounded-full text-white text-xs sm:text-sm z-10">
                {currentImageIndex + 1} / {project.images.length}
              </div>

              {/* Media Type Indicator */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 px-2 py-1 bg-black/70 rounded-full text-white text-xs z-10">
                {isCurrentMediaVideo ? "VIDEO" : "IMAGE"}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {project.images.length > 1 && (
              <div className="p-3 sm:p-4 bg-gray-900/30">
                <div className="flex gap-1.5 sm:gap-2 overflow-x-auto">
                  {project.images.map((media, index) => {
                    const isVideo = getMediaType(media) === "video";
                    return (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`relative flex-shrink-0 w-12 h-9 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === currentImageIndex
                            ? "border-cyan-400"
                            : "border-gray-600 hover:border-gray-500"
                        }`}
                      >
                        {isVideo ? (
                          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                            <Play className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </div>
                        ) : (
                          <img
                            src={media}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        )}
                        {/* Video indicator on thumbnail */}
                        {isVideo && (
                          <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Challenge */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  The Challenge
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                {project.challenge}
              </p>
            </motion.section>

            {/* Solution */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  The Solution
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                {project.solution}
              </p>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Results & Impact
                </h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {result}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gray-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Key Features
              </h3>
              <div className="space-y-1.5 sm:space-y-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300 text-xs sm:text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-3"
            >
              {project.liveUrl && (
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-semibold text-sm sm:text-base py-2.5 sm:py-3"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    View Live Project
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-gray-600 text-white hover:bg-white/10 bg-transparent text-sm sm:text-base py-2.5 sm:py-3"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    View Source Code
                  </a>
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
