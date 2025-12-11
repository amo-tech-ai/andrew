import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/UIComponents';
import { CONTACT_DATA } from '../constants';
import { SectionId } from '../types';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="relative py-32 bg-beige min-h-screen flex flex-col justify-between">
      <div className="container mx-auto px-6 md:px-12">
        <SectionLabel>CONTACT</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16 border-t border-charcoal/20 pt-16">
          {CONTACT_DATA.map((info, idx) => (
            <motion.div
               key={info.label}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <h4 className="text-xl font-serif text-charcoal mb-6">{info.label}</h4>
              <ul className="space-y-2">
                {info.lines.map((line, i) => (
                  <li key={i} className="text-sm font-sans text-charcoal/70">{line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
             <h4 className="text-xl font-serif text-charcoal mb-6">Social</h4>
             <div className="flex gap-4">
               <a href="#" className="p-2 border border-charcoal/20 rounded-full hover:bg-plum hover:text-white hover:border-plum transition-all"><Instagram size={18} /></a>
               <a href="#" className="p-2 border border-charcoal/20 rounded-full hover:bg-plum hover:text-white hover:border-plum transition-all"><Twitter size={18} /></a>
               <a href="#" className="p-2 border border-charcoal/20 rounded-full hover:bg-plum hover:text-white hover:border-plum transition-all"><Facebook size={18} /></a>
             </div>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
           <div className="relative aspect-video bg-charcoal overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" 
                alt="London Shop" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" 
              />
              <div className="absolute bottom-4 left-4 text-white font-serif italic text-2xl">London Shop</div>
           </div>
           
           <div className="bg-white/50 p-12 text-center border border-white/40">
              <h3 className="font-sans text-3xl font-light tracking-widest text-charcoal lowercase mb-2">shop<span className="font-bold">andrew</span></h3>
              <p className="text-xs text-charcoal/50 uppercase tracking-[0.3em]">Online Store</p>
           </div>
        </div>
      </div>
      
      <footer className="mt-24 px-6 md:px-12 text-center md:text-left">
        <p className="text-[10px] uppercase tracking-widest text-charcoal/40">© {new Date().getFullYear()} Andrew Majtenyi. All Rights Reserved.</p>
      </footer>
    </section>
  );
};
