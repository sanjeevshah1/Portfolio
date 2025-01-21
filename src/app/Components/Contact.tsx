'use client';
import emailjs from '@emailjs/browser';

import { useEffect, useState } from 'react';
// import { BackgroundLines } from './ui/background-lines';
const Contact = () => {
  const [sent,setSent] = useState(false);
  const [error, setError] = useState<Error | null | string>(null);
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form
      );
      setSent(true);
      setError(null);
      form.reset();
    } catch (error) {
      // Improved error handling
      let errorMessage = 'An unknown error occurred';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      } else if (error && typeof error === 'object' && 'message' in error) {
        errorMessage = (error as { message: string }).message;
      }

      console.error('Error sending email:', errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <section 
      id="contact-me" 
      className="relative min-h-screen flex items-center justify-center py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 bg-gray-800/60 backdrop-blur-lg border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden">
          {/* Contact Information Column */}
          <div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-purple-800/50 to-pink-800/50">
            <h3 className="text-4xl font-josefinSlab mb-6 text-white">
              Contact Me!
            </h3>
            <p className="text-gray-300 mb-6">
              Feel free to reach out. I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white">sahsanjeev42@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white">+977 (98) 24762539</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="p-8 w-full lg:p-12">
            <h2 className="text-5xl font-bold text-center font-josefinSlab mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
              Get in Touch
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>

            {sent && (
              <div className="mt-6 text-center">
                <p className="text-green-400 animate-bounce">
                  ✓ Message sent successfully!
                </p>
              </div>
            )}

            {error && (
              <div className="mt-6 text-center">
                <p className="text-red-400 animate-shake">
                  ✗ Email not sent. Please try again.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;