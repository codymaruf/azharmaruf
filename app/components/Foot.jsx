'use client';

import React from 'react';
import { Mail, Linkedin, Github, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', type: 'route', href: '/' },
    { label: 'Offer', type: 'route', href: '/offer' },
  ];

  const socials = [
    { icon: Linkedin, href: 'https://linkedin.com/in/azhar-maruf-008080357' },
    { icon: Twitter, href: 'https://x.com/azharmarufworld' },
    { icon: Facebook, href: 'https://facebook.com/profile.php?id=61574481545132&sk=following' },
    { icon: Youtube, href: 'https://youtube.com/@azharmaruf' },
    { icon: Github, href: 'https://github.com' },
  ];

  return (
    <footer className="relative border-t border-amber-200/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Column */}
          <div>
            <h3
              className="text-2xl font-bold bg-gradient-to-r from-amber-900 via-orange-800 to-rose-900 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: 'var(--font-clash), sans-serif' }}
            >
              Azhar Maruf
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Helping brands grow online through creative web experiences, visual storytelling, and powerful digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-amber-900 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect</h4>
            <a
              href="mailto:azharmaruf900@gmail.com"
              className="text-gray-700 hover:text-amber-900 flex items-center gap-2 mb-4 transition-colors"
            >
              <Mail className="w-4 h-4" />
              azharmaruf900@gmail.com
            </a>

            <div className="flex gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/50 backdrop-blur-sm rounded-full border border-amber-200/50 hover:border-amber-400 hover:scale-110 transition-all"
                  >
                    <Icon className="w-5 h-5 text-amber-900" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-amber-200/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-sm">
            © {new Date().getFullYear()} Azhar Maruf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
