"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-xl p-8 border border-white/10 shadow-2xl hover:shadow-white/5 transition-shadow duration-300 relative overflow-hidden"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">About Us</h2>
        <p className="text-gray-300 text-sm italic leading-relaxed">
          We are an Australian-based company specializing in cutting-edge solutions for software development, hosting, game development, VPN solutions, and merchandise. We provide businesses, content creators, and developers with customized, high-performance solutions tailored to their specific needs. As a company, we prioritize the well-being of our employees, ensuring they are well-supported so that we can provide the best possible service to your business.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutSection;