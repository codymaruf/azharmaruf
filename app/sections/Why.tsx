'use client';

import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function WhyBusinessSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const bullets = [
    'Professional websites that keeps your business active 24/7',
    'Video content that showcase your brand',
    'Social media posts that increase engagement and credibility'
  ];

  return (
  <section className="relative bg-transparent py-32 px-6 overflow-hidden">
      
      {/* Removed animated background orbs for transparency */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* Left: Title + Headline */}
        <div className="flex-1 text-center md:text-left">
          
          {/* Section Title */}
          <p 
            className={`text-sm md:text-base text-amber-800 font-semibold uppercase mb-3 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Why Your Business Needs Me
          </p>

          {/* Headline */}
          <h2 
            className={`text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'var(--font-clash), sans-serif' }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-orange-800 to-rose-900">
              Your Brand
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-800 via-rose-800 to-pink-900">
              Deserves to Be Seen
            </span>
          </h2>
        </div>

        {/* Right: Paragraph + Bullets */}
        <div className="flex-1">
          <p 
            className={`text-lg md:text-xl text-gray-700 mb-8 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Most businesses lose potential customers because they aren’t visible online or their content doesn’t connect. I combine my skill in storytelling and filmmaking with practical business solutions to help you attract more leads, increase sales, and build trust with your audience.
          </p>

          <ul className="flex flex-col gap-6">
            {bullets.map((bullet, idx) => (
              <li 
                key={idx}
                className={`flex items-center gap-4 text-gray-800 transition-all duration-1000 delay-${300 + idx * 100} ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } hover:translate-x-2`}
              >
                <Check className="w-6 h-6 text-amber-600 flex-shrink-0 transition-transform duration-300" />
                <span className="text-lg md:text-xl">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tailwind animation keyframes */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }
        .animate-float-slow {
          animation: float-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}
