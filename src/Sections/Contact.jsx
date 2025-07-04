import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS values
    const serviceID = 'service_46n9n9f';
    const templateID = 'template_uyhhian';
    const publicKey = 'PB5f3T1ffg1KWQX2F';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus('SUCCESS');
        setFormData({ from_name: '', from_email: '', message: '' });
      })
      .catch(() => {
        setStatus('FAILED');
      });
  };

  return (
    <section id="contact" className="bg-[var(--color-background)] text-[var(--color-text-primary)] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold font-[var(--font-bebas)] mb-6 text-center">Contact Me</h2>
        <form onSubmit={sendEmail} className="flex flex-col gap-6">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            value={formData.from_name}
            onChange={handleChange}
            className="p-4 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-[var(--color-secondary)]"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            value={formData.from_email}
            onChange={handleChange}
            className="p-4 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-[var(--color-secondary)]"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-[var(--color-secondary)] resize-none"
          />
          <button
            type="submit"
            className="bg-[var(--color-secondary)] text-black font-semibold py-3 rounded-md hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>

        {status === 'SUCCESS' && (
          <p className="mt-4 text-green-400 text-center font-medium">Thanks! Your message was sent.</p>
        )}
        {status === 'FAILED' && (
          <p className="mt-4 text-red-500 text-center font-medium">
            Oops! Something went wrong. Please try again.
          </p>
        )}

        <div className="mt-10 text-center text-gray-400">
          <p>Or reach me directly at:</p>
          <p>📞 +8801790400895</p>
          <p>✉️ azharmaruf900@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
