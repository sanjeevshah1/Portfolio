'use client';
import emailjs from '@emailjs/browser';

import { useEffect, useState } from 'react';
import { BackgroundLines } from './ui/background-lines';
const Contact = () => {
  const [sent,setSent] = useState(false);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Send the form data to emailjs
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target
      );
      alert('Message sent successfully!');
      setSent(true);
      e.target.reset();
    } catch (error) {
      setError(error);
      // Check if error is an object and has a message property
      if (error instanceof Error) {
        console.error('Error sending email:', error.message);
      } else {
        console.error('Error sending email:', error);
      }

      // More specific error message
      alert('There was an error while sending the email. Please try again later.');
    }
  };

  return (
    <section id="contact-me" className="relative z-40 py-24 pt-16">
      <BackgroundLines className="min-h-screen max-w-lg mx-auto px-5">
        <h2 className="text-5xl font-mono mb-8 text-purple-500 hover:text-purple-600 transform hover:scale-110 transition-transform duration-300 text-center">
          Contact Me!</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className=''>
            <label htmlFor="name" className="block font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 rounded border text-black hover:border-2 hover:border-x-0 hover:border-purple-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 rounded border text-black hover:border-2 hover:border-x-0 hover:border-purple-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={10}
              required
              className="w-full p-3 rounded border text-black hover:border-2 hover:border-x-0 hover:border-purple-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Send
          </button>
        </form>
        {sent && <p className="mt-4 text-lg text-green-600">Message sent successfully!</p>}
        {error && <p className="mt-4 text-lg text-red-600">Email not sent.</p>}
      </BackgroundLines>
    </section>
  );
};

export default Contact;
