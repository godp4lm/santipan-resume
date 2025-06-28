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
} from "lucide-react";
import { contactData } from "@/data/contact.data";

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
};

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {contactData.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            {contactData.description}
          </p>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
            <span className="text-green-400 font-medium">
              {contactData.availability.text}
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
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
                      className="flex items-start p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-cyan-500/20 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors duration-300">
                        <Icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-gray-400 text-sm">
                            {contact.label}
                          </p>
                        </div>
                        <p className="text-white font-medium mb-1">
                          {contact.value}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {contactData.socialLinks.map((social, index) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 text-gray-400 ${social.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-8"
          >
            {/* What I'm Looking For */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  What I'm Looking For
                </h3>
                <div className="space-y-4">
                  {contactData.lookingFor.map((item, index) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap];
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="p-2 bg-cyan-500/20 rounded-lg">
                          <Icon className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="space-y-4"
            >
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-gray-600 text-white hover:bg-white/10 py-4 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="grid grid-cols-2 gap-4"
            >
              {contactData.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-gray-900/30 rounded-xl border border-gray-800"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
