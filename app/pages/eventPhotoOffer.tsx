'use client';

/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from 'react';
import { Camera, Code, Film, TrendingUp, ArrowRight, Play, Sparkles, LucideIcon } from 'lucide-react';
import Form from '../sections/Form';

interface MousePosition {
  x: number;
  y: number;
}

interface Service {
  icon: LucideIcon;
  label: string;
  color: string;
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services: Service[] = [
    { icon: Code, label: 'Web Development', color: 'from-amber-500 to-orange-500' },
    { icon: Camera, label: 'Cinematography', color: 'from-orange-500 to-rose-500' },
    { icon: Film, label: 'Filmmaking', color: 'from-rose-500 to-pink-500' },
    { icon: TrendingUp, label: 'Growth Strategy', color: 'from-pink-500 to-purple-500' }
  ];

  return (
    <div ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-amber-300/30 to-orange-400/30 blur-3xl"
          style={{
            top: '10%',
            left: '15%',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-rose-300/20 to-pink-400/20 blur-3xl"
          style={{
            bottom: '10%',
            right: '10%',
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-yellow-300/25 to-amber-400/25 blur-3xl"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2420_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2420_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col gap-8">
        
        

        {/* Profile photo for small devices */}
        <div className="block md:hidden w-40 h-40 mx-auto relative">
          <img 
            src="/profile.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full border-4 border-white/40 shadow-lg filter grayscale"
          />
        </div>

        {/* Headline and CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          
          {/* Left: Headline + Text */}
          <div className="flex-1">
            {/* Main Headline */}
            <h1 
              className={`text-3xl md:text-4xl lg:text-6xl font-semibold leading-[1.1] mb-6 transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ fontFamily: 'var(--font-clash), sans-serif' }}
            > 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-orange-800 to-rose-900">
                Wedding Photographers: Get
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-800 via-rose-800 to-pink-900">
                 2 Extra Clients Per Week
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-lg md:text-xl text-gray-700 leading-relaxed mb-4 max-w-3xl transition-all duration-1000 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Start with a free landing page – <span className="font-semibold text-amber-900">pay only if you want to pay for it.</span>
            </p>

            <p 
              className={`text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* I help brands and businesses build websites, create video content, and present themselves online—working even while you&apos;re taking a break. */}
              We'll create a simple, professional landing page for your photography business. Just fill the form below – no upfront cost. You only pay if you love it and want to own it.
            </p>

           
          </div>

          {/* Right: Profile photo for large devices */}
          <div className="hidden md:block flex-shrink-0 w-60 h-60 lg:w-72 lg:h-72 relative">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full border-4 border-white/40 shadow-lg filter grayscale hover:scale-105 transition-transform duration-300"
            />
            
          </div>

          

        </div>
        <Form />

        

      <p
      className='text-center text-sm text-gray-500 mt-10'
      >© 2025 Azhar Maruf — Helping wedding photographers get 2 extra clients per week.</p>
      </div>

     

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
