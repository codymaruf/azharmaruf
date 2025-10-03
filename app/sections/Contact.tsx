'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Linkedin, X, Facebook, Youtube, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contacts = [
    { label: 'Email', value: 'azharmaruf900@gmail.com', icon: Mail, href: 'mailto:azharmaruf900@gmail.com' },
    { label: 'WhatsApp', value: '01890817157', icon: MessageCircle, href: 'https://wa.me/01890817157' },
    { label: 'LinkedIn', value: 'azhar-maruf', icon: Linkedin, href: 'https://linkedin.com/in/azhar-maruf-008080357' },
    { label: 'X', value: '@azharmarufworld', icon: X, href: 'https://x.com/azharmarufworld' },
    { label: 'Facebook', value: 'Follow', icon: Facebook, href: 'https://facebook.com/profile.php?id=61574481545132&sk=following' },
    { label: 'YouTube', value: '@azharmaruf', icon: Youtube, href: 'https://youtube.com/@azharmaruf' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-32 px-6 overflow-hidden">
      
      {/* Background floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-36 h-36 rounded-full blur-3xl animate-float-${i % 3}`}
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
          Contact
        </p>

        {/* Headline */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ fontFamily: 'var(--font-clash), sans-serif' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-orange-800 to-rose-900">
            Let’s Grow Your Business Together
          </span>
        </h2>

        {/* Paragraph */}
        <p className={`text-lg md:text-xl text-gray-700 leading-relaxed mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Ready to increase leads, boost sales, and build a strong online presence? Get in touch, and let’s make your brand stand out.
        </p>

        {/* Contact Options */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a key={idx} href={contact.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-amber-100 hover:border-amber-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-400 text-white group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5"/>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-800">{contact.label}</p>
                  <p className="text-gray-600 text-sm">{contact.value}</p>
                </div>
              </a>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="mailto:azharmaruf900@gmail.com" className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden inline-flex items-center gap-2">
            Start Growing Your Brand
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
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
