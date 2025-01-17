'use client';
import React, { useEffect, useState, useRef } from 'react';

const DeveloperProfile = () => {
  const items = [
    {
      icon: "👀",
      title: "Interests",
      text: "I'm interested in web development, data structures, and algorithms.",
    },
    {
      icon: "🌱",
      title: "Learning",
      text: "I'm currently learning advanced Typescript, React.js, and backend development with Node.js.",
    },
    {
      icon: "💞️",
      title: "Collaboration",
      text: "I'm looking to collaborate on open-source projects and innovative web applications.",
    },
    {
      icon: "📚",
      title: "Education",
      text: "I am currently studying Electronics, Communication and Information Engineering.",
    },
    {
      icon: "⚡",
      title: "Achievement",
      text: "I enjoy solving LeetCode problems and have solved over 150 challenges!",
    },
    {
      icon: "📈",
      title: "Growth",
      text: "I constantly challenge myself by learning new technologies and improving my problem-solving skills.",
    }    
  ];

  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-black relative overflow-hidden p-10 pb-20"
    >
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-[pulse_4s_ease-in-out_infinite_1s]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-20 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold text-purple-500 hover:text-purple-600 mb-6 transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8   ">
          {items.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`group relative h-full rounded-2xl bg-gradient-to-br 
                  ${
                    activeIndex === index
                      ? "from-purple-900 to-pink-900 scale-105"
                      : "from-gray-900 to-gray-800"
                  } 
                  p-1 transition-all duration-500 bg-opacity-70`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 
                    transition-all duration-500 
                    ${
                      activeIndex === index
                        ? "opacity-100 shadow-lg shadow-purple-500/20"
                        : "opacity-0"
                    }`}
                />

                <div
                  className="relative h-full rounded-xl bg-gray-900 bg-opacity-50 p-8 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className={`text-4xl transform transition-all duration-500 
                      ${activeIndex === index ? "scale-125 rotate-12" : ""}`}
                    >
                      {item.icon}
                    </span>
                    <h3
                      className={`text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 
                      text-transparent bg-clip-text transform transition-all duration-500
                      ${activeIndex === index ? "translate-x-2" : ""}`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    className={`text-gray-300 leading-relaxed text-lg transition-colors duration-500
                    ${activeIndex === index ? "text-white" : ""}`}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default DeveloperProfile;
