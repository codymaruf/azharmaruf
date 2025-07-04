import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[var(--color-background)] border-b border-white/10 transition-transform duration-500 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between font-[var(--font-inter)]">
        <div className="text-xl font-bold text-[var(--color-secondary)]">Azhar Maruf</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNav}
          className="md:hidden text-[var(--color-text-primary)] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown with smooth animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          navOpen ? 'max-h-96 py-4 px-6' : 'max-h-0 px-6'
        } bg-[var(--color-background)] border-t border-white/10`}
      >
        <div className="flex flex-col gap-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition"
              onClick={() => setNavOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
