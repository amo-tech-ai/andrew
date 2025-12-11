import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/UIComponents';
import { BIO_IMAGE } from '../constants';
import { SectionId } from '../types';

export const Biography: React.FC = () => {
  return (
    <section id={SectionId.BIOGRAPHY} className="relative py-32 bg-white/40">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
           <SectionLabel>BIOGRAPHY</SectionLabel>
        </motion.div>

        <div className="relative mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
           {/* Decorative Angular Block */}
           <div className="absolute top-0 left-0 w-full h-[500px] bg-charcoal/5 -skew-y-3 -z-10 translate-y-24" />

           {/* Portrait */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="lg:col-span-5 relative"
           >
             <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
               <img src={BIO_IMAGE} alt="Designer Portrait" className="w-full h-full object-cover grayscale contrast-125" />
               <div className="absolute inset-0 bg-plum/20 mix-blend-screen" />
             </div>
           </motion.div>

           {/* Text Columns */}
           <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-12 pt-8">
              <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2, duration: 0.8 }}
                 className="prose prose-sm font-sans text-charcoal/80 leading-relaxed"
              >
                <p className="mb-6">
                  Unlike most fashion designers who start with a sketch, Andrew Majtenyi gets his inspiration from the textures, colour and feel of the fabric. Andrew has designed for film and television, and has worked on numerous productions.
                </p>
                <p>
                  London was the obvious next step setting up a shop in Clerkenwell in 2009 and showing during London Fashion Week.
                </p>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4, duration: 0.8 }}
                 className="prose prose-sm font-sans text-charcoal/80 leading-relaxed"
              >
                <p className="mb-6">
                  Over the years he learned about filmmaking, a skill he now uses to write and direct the film shorts that open his catwalk shows.
                </p>
                <p>
                  He apprenticed under master tailor Vincenzo Cardone in late 19th and 20th century tailoring, Madame Sophie who taught him advanced draping techniques, and honed his couture skills while working with the National Ballet of Canada.
                </p>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};
