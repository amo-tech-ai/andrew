import React from 'react';
import { ConsoleTower } from './components/UIComponents';
import { Hero } from './sections/Hero';
import { EyeSpy } from './sections/EyeSpy';
import { Collections } from './sections/Collections';
import { Biography } from './sections/Biography';
import { Contact } from './sections/Contact';
import { StyleGuide } from './sections/StyleGuide';

function App() {
  return (
    <main className="w-full bg-beige text-charcoal selection:bg-plum selection:text-white">
      {/* Visual Component Library (Toggleable) */}
      <StyleGuide />
      
      {/* Decorative Fixed Element */}
      <ConsoleTower />
      
      {/* Main Scroll Content */}
      <Hero />
      <EyeSpy />
      <Collections />
      <Biography />
      <Contact />
    </main>
  );
}

export default App;
