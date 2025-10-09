'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'Home', type: 'route', href: '/' },
    { label: 'Offer', type: 'route', href: '/offer' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-white/40 border-b border-white/20 shadow-sm'
          : 'backdrop-blur-sm bg-white/20 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="text-2xl font-bold bg-gradient-to-r from-amber-900 via-orange-800 to-rose-900 bg-clip-text text-transparent hover:scale-105 transition-transform"
          style={{ fontFamily: 'var(--font-clash), sans-serif' }}
        >
          Azhar Maruf
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                if (link.type === 'scroll') {
                  scrollToTop();
                } else if (link.type === 'route') {
                  window.location.href = link.href;
                }
                setIsMobileMenuOpen(false);
              }}
              className="text-gray-800 hover:text-amber-900 font-medium relative group transition-colors"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={() => window.location.href = '/offer'}
            className="px-5 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            Get Your Free site
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-amber-900 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/50 backdrop-blur-md border-t border-white/20">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                if (link.type === 'scroll') {
                  scrollToTop();
                } else if (link.type === 'route') {
                  window.location.href = link.href;
                }
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-3 text-gray-800 hover:text-amber-900 hover:bg-white/40 transition-all"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => window.location.href = '/offer'}
            className="m-4 w-[calc(100%-2rem)] px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full hover:shadow-md transition-all"
          >
            Get Your Free site
          </button>
        </div>
      )}
    </nav>
  );
}
