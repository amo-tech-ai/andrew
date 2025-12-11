import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PAST_COLLECTIONS } from '../constants';
import { SectionId } from '../types';

export const Collections: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax: Each column moves at a slightly different speed to create depth/floating effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -50]); // Starts lower
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -120]); 
  const y4 = useTransform(scrollYProgress, [0, 1], [200, -20]); // Starts lowest

  const parallaxValues = [y1, y2, y3, y4];

  return (
    <section id={SectionId.COLLECTIONS} ref={containerRef} className="relative py-24 md:py-40 bg-[#D8C8BB] overflow-hidden min-h-[120vh]">
       {/* Background: Thin Diagonal Lines matched to screenshot */}
       <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-[20%] left-[15%] w-[1px] h-[150%] bg-[#7A3F52]/10 rotate-[15deg] origin-center" />
          <div className="absolute -top-[20%] left-[38%] w-[1px] h-[150%] bg-[#7A3F52]/10 rotate-[15deg] origin-center" />
          <div className="absolute -top-[20%] left-[62%] w-[1px] h-[150%] bg-[#7A3F52]/10 rotate-[15deg] origin-center" />
          <div className="absolute -top-[20%] left-[85%] w-[1px] h-[150%] bg-[#7A3F52]/10 rotate-[15deg] origin-center" />
       </div>

       <div className="container mx-auto px-4 md:px-12 relative z-10">
          {/* Header - High Fidelity Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 md:mb-24"
          >
             <h2 className="font-serif text-[3.5rem] md:text-[6rem] lg:text-[8.5rem] leading-[0.8] text-[#7A3F52] font-normal tracking-tighter uppercase opacity-90 mix-blend-multiply">
               Past Collections
             </h2>
          </motion.div>

          {/* Grid/Flex Layout with Staggered Parallax */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-8 items-start">
             {PAST_COLLECTIONS.map((collection, index) => {
               // Stagger logic: 2nd and 4th items have text on top
               const isTextTop = index % 2 !== 0; 

               return (
                 <motion.div
                   key={collection.id}
                   style={{ y: parallaxValues[index] }}
                   className="flex flex-col items-center group cursor-pointer"
                 >
                   {/* Label Top (Even Items) */}
                   {isTextTop && (
                     <div className="mb-4 md:mb-6 text-center transition-transform duration-500 group-hover:-translate-y-2">
                        <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-white/90 uppercase drop-shadow-sm">
                          {collection.name}
                        </span>
                     </div>
                   )}

                   {/* Image */}
                   <div className="relative w-full aspect-[9/16] md:w-[85%] overflow-hidden">
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#7A3F52] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 mix-blend-color" />
                      
                      <img 
                        src={collection.image} 
                        alt={collection.name}
                        className="w-full h-full object-cover grayscale contrast-[1.15] brightness-105 group-hover:grayscale-0 transition-all duration-700 ease-out mix-blend-multiply opacity-95 group-hover:scale-105" 
                      />
                   </div>

                   {/* Label Bottom (Odd Items) */}
                   {!isTextTop && (
                     <div className="mt-4 md:mt-6 text-center transition-transform duration-500 group-hover:translate-y-2">
                        <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-white/90 uppercase drop-shadow-sm">
                          {collection.name}
                        </span>
                     </div>
                   )}
                 </motion.div>
               )
             })}
          </div>
       </div>
    </section>
  );
};