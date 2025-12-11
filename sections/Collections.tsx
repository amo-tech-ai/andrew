import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PAST_COLLECTIONS } from '../constants';
import { SectionId } from '../types';

export const Collections: React.FC = () => {
  // FIX: Type the ref explicitly to allow null, preventing potential strict mode issues
  const containerRef = useRef<HTMLElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Refined Parallax: More distinct movement differences for a deeper floating effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [250, 0]);

  const parallaxValues = [y1, y2, y3, y4];

  return (
    <section id={SectionId.COLLECTIONS} ref={containerRef} className="relative py-32 md:py-48 bg-[#D8C8BB] overflow-hidden min-h-[140vh]">
       {/* Background: Geometric Wireframe Lines - SVG for precision matching the editorial look */}
       <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply">
          <svg className="w-full h-full" preserveAspectRatio="none">
             {/* Diagonal Guide Lines */}
             <line x1="20%" y1="0" x2="15%" y2="100%" stroke="#7A3F52" strokeWidth="0.5" />
             <line x1="45%" y1="0" x2="40%" y2="100%" stroke="#7A3F52" strokeWidth="0.5" />
             <line x1="70%" y1="0" x2="65%" y2="100%" stroke="#7A3F52" strokeWidth="0.5" />
             <line x1="95%" y1="0" x2="90%" y2="100%" stroke="#7A3F52" strokeWidth="0.5" />
             
             {/* Cross Connector for visual anchor */}
             <line x1="0" y1="35%" x2="100%" y2="45%" stroke="#7A3F52" strokeWidth="0.5" opacity="0.6" />
          </svg>
       </div>

       <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Header - Overlapping Big Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-24 md:mb-40 relative"
          >
             <h2 className="font-serif text-[4rem] md:text-[7rem] lg:text-[10rem] leading-[0.8] text-[#7A3F52] font-thin tracking-tighter uppercase opacity-90 mix-blend-multiply">
               Past Collections
             </h2>
             <div className="w-[1px] h-24 bg-[#7A3F52] mx-auto mt-8 opacity-40" />
          </motion.div>

          {/* Grid Layout with Heavy Stagger */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-start">
             {PAST_COLLECTIONS.map((collection, index) => {
               const isOdd = index % 2 !== 0;
               // Editorial layout: Odd items pushed down significantly to create the 'wave' layout
               const marginTop = isOdd ? 'md:mt-32' : 'md:mt-0';

               // FIX: Safe modulo indexing to prevent undefined parallax values if collection length > parallax values length
               const yValue = parallaxValues[index % parallaxValues.length];

               return (
                 <motion.div
                   key={collection.id}
                   style={{ y: yValue }}
                   className={`flex flex-col items-center group relative ${marginTop}`}
                 >
                   {/* Vertical Line Anchor for each item */}
                   <div className="absolute -top-[50%] bottom-[100%] w-[1px] bg-[#7A3F52]/20 hidden md:block" />

                   <div className="relative w-full aspect-[9/16] md:w-[90%] overflow-hidden shadow-sm">
                      <div className="absolute inset-0 bg-[#7A3F52] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10" />
                      <img 
                        src={collection.image} 
                        alt={collection.name}
                        className="w-full h-full object-cover grayscale contrast-[1.1] brightness-105 group-hover:grayscale-0 transition-all duration-700 ease-out" 
                      />
                   </div>

                   <div className="mt-8 text-center z-20">
                      <span className="block font-sans text-[9px] tracking-[0.25em] text-white bg-[#7A3F52] px-3 py-1 uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Lookbook
                      </span>
                      <h3 className="font-serif text-lg md:text-xl text-charcoal/80 italic group-hover:text-plum transition-colors">
                        {collection.name}
                      </h3>
                   </div>
                 </motion.div>
               )
             })}
          </div>
       </div>
    </section>
  );
};