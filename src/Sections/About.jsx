import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[var(--color-background)] text-[var(--color-text-primary)] py-20 px-6 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* ——— Left column: text ——— */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-[var(--font-bebas)] mb-4">
            About&nbsp;Me
          </h2>

          <p className="text-gray-300 md:text-lg leading-relaxed">
            I’m <span className="font-semibold text-[#FFD700]">Maruf</span>, a
            dedicated web developer who specialises in crafting high‑impact
            websites for gyms and fitness brands. My mission is simple&nbsp;—
            give every fitness centre a digital presence that feels as powerful
            as the workouts happening inside.
          </p>

          <div className="mt-6 space-y-3">
            <p className="font-semibold text-[#FF6B00]">
              What I bring to the table
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Modern, responsive UI built with React &amp; TailwindCSS</li>
              <li>Smooth animations with GSAP / Framer Motion</li>
              <li>Performance‑first coding for fast load times</li>
              <li>SEO‑friendly structure to help gyms rank locally</li>
              <li>Clear calls‑to‑action that turn visitors into members</li>
            </ul>
          </div>

          <a
            href="#projects"
            className="inline-block mt-8 bg-gradient-to-r from-[#FF3C38] to-[#FFD700] hover:scale-105 transition-transform px-6 py-3 rounded-full text-black font-semibold shadow-xl"
          >
            View My Work
          </a>
        </div>

        {/* ——— Right column: profile / decorative image ——— */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/myPhoto.jpg" /* replace with your photo */
            alt="Maruf"
            className="w-60 h-60 object-cover rounded-2xl shadow-2xl border-4 border-[#FF3C38]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
