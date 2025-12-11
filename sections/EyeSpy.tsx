import React, { useState } from 'react';
import { motion, type PanInfo, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { EYE_SPY_COLLECTION } from '../constants';
import { SectionId } from '../types';

export const EyeSpy: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % EYE_SPY_COLLECTION.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + EYE_SPY_COLLECTION.length) % EYE_SPY_COLLECTION.length);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  const getRelativeIndex = (index: number) => {
    const length = EYE_SPY_COLLECTION.length;
    let diff = (index - currentIndex) % length;
    if (diff < -length / 2) diff += length;
    if (diff > length / 2) diff -= length;
    return diff;
  };

  const getItemState = (index: number) => {
    const diff = getRelativeIndex(index);
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === -1) return 'left';
    return diff > 0 ? 'hiddenRight' : 'hiddenLeft';
  };

  // Editorial Transition: 0.45s with smooth cubic easing
  const transition = { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] };

  const variants: Variants = {
    center: { 
      x: '0%', 
      scale: 1.0, 
      opacity: 1, 
      filter: 'blur(0px) grayscale(0%)',
      zIndex: 30,
      transition 
    },
    left: { 
      x: '-50%', 
      scale: 0.9, 
      opacity: 0.35, 
      filter: 'blur(8px) grayscale(20%)',
      zIndex: 20,
      transition 
    },
    right: { 
      x: '50%', 
      scale: 0.9, 
      opacity: 0.35, 
      filter: 'blur(8px) grayscale(20%)',
      zIndex: 20,
      transition 
    },
    hiddenLeft: {
      x: '-100%',
      scale: 0.8,
      opacity: 0,
      filter: 'blur(12px)',
      zIndex: 10,
      transition
    },
    hiddenRight: {
      x: '100%',
      scale: 0.8,
      opacity: 0,
      filter: 'blur(12px)',
      zIndex: 10,
      transition
    }
  };

  const currentItem = EYE_SPY_COLLECTION[currentIndex];

  return (
    <section id={SectionId.EYE_SPY} className="relative h-screen w-full overflow-hidden bg-[#D8C8BB] flex flex-col justify-center">
      {/* Background: Diagonal Overlay shifting subtly */}
      <div className="absolute inset-0 bg-[#E3D4C8] opacity-25 pointer-events-none" />
      <motion.div 
        animate={{ x: currentIndex * -40 }} 
        transition={{ duration: 0.8, ease: "circOut" }}
        className="absolute inset-[-20%] w-[140%] h-[140%] bg-diagonal-lines opacity-[0.04] pointer-events-none" 
      />
      
      {/* Layout Grid */}
      <div className="container mx-auto px-6 h-full relative z-10 grid grid-cols-12 items-center pointer-events-none">
        
        {/* LEFT: Title */}
        <div className="hidden md:flex col-span-3 h-full flex-col justify-center z-40 pl-8 pointer-events-auto">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
            <h2 className="font-serif text-[6rem] lg:text-[7rem] xl:text-[8rem] leading-[0.8] tracking-tighter text-plum font-light mix-blend-multiply">
              <span className="block">EYE</span>
              <span className="block ml-1">SPY</span>
            </h2>
          </motion.div>
        </div>

        {/* CENTER: Carousel Stage */}
        <div className="col-span-12 md:col-span-6 h-full flex items-center justify-center relative">
          
          {/* Navigation Arrows (Desktop) */}
          <div className="hidden md:flex absolute w-full justify-between px-4 z-50 pointer-events-none">
             <button 
               onClick={prevSlide}
               className="pointer-events-auto p-4 hover:scale-110 transition-transform opacity-60 hover:opacity-100"
             >
               <ChevronLeft size={64} strokeWidth={0.5} color="white" />
             </button>
             <button 
               onClick={nextSlide}
               className="pointer-events-auto p-4 hover:scale-110 transition-transform opacity-60 hover:opacity-100"
             >
               <ChevronRight size={64} strokeWidth={0.5} color="white" />
             </button>
          </div>

          <div className="relative w-full h-[80%] flex items-center justify-center perspective-1000">
             {EYE_SPY_COLLECTION.map((item, index) => {
               const state = getItemState(index);
               return (
                 <motion.div
                   key={item.id}
                   className="absolute top-0 bottom-0 w-full flex items-center justify-center pointer-events-auto touch-pan-y"
                   initial={false}
                   animate={state}
                   variants={variants}
                   drag={state === 'center' ? 'x' : false}
                   dragConstraints={{ left: -100, right: 100 }}
                   whileDrag={{ scale: 1.03, cursor: 'grabbing' }}
                   onDragEnd={handleDragEnd}
                 >
                   <img 
                     src={item.image} 
                     alt={item.name} 
                     draggable={false}
                     className="h-[90%] md:h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] select-none will-change-transform"
                   />
                 </motion.div>
               );
             })}
          </div>
        </div>

        {/* RIGHT: Metadata */}
        <div className="hidden md:flex col-span-3 h-full flex-col justify-center items-end pr-8 z-40 pointer-events-auto">
           {/* Top: Collection Link */}
           <div className="absolute top-[20%] right-8 flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-plum text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <User size={20} strokeWidth={1.5} />
              </div>
              <span className="text-xs tracking-[0.2em] text-white/80 uppercase">View Full Collection</span>
           </div>

           {/* Center: Product Info */}
           <motion.div
             key={`meta-${currentIndex}`}
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.4, delay: 0.1 }}
             className="flex flex-col items-end text-right"
           >
              <span className="text-[10px] tracking-[0.25em] text-plum font-bold uppercase mb-2">
                Current Item
              </span>
              
              <div className="w-full h-[1px] bg-white/40 mb-3" />
              
              <h3 className="text-xl lg:text-2xl font-sans font-light text-white uppercase tracking-widest leading-snug w-[280px]">
                {currentItem.code}
              </h3>
           </motion.div>
        </div>

        {/* MOBILE: Overlay */}
        <div className="md:hidden absolute bottom-12 left-0 right-0 flex flex-col items-center justify-center z-50 pointer-events-none">
          <h2 className="font-serif text-5xl text-plum mb-2">EYE SPY</h2>
          <p className="font-sans text-xs tracking-widest text-charcoal/70 uppercase">{currentItem.code}</p>
          
          <div className="flex gap-8 mt-6 pointer-events-auto">
             <button onClick={prevSlide} className="p-2 opacity-50 hover:opacity-100"><ChevronLeft size={32} /></button>
             <button onClick={nextSlide} className="p-2 opacity-50 hover:opacity-100"><ChevronRight size={32} /></button>
          </div>
        </div>

      </div>
    </section>
  );
};