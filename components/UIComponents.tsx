import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

// --- BUTTONS ---

interface CircularCTAProps {
  onClick?: () => void;
  label?: string;
  variant?: 'default' | 'dark';
}

export const CircularCTA: React.FC<CircularCTAProps> = ({ onClick, label = "start the journey", variant = 'default' }) => {
  const isDark = variant === 'dark';
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`group relative flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full backdrop-blur-md shadow-2xl transition-colors duration-500
        ${isDark ? 'bg-[#565C69]/90 border border-white/10 text-white' : 'bg-gradient-to-br from-charcoal/80 to-charcoal text-white'}
      `}
    >
      <div className={`absolute inset-0 rounded-full border ${isDark ? 'border-white/20' : 'border-white/20'}`} />
      
      {/* Label Text - Positioned to the left of the center plus sign */}
      <span className="absolute right-[60%] whitespace-nowrap text-sm md:text-base italic font-serif text-white/90 pr-2">
        {label}
      </span>
      
      {/* Plus Icon - Dead Center */}
      <Plus className={`w-8 h-8 md:w-12 md:h-12 font-thin group-hover:rotate-90 transition-transform duration-500 ${isDark ? 'text-white' : 'text-white'}`} strokeWidth={1} />
      
    </motion.button>
  );
};

export const PlumButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-8 py-3 rounded-full bg-gradient-to-r from-plum to-[#8B4A5F] text-white font-sans text-xs tracking-[0.2em] uppercase shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
  >
    {children}
  </button>
);

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
  variant?: 'default' | 'minimal';
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, disabled, variant = 'default' }) => {
  if (variant === 'minimal') {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="group p-4 transition-all duration-300 disabled:opacity-10 cursor-pointer"
      >
        {direction === 'left' ? (
          <ChevronLeft className="w-12 h-12 text-white/35 group-hover:text-plum/80 transition-colors stroke-[0.5]" />
        ) : (
          <ChevronRight className="w-12 h-12 text-white/35 group-hover:text-plum/80 transition-colors stroke-[0.5]" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="p-4 rounded-full border border-white/30 bg-white/10 hover:bg-white/30 backdrop-blur-md transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
    >
      {direction === 'left' ? (
        <ArrowLeft className="w-6 h-6 text-charcoal group-hover:-translate-x-1 transition-transform" />
      ) : (
        <ArrowRight className="w-6 h-6 text-charcoal group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
};

// --- LABELS ---

export const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal/90 font-light tracking-tight leading-none mb-12">
    {children}
  </h2>
);

export const MetadataLabel: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col items-end text-right border-r-2 border-plum pr-4">
    <span className="text-[10px] tracking-[0.2em] uppercase text-charcoal/60 mb-1">{label}</span>
    <span className="text-sm md:text-base font-sans font-medium text-charcoal tracking-wide">{value}</span>
  </div>
);

// --- DECORATIVE ---

export const DiagonalWash: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute inset-0 bg-gradient-to-tr from-plum/5 via-transparent to-transparent pointer-events-none ${className}`} />
);

export const ConsoleTower: React.FC = () => (
  <div className="fixed right-0 top-0 bottom-0 w-16 md:w-24 bg-[#E0D5CC] border-l border-white/20 hidden lg:flex flex-col items-center py-8 z-40 shadow-[-10px_0_30px_rgba(0,0,0,0.05)]">
    <div className="w-full px-4 mb-8">
       <div className="w-full aspect-square rounded-full border border-charcoal/20 flex items-center justify-center">
         <div className="w-2 h-2 bg-plum rounded-full animate-pulse" />
       </div>
    </div>
    
    <div className="flex-1 flex flex-col gap-4 w-full px-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="w-full h-1 bg-charcoal/10 rounded-full" />
      ))}
      <div className="h-12 border border-charcoal/10 rounded my-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-charcoal/5" />
      </div>
      {[...Array(4)].map((_, i) => (
        <div key={`b-${i}`} className="w-8 h-8 rounded-full border border-charcoal/20 mx-auto" />
      ))}
    </div>

    <div className="mt-auto font-mono text-[10px] uppercase rotate-90 origin-center text-charcoal/40 tracking-widest whitespace-nowrap mb-12">
      System // Ready
    </div>
  </div>
);
