import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animations = [
  {
    title: 'Smooth Transitions',
    description: 'Creating seamless page and element transitions to engage users.',
  },
  {
    title: 'Microinteractions',
    description: 'Attention to small UI animations that improve user experience.',
  },
  {
    title: 'Scroll Animations',
    description: 'Interactive scroll-triggered animations using GSAP and ScrollTrigger.',
  },
  {
    title: '3D & Motion',
    description: 'Integrating 3D models and motion effects for dynamic interfaces.',
  },
];

const Animations = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll('.anim-item');

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.15,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  // Smooth mouse tilt effect with GSAP tweening
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * 10 * -1;
    const rotateY = ((x - midX) / midX) * 10;

    gsap.to(card, {
      duration: 0.3,
      ease: 'power3.out',
      rotateX,
      rotateY,
      scale: 1.05,
      transformPerspective: 600,
      transformOrigin: 'center',
    });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      duration: 0.5,
      ease: 'power3.out',
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transformPerspective: 600,
      transformOrigin: 'center',
    });
  };

  return (
    <section
      id="animations"
      className="bg-[var(--color-background)] text-[var(--color-text-primary)] py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-[var(--font-bebas)] mb-6 bg-gradient-to-r from-[#FF6B00] via-[#FFD700] to-[#FF3C38] bg-clip-text text-transparent">
          Animation Expertise
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg md:text-xl">
          I craft animations that make websites come alive — from smooth page transitions to interactive scroll effects that keep users engaged.
        </p>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {animations.map(({ title, description }, idx) => (
            <div
              key={idx}
              className="anim-item rounded-xl border border-white/10 p-6 hover:border-white/30 transition-colors cursor-pointer will-change-transform"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-2xl font-semibold text-[var(--color-secondary)] mb-3">
                {title}
              </h3>
              <p className="text-gray-400 text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Animations;
