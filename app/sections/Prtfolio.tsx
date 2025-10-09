'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

export default function PortfolioSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const webProjects = [
    { title: 'Philmverse', url: 'https://philmverse.vercel.app' },
    // { title: 'Aponjon Pure Foods', url: 'https://aponjonpurefoods.vercel.app' },
    // { title: 'Bootcamp Fitness', url: 'https://bootcampfitness.club' },
  ];

  const filmProjects = [
    { title: 'Short Film', url: 'https://youtu.be/_xhg16QRYHo?si=wBeM2k2fvF4I8HVY' },
  ];

  return (
    <section className="relative py-32 px-6 overflow-visible">

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <p className={`text-sm md:text-base text-amber-800 font-semibold uppercase mb-3 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Portfolio
        </p>

        {/* Headline */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ fontFamily: 'var(--font-clash), sans-serif' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-orange-800 to-rose-900">
            My Works
          </span>
        </h2>

        {/* Web Projects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-6">Web Projects</h3>
          <div className="flex flex-wrap gap-8">
            {webProjects.map((project, idx) => (
              <div
                key={idx}
                className={`group rounded-3xl shadow-xl bg-white/70 backdrop-blur-sm border border-amber-100 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + idx * 200}ms`, minWidth: '320px', flex: '1 1 320px', maxWidth: '100%' }}
              >
                <div className="relative w-full aspect-[16/9]">
                  <iframe
                    src={project.url}
                    className="w-full h-full rounded-3xl border-0"
                    title={project.title}
                  />
                </div>
                <div className="flex items-center justify-between p-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group/link"
                  >
                    <h4 className="text-lg font-semibold group-hover/link:underline">{project.title}</h4>
                    <ExternalLink className="w-5 h-5 text-amber-800"/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Film Projects */}
<div>
  <h3 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-6">Film Projects</h3>
  <div className="flex flex-wrap gap-8">
    <div
      className={`group rounded-3xl shadow-xl bg-white/70 backdrop-blur-sm border border-amber-100 overflow-hidden transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `200ms`, minWidth: '320px', flex: '1 1 320px', maxWidth: '100%' }}
    >
      <div className="relative w-full aspect-[16/9]">
        <iframe
          src="https://www.youtube.com/embed/_xhg16QRYHo?si=JOK6erou7xPD_INt"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full rounded-3xl border-0"
        ></iframe>
      </div>
      <div className="flex items-center justify-between p-4">
        <a
          href="https://youtu.be/_xhg16QRYHo?si=wBeM2k2fvF4I8HVY"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group/link"
        >
          <h4 className="text-lg font-semibold group-hover/link:underline">Short Film Task</h4>
          <ExternalLink className="w-5 h-5 text-rose-800"/>
        </a>
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}
