"use client";

import { useEffect, useState } from "react";
import { motion, easeOut, easeInOut } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { TypewriterText } from "@/components/typewriter-text";
import { heroData } from "@/data/hero.data";
import { useTheme } from "@/components/theme-provider";

const iconMap = {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
};

export function HeroSection() {
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { colors, isMounted } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use default colors until mounted to prevent hydration mismatch
  const primaryGradient = isMounted
    ? colors.primary
    : "from-cyan-400 to-blue-500";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      {/* Background gradient - adjusted for theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isClient &&
          [...Array(20)].map((_, i) => {
            // Use deterministic positioning to avoid hydration mismatch
            const x = (i * 100) % 1200; // Fixed positions based on index
            const y = (i * 50) % 800;
            const duration = 10 + (i % 10);

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{
                  x: x,
                  y: y,
                }}
                animate={{
                  y: [y, y - 100, 900],
                }}
                transition={{
                  duration: duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            );
          })}
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="relative inline-block">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r ${primaryGradient} p-1`}
            >
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-4xl font-bold text-white">
                {heroData.avatar.initials}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Typewriter Name */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent min-h-[1.2em]">
            <TypewriterText
              text={heroData.name}
              speed={120}
              delay={1000}
              onComplete={() => setShowTitle(true)}
              className="inline-block"
            />
          </h1>
        </motion.div>

        {/* Typewriter Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-xl md:text-2xl font-medium min-h-[1.5em]">
            {showTitle && (
              <TypewriterText
                text={heroData.title}
                speed={80}
                delay={500}
                onComplete={() => setShowDescription(true)}
                className={`bg-gradient-to-r ${primaryGradient} bg-clip-text text-transparent`}
              />
            )}
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            showDescription ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {heroData.description}
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            showDescription ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {heroData.buttons.map((button, index) => {
            const Icon = iconMap[button.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={button.text}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant={button.type === "primary" ? "default" : "outline"}
                  className={
                    button.type === "primary"
                      ? `bg-gradient-to-r ${primaryGradient} hover:opacity-90 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300`
                      : "border-gray-600 text-white hover:bg-white/10 px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
                  }
                >
                  <Icon className="mr-2 h-5 w-5" />
                  {button.text}
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            showDescription ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center space-x-6"
        >
          {heroData.socialLinks.map((social, index) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <motion.a
                key={social.platform}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-gray-400 ${social.color}`}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showDescription ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: easeInOut,
              type: "tween",
            }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: easeInOut,
                type: "tween",
              }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
