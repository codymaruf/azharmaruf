'use client';

import React, { useState, useEffect } from 'react';
import { Film, Star, Sparkles } from 'lucide-react';

export default function WhyDifferentSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 py-32 px-6 overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-40 h-40 rounded-full blur-3xl animate-float-${i % 3}`}
            style={{
              background: `linear-gradient(135deg, rgba(${100 + i*20}, ${50 + i*20}, ${150 + i*15}, 0.2), rgba(${150 + i*10}, ${100 + i*20}, ${50 + i*15}, 0.2))`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
        
        {/* Section Title */}
        <p className={`text-sm md:text-base text-amber-800 font-semibold uppercase mb-3 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Why I’m Different
        </p>

        {/* Headline */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ fontFamily: 'var(--font-clash), sans-serif' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-orange-800 to-rose-900">
            Storytelling That Sells
          </span>
        </h2>

        {/* Paragraph */}
        <p className={`text-lg md:text-xl text-gray-700 leading-relaxed mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          I’ve written, directed, and edited narrative films, so I know how to engage people through story. I bring that same expertise to businesses—turning your products and services into stories that attract customers, build credibility, and drive sales.
        </p>

        {/* Call to Action */}
        <div className={`flex justify-center md:justify-start gap-4 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Hire Me Today
              <Sparkles className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

      </div>

      {/* Floating Animations Keyframes */}
      <style jsx>{`
        @keyframes float-0 {
          0%,100% { transform: translate(0,0); }
          25% { transform: translate(5px,-10px); }
          50% { transform: translate(-5px,5px); }
          75% { transform: translate(3px,-5px); }
        }
        @keyframes float-1 {
          0%,100% { transform: translate(0,0); }
          25% { transform: translate(-5px,-8px); }
          50% { transform: translate(4px,6px); }
          75% { transform: translate(-2px,-4px); }
        }
        @keyframes float-2 {
          0%,100% { transform: translate(0,0); }
          25% { transform: translate(6px,-6px); }
          50% { transform: translate(-4px,4px); }
          75% { transform: translate(2px,-3px); }
        }

        .animate-float-0 { animation: float-0 12s ease-in-out infinite; }
        .animate-float-1 { animation: float-1 14s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 16s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
