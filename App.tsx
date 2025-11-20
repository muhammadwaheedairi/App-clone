import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Demo } from './components/Demo';
import { Navbar } from './components/Navbar';
import { Tutorials } from './components/Tutorials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
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