'use client';

import HeroSection from './sections/Hero';
import Background from './Background';
import Service from './sections/Service';
import Different from './sections/Different';
import Contact from './sections/Contact';
import PortfolioSection from './sections/Prtfolio';
import Why from './sections/Why';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Background />
      <PortfolioSection /> 
      <Why />
      <Service />
      <Different />
      <Contact />
      
    </main>
  )
}


