import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'GymCo Female',
    image: '/assets/gymCo.png',
    url: 'https://gymco.vercel.app/',
    tags: ['Live Demo', 'Tailwind', 'Framer Motion'],
    note: '⚠️ Demo site — built to pitch a real gym but not currently in use.',
  },
  {
    title: 'Boot Camp Seven',
    image: '/assets/bootCamp.png',
    url: 'https://boot-camp-seven.vercel.app/',
    tags: ['Live Demo', 'Clean Design', 'React'],
    note: '⚠️ Will be in use very soon',
  },
];

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.project-card');

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="projects"
      className="w-full bg-[var(--color-background)] text-[var(--color-text-primary)] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-[var(--font-bebas)] mb-8">
          Recent&nbsp;Projects
        </h2>

        <div
          ref={containerRef}
          className="flex flex-col md:flex-row gap-6"
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-5 text-left space-y-2">
                <h3 className="text-xl font-semibold text-[var(--color-secondary)]">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 italic">{project.note}</p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--color-text-primary)] text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
