"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Mission from './Mission';

const MissionSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-xl p-8 border border-white/10 shadow-2xl hover:shadow-white/5 transition-shadow duration-300 relative overflow-hidden"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
        <Mission />
      </div>
    </motion.div>
  );
};

export default MissionSection;