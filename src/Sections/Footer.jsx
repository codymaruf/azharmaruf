import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-background)] text-[var(--color-text-accent)] py-8 px-6 sm:px-25 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-[var(--font-inter)]">
        {/* Left - Name */}
        <div className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Azhar Maruf. All rights reserved.
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-4 items-center">
          <a
            href="https://x.com/azharmarufworld"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-secondary)] transition-colors font-bold text-lg"
            aria-label="X (formerly Twitter)"
          >
            X
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61574481545132"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-secondary)] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
