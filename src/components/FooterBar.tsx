"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Server, UserPlus } from 'lucide-react';
import { GlassEffect } from './GlassEffect';

const FooterBar = () => {
  const links = [
    { href: '/#pricing', label: 'Pricing', icon: DollarSign },
    { href: 'https://hosting.neonnextgeneration.com/', label: 'Hosting', icon: Server }
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 flex justify-center z-50"
    >
      <GlassEffect className="px-6 py-3 rounded-full flex items-center space-x-8">
        {/* Logo */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
          <a href="/" className="md:pointer-events-none block w-full h-full rounded-full flex items-center justify-center overflow-hidden">
            <img src="/favico.png" alt="Website Logo" className="w-full h-full object-cover" />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="/#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="https://hosting.neonnextgeneration.com/" target='_blank' className="text-gray-300 hover:text-white transition-colors">Hosting</a>
         
        </div>

        {/* Mobile Links */}
        <div className="flex md:hidden items-center space-x-4">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button onClick={() => window.open("https://billing.neonnextgeneration.com/login")} className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
          <span className="hidden md:inline">Create Account</span>
          <UserPlus className="md:hidden w-5 h-5" />
        </button>
      </GlassEffect>
    </motion.div>
  );
};

export default FooterBar;