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
    <section id="contact" className="py-16 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/2 via-transparent to-purple-500/2" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/3 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/3 rounded-full blur-2xl" />

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
            <span className="text-lg">💬</span>
            <span className="text-sm font-medium text-gray-300">
              Let's Connect
            </span>
          </motion.div>

          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${primaryGradient} bg-clip-text text-transparent`}
          >
            {contactData.title}
          </h2>
          <div
            className={`w-20 h-1 bg-gradient-to-r ${primaryGradient} mx-auto rounded-full shadow-lg`}
          />
          <p className="text-gray-300 mt-4 text-base max-w-2xl mx-auto leading-relaxed">
            {contactData.description}
          </p>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/15 to-emerald-500/15 backdrop-blur-sm border border-green-500/25 rounded-xl shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse shadow-lg" />
            <span className="text-green-400 font-medium text-sm">
              {contactData.availability.text}
            </span>
          </div>
        </motion.div>

        {/* Main Content Grid - Balanced Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactData.contactInfo.map((contact, index) => {
                const Icon = iconMap[contact.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${primaryGradient} opacity-3 rounded-2xl blur-lg group-hover:opacity-8 transition-opacity duration-300`}
                      />
                      <div className="relative p-4 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl rounded-2xl border border-white/15 hover:border-white/30 transition-all duration-300 group-hover:scale-[1.01] shadow-lg">
                        <div className="flex items-start gap-3">
                          <div
                            className={`p-3 bg-gradient-to-r ${primaryGradient} rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg`}
                          >
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-400 text-xs font-medium mb-1">
                              {contact.label}
                            </p>
                            <h4 className="text-white font-semibold text-base mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                              {contact.value}
                            </h4>
                            <p className="text-gray-500 text-xs">
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
          </motion.div>

          {/* Right Column - CTA & Looking For */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {/* What I'm Looking For */}
            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${accentGradient} opacity-8 rounded-2xl blur-xl`}
              />
              <div className="relative bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 bg-gradient-to-r ${accentGradient} rounded-lg shadow-lg`}
                  >
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    What I'm Looking For
                  </h3>
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
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        className="group cursor-pointer"
                      >
                        <div className="p-3 bg-gradient-to-br from-white/3 to-white/1 rounded-xl border border-white/8 hover:border-white/20 transition-all duration-300 group-hover:scale-[1.01]">
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-2 bg-gradient-to-r ${accentGradient} rounded-lg group-hover:scale-105 transition-transform duration-300`}
                            >
                              <Icon className="h-3 w-3 text-white" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium text-sm mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                {item.title}
                              </h4>
                              <p className="text-gray-400 text-xs leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 1.1 }}
              className="space-y-3"
            >
              <Button
                size="lg"
                className={`w-full bg-gradient-to-r ${primaryGradient} hover:opacity-90 text-black font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group`}
              >
                <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                Start a Conversation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
