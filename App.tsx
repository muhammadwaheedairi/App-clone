import React, { useState } from 'react';
import { Hero } from './app/components/Hero';
import { Features } from './app/components/Features';
import { Testimonials } from './app/components/Testimonials';
import { Pricing } from './app/components/Pricing';
import { FAQ } from './app/components/FAQ';
import { Footer } from './app/components/Footer';
import { Demo } from './app/components/Demo';
import { Tutorials } from './app/components/Tutorials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <main>
        <Hero />
        <Features />
        <div id="demo">
          <Demo />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <Tutorials />
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;