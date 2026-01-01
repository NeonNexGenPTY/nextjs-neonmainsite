"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Pricing from './Pricing';

const PricingSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 relative z-10"
      id='pricing'
    >
      <Pricing />
    </motion.section>
  );
};

export default PricingSection;