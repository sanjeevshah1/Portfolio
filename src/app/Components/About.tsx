'use client';
import React, { useEffect, useState } from 'react';

const DeveloperProfile = () => {
  const items = [
    {
      icon: "👀",
      text: "I'm interested in web development, data structures, and algorithms.",
    },
    {
      icon: "🌱",
      text: "I'm currently learning advanced Typescript, React.js, and backend development with Node.js.",
    },
    {
      icon: "💞️",
      text: "I'm looking to collaborate on open-source projects and innovative web applications.",
    },
    {
      icon: "📚",
      text: "I am currently studying Electronics, Communication and Information Engineering.",
    },
    {
      icon: "⚡",
      text: "I enjoy solving LeetCode problems and have solved over 150 challenges!",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    // Add keyframes for fade-in-up animation dynamically
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fade-in-up {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
        opacity: 0;
      }
    `;
    document.head.appendChild(style);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div id='about' className="relative mt-14 min-h-screen bg-gradient-to-br flex flex-col items-center from-black via-gray-800 to-black p-8">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light blur-3xl animate-pulse delay-700" />
      </div>
      <h2 className="text-3xl font-mono md:text-6xl text-purple-500 hover:text-purple-600 transform hover:scale-110 transition-transform duration-300 mb-10">
        About me!
      </h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="animate-fade-in-up bg-gradient-to-r from-gray-700/10 to-gray-800/10 
                       backdrop-blur-sm rounded-lg p-6 shadow-xl hover:shadow-2xl hover:scale-100
                        hover:left-10 
                       border border-white/10 hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-pink-500/5"
            style={{
              animationDelay: `${index * 200}ms`,
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="flex items-start space-x-4">
              <span
                className={`text-2xl ${
                  hoverIndex === index ? "" : "animate-bounce"
                }`}
              >
                {item.icon}
              </span>
              <p className="text-white/90 text-lg">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperProfile;
