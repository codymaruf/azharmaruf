'use client';

import React, { useState } from 'react';

export default function FreeLandingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: ''
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    if (files) console.log('Files:', files);
    setSubmitted(true);
  };

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 blur-3xl animate-float"
             style={{ top: '10%', left: '15%' }} />
        <div className="absolute w-60 h-60 rounded-full bg-gradient-to-br from-rose-400/20 to-pink-500/20 blur-3xl animate-float"
             style={{ bottom: '5%', right: '10%' }} />
      </div>

      {!submitted ? (
        <form 
        action="https://formspree.io/f/mldplyyo" 
          method="POST"
          onSubmit={handleSubmit} 
          className="relative flex flex-col gap-4 bg-white/40 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl border border-white/20 shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 font-clashDisplay mb-6 text-center sm:text-left"
          style={{ fontFamily: 'var(--font-clash), sans-serif' }}
          >
            Get Your Free Landing Page
          </h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-white/30 bg-orange-100 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-white/30 bg-orange-100 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none w-full"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="WhatsApp / Phone (Optional)"
            className="p-3 rounded-lg border border-white/30 bg-orange-100 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none w-full"
          />
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website / Landing Page Name"
            className="p-3 rounded-lg border border-white/30 bg-orange-100 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none w-full"
          />

          <label className="flex flex-col gap-2 text-red-900">
            <span className="font-medium">Submit Your Photos & Videos (Optional)</span>
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="p-2 rounded-lg border border-white/30 bg-orange-200 focus:ring-2 focus:ring-amber-400 focus:outline-none w-full"
            />
          </label>

          <button
            type="submit"
            className="mt-4 px-6 py-3 text-white font-clashDisplay font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto self-center"
          >
            Get My Free Landing Page
          </button>
        </form>
      ) : (
        <div className="relative text-center text-white font-clashDisplay font-semibold text-xl p-6 bg-gray-900/80 rounded-3xl backdrop-blur-md border border-white/20 shadow-lg">
          Thanks! We received your submission. We&apos;ll contact you soon.
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        .animate-float { animation: float 10s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
