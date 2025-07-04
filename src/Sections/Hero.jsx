import React, { useEffect, useState } from 'react';

const images = [
  '/assets/bg1.jpg',
  '/assets/bg2.jpg',
   '/assets/bg3.jpg',
  '/assets/bg4.jpg',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden text-white font-[var(--font-inter)]">

      {/* Background Slideshow */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight font-[var(--font-bebas)] text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FFD700] to-[#FF3C38] animate-gradient">
          Websites That Lift <br className="hidden md:block" /> Brands Like a Deadlift
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-lg mx-auto">
          I'm Maruf — a web developer focused on building bold and animated websites for gyms & fitness studios.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block bg-gradient-to-r from-[#FF3C38] to-[#FFD700] hover:scale-105 transition-transform px-6 py-3 text-lg font-semibold rounded-full text-black shadow-xl"
        >
          See My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
