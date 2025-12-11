import React, { useState } from 'react';
import { CircularCTA, PlumButton, ArrowButton, SectionLabel, MetadataLabel } from '../components/UIComponents';

export const StyleGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 bg-charcoal text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded shadow-lg hover:bg-plum transition-colors"
      >
        View Component Library
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-beige/95 backdrop-blur-md overflow-y-auto p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12 border-b border-charcoal/20 pb-4">
          <h1 className="font-serif text-3xl text-charcoal">Component Library</h1>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-2xl text-charcoal hover:text-plum"
          >
            &times;
          </button>
        </div>

        <div className="space-y-16">
          {/* Typography */}
          <section>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal/60 mb-6">Typography</h3>
            <div className="space-y-4">
              <SectionLabel>Headlines</SectionLabel>
              <p className="font-serif text-2xl">Playfair Display — Subheadings and Accents</p>
              <p className="font-sans text-base">Inter — Body text. Soft, minimal, readable for long content blocks.</p>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em]">Metadata Label</p>
            </div>
          </section>

          {/* Buttons */}
          <section>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal/60 mb-6">Buttons & Interactives</h3>
            <div className="flex flex-wrap gap-8 items-center">
              <CircularCTA />
              <PlumButton onClick={() => {}}>Standard Action</PlumButton>
              <div className="flex gap-2">
                <ArrowButton direction="left" onClick={() => {}} />
                <ArrowButton direction="right" onClick={() => {}} />
              </div>
            </div>
          </section>

          {/* Cards & Labels */}
          <section>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal/60 mb-6">Labels</h3>
            <div className="flex flex-wrap gap-8 items-start bg-white/20 p-8 rounded">
              <MetadataLabel label="Collection Code" value="170601B DRESS" />
              <MetadataLabel label="Material" value="100% SILK ORGANZA" />
            </div>
          </section>
          
          {/* Colors */}
          <section>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal/60 mb-6">Palette</h3>
            <div className="flex gap-4">
               <div className="space-y-2">
                 <div className="w-16 h-16 bg-[#D8C8BB] rounded shadow-sm"></div>
                 <p className="text-[10px]">Beige #D8C8BB</p>
               </div>
               <div className="space-y-2">
                 <div className="w-16 h-16 bg-[#2B2624] rounded shadow-sm"></div>
                 <p className="text-[10px]">Charcoal #2B2624</p>
               </div>
               <div className="space-y-2">
                 <div className="w-16 h-16 bg-[#7A3F52] rounded shadow-sm"></div>
                 <p className="text-[10px]">Plum #7A3F52</p>
               </div>
               <div className="space-y-2">
                 <div className="w-16 h-16 bg-[#E3D4C8] rounded shadow-sm"></div>
                 <p className="text-[10px]">Light #E3D4C8</p>
               </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
