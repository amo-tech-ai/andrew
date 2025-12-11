import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { CircularCTA } from '../components/UIComponents';
import { HERO_MODEL_IMG } from '../constants';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yModel = useTransform(scrollY, [0, 500], [0, 100]);
  const yText = useTransform(scrollY, [0, 500], [0, -50]);
  const yNav = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#E5DCD3]">
      {/* Background Split Structure */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Left Diagonal Gradient Block */}
        <div 
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#CFC3C6] to-[#8E909F] mix-blend-normal"
          style={{ 
            clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0 100%)',
          }}
        />
      </div>

      {/* Top Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 p-8 md:p-16 z-50 flex justify-between items-start">
        <motion.div 
          style={{ y: yNav }}
          className="flex items-center gap-8"
        >
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl font-sans tracking-[0.2em] text-white mix-blend-hard-light"
          >
            <span className="font-light opacity-90">ANDREW</span>
            <span className="font-bold">MAJTENYI</span>
          </motion.div>

          {/* Directional Controls */}
          <div className="hidden md:flex">
             <button className="w-10 h-10 border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
               <ChevronUp size={16} strokeWidth={1} />
             </button>
             <button className="w-10 h-10 border-l-0 border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
               <ChevronDown size={16} strokeWidth={1} />
             </button>
          </div>
        </motion.div>
        
        {/* Menu Tab */}
        <button className="bg-plum text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-charcoal transition-colors shadow-lg">
           Menu
        </button>
      </nav>

      {/* Main Content Layer */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
         
         {/* CTA - Moved to left side */}
         <motion.div 
            style={{ y: yText }}
            className="absolute left-[15%] md:left-[20%] top-1/2 -translate-y-1/2 z-30"
         >
            <CircularCTA variant="dark" label="start the journey" onClick={() => document.getElementById('eye-spy')?.scrollIntoView({ behavior: 'smooth' })} />
         </motion.div>

         {/* Model Image - Right Side */}
         <motion.div 
            style={{ y: yModel }}
            className="absolute right-[5%] md:right-[12%] bottom-0 h-[80%] md:h-[90%] w-auto flex items-end justify-center pointer-events-none z-20"
         >
            <img 
              src={HERO_MODEL_IMG} 
              alt="Editorial Model" 
              className="h-full w-auto object-contain drop-shadow-2xl brightness-105 contrast-105"
            />
            {/* Ground Shadow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[20px] bg-charcoal/20 blur-xl rounded-[100%]" />
         </motion.div>
      </div>
    </section>
  );
};