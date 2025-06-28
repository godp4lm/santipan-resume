"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Coffee,
  Github,
  Linkedin,
  Twitter,
  Download,
  MessageCircle,
  Star,
  ExternalLink,
  Sparkles,
  Network,
  Facebook,
  Instagram,
} from "lucide-react";
import { contactData } from "@/data/contact.data";
import { useTheme } from "@/components/theme-provider";

const iconMap = {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Coffee,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Star,
  ExternalLink,
  Sparkles,
  Network,
  Facebook,
  Instagram,
};

export function ContactSection() {
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

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/2 via-transparent to-purple-500/2" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/3 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/3 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/2 to-purple-500/2 rounded-full blur-2xl" />

      <div className="container mx-auto max-w-6xl relative">
        {/* Enhanced Header Section */}
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
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-white/8 to-white/4 backdrop-blur-sm rounded-full border border-white/15 shadow-lg"
          >
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
            <span className="text-base">✨</span>
            <span className="text-sm font-medium text-gray-200">
              Let's Create Something Amazing
            </span>
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" />
          </motion.div>

          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${primaryGradient} bg-clip-text text-transparent leading-tight`}
          >
            {contactData.title}
          </h2>
          <div
            className={`w-20 h-1 bg-gradient-to-r ${primaryGradient} mx-auto rounded-full shadow-lg mb-4`}
          />
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {contactData.description}
          </p>
        </motion.div>

        {/* Enhanced Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/15 to-emerald-500/15 backdrop-blur-sm border border-green-500/25 rounded-xl shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-2 animate-pulse shadow-lg" />
            <span className="text-green-300 font-medium text-sm">
              {contactData.availability.text}
            </span>
            <Sparkles className="h-3 w-3 text-green-400 ml-2" />
          </div>
        </motion.div>

        {/* Main Content Grid - Optimized Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column - Contact Information & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 h-full flex flex-col"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div
                  className={`p-2 bg-gradient-to-r ${primaryGradient} rounded-lg shadow-md`}
                >
                  <Mail className="h-4 w-4 text-white" />
                </div>
                Contact Information
              </h3>

              {contactData.contactInfo.map((contact, index) => {
                const Icon = iconMap[contact.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${primaryGradient} opacity-3 rounded-xl blur-lg group-hover:opacity-6 transition-opacity duration-300`}
                      />
                      <div className="relative p-4 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-sm rounded-xl border border-white/15 hover:border-white/25 transition-all duration-300 group-hover:translate-y-[-1px] shadow-lg group-hover:shadow-xl">
                        <div className="flex items-start gap-3">
                          <div
                            className={`p-3 bg-gradient-to-r ${primaryGradient} rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0`}
                          >
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-400 text-xs font-medium mb-1">
                              {contact.label}
                            </p>
                            <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300 truncate">
                              {contact.value}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed">
                              {contact.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div
                  className={`p-2 bg-gradient-to-r ${accentGradient} rounded-lg shadow-md`}
                >
                  <Network className="h-4 w-4 text-white" />
                </div>
                Professional Network
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {contactData.socialLinks.map((social, index) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 15 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                      }
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-lg">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-3 rounded-lg blur-md group-hover:opacity-6 transition-opacity duration-300`}
                        />
                        <div className="relative p-3 bg-gradient-to-br from-white/6 to-white/3 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:translate-y-[-1px] shadow-md group-hover:shadow-lg">
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 bg-gradient-to-r ${social.color} rounded-md group-hover:scale-110 transition-transform duration-300 shadow-sm flex-shrink-0`}
                            >
                              <Icon className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-medium text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                {social.platform}
                              </h4>
                              <p className="text-gray-400 text-xs">
                                {social.description}
                              </p>
                            </div>
                            <ExternalLink className="h-3 w-3 text-gray-500 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - What I'm Looking For & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6 h-full flex flex-col"
          >
            {/* What I'm Looking For */}
            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${accentGradient} opacity-6 rounded-xl blur-lg`}
              />
              <div className="relative bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-sm border border-white/15 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2 bg-gradient-to-r ${accentGradient} rounded-lg shadow-md`}
                  >
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      What I'm Looking For
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">
                      Exciting opportunities to collaborate
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {contactData.lookingFor.map((item, index) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap];
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 15 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 15 }
                        }
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        className="group"
                      >
                        <div className="relative overflow-hidden rounded-lg">
                          <div className="p-4 bg-gradient-to-br from-white/4 to-white/2 rounded-lg border border-white/8 hover:border-white/15 transition-all duration-300 group-hover:translate-y-[-1px] shadow-sm group-hover:shadow-md">
                            <div className="flex items-start gap-3">
                              <div
                                className={`p-2 bg-gradient-to-r ${accentGradient} rounded-md group-hover:scale-110 transition-transform duration-300 shadow-sm flex-shrink-0`}
                              >
                                <Icon className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                  {item.title}
                                </h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Work Philosophy Section */}
            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${primaryGradient} opacity-5 rounded-xl blur-lg`}
              />
              <div className="relative bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-sm border border-white/15 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2 bg-gradient-to-r ${primaryGradient} rounded-lg shadow-md`}
                  >
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {contactData.philosophySection.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">
                      {contactData.philosophySection.subtitle}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactData.workPhilosophy.map((philosophy, index) => (
                    <motion.div
                      key={philosophy.principle}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-lg">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${philosophy.color} opacity-10 rounded-lg blur-sm group-hover:opacity-20 transition-opacity duration-300`}
                        />
                        <div className="relative p-4 bg-gradient-to-br from-white/6 to-white/3 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:translate-y-[-2px] shadow-sm group-hover:shadow-lg">
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-2 bg-gradient-to-r ${philosophy.color} rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0`}
                            >
                              <span className="text-lg">{philosophy.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-bold text-sm mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                {philosophy.principle}
                              </h4>
                              <p className="text-gray-400 text-xs leading-relaxed">
                                {philosophy.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/8 to-white/4 backdrop-blur-sm border border-white/15 rounded-xl shadow-lg">
            <span className="text-base">🚀</span>
            <span className="text-white font-medium text-base">
              Ready to start your next project?
            </span>
            <Button
              className={`bg-gradient-to-r ${primaryGradient} hover:scale-105 transition-all duration-300 shadow-lg`}
              size="default"
            >
              Let's Talk
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
