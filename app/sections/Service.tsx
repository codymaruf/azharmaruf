'use client';

import React, { useState, useEffect } from 'react';
import { Code, Camera, TrendingUp } from 'lucide-react';

export default function ServicesSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Websites for Businesses',
      description: 'Professional websites designed to showcase your brand, present your services, and convert visitors into customers. Your online presence becomes a sales engine.',
      color: 'from-amber-400 to-orange-400'
    },
    {
      icon: Camera,
      title: 'Video Ads & Content',
      description: 'Videos crafted with storytelling techniques—designed to capture attention, build trust, and generate leads even while you’re on vacation.',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Content',
      description: 'Regular posts and short videos that keep your business visible, relevant, and connected to your audience.',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-rose-50 via-orange-50 to-amber-50 py-32 px-6 overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-40 h-40 rounded-full blur-3xl animate-float-${i % 3}`}
            style={{
              background: `linear-gradient(135deg, rgba(${50 + i*30}, ${100 + i*20}, ${150 + i*10}, 0.3), rgba(${150 + i*20}, ${100 + i*30}, ${50 + i*10}, 0.3))`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Section Title */}
        <p className={`text-sm md:text-base text-amber-800 font-semibold uppercase mb-3 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          How I Help Brands & Businesses
        </p>

        {/* Headline */}
        <h2 className={`text-5xl md:text-6xl lg:text-7xl font-semibold mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ fontFamily: 'var(--font-clash), sans-serif' }}>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-orange-800 to-rose-900">
            Services That Drive Results
          </span>
        </h2>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className={`group relative p-6 rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl bg-white/70 backdrop-blur-sm border border-amber-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all`} style={{ transitionDelay: `${200 + idx*200}ms` }}>
                <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-7 h-7"/>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-base">{service.description}</p>
              </div>
            )
          })}
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
