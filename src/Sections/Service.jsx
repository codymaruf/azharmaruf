import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Custom Gym Websites',
    description:
      'Tailored, responsive websites that reflect your brand’s energy and style.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Fast-loading sites optimized for great user experience and SEO rankings.',
  },
  {
    title: 'Animated UI & Interaction',
    description:
      'Smooth animations and microinteractions to engage your visitors.',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.service-card');

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="services"
      className="bg-[var(--color-background)] text-[var(--color-text-primary)] py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-[var(--font-bebas)] mb-6">
          Services I Provide
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg md:text-xl">
          From sleek design to smooth animations, I deliver gym websites that get results.
        </p>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {services.map(({ title, description }, idx) => (
            <div
              key={idx}
              className="service-card rounded-xl border border-white/10 p-6 hover:border-white/30 transition-colors cursor-default"
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

export default Services;
