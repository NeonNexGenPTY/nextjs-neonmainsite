import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Satellite } from 'lucide-react';

const SpaceElements = () => {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
  const verticalRange = { min: 50, max: 1500 };
  
  const setupElement = () => ({
    y1: getRandom(verticalRange.min, verticalRange.max),
    duration: getRandom(4, 10),
    delay: getRandom(0, 10),
  });

  const r1 = setupElement();
  const r2 = setupElement();
  const sat = setupElement();
  const ship = setupElement();

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      
      <motion.div
        initial={{ x: '-10%', y: r1.y1 }}
        animate={{ x: ['-10%', '110%'], y: [r1.y1, r1.y1] }}
        transition={{ duration: r1.duration, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: r1.delay }}
        className="absolute"
      >
        <Rocket className="w-6 h-6 text-blue-300 opacity-40 transform rotate-90" />
      </motion.div>

      <motion.div
        initial={{ x: '-10%', y: r2.y1 }}
        animate={{ x: ['-10%', '110%'], y: [r2.y1, r2.y1] }}
        transition={{ duration: r2.duration, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: r2.delay }}
        className="absolute"
      >
        <Rocket className="w-8 h-8 text-purple-400 opacity-30 transform rotate-90" />
      </motion.div>

      <motion.div
        initial={{ x: '-10%', y: sat.y1 }}
        animate={{ x: ['-10%', '110%'], y: [sat.y1, sat.y1] }}
        transition={{ duration: sat.duration, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: sat.delay }}
        className="absolute"
      >
        <Satellite className="w-5 h-5 text-cyan-400 opacity-50" />
      </motion.div>

      <motion.div
        initial={{ x: '-10%', y: ship.y1 }}
        animate={{ x: ['-10%', '110%'], y: [ship.y1, ship.y1] }}
        transition={{ duration: ship.duration, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: ship.delay }}
        className="absolute"
      >
        <Rocket className="w-10 h-10 text-indigo-500 opacity-35 transform rotate-90" />
      </motion.div>
    </div>
  );
};
export default SpaceElements;