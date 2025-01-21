'use client';
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Award, CheckCircle, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DotLottieReact = dynamic(() =>
  import('@lottiefiles/dotlottie-react').then((component) => component.DotLottieReact),
  { ssr: false }
);

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  image: string;
}

const CertificatesPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);
  const [shuffledCertificates, setShuffledCertificates] = useState<Certificate[]>([]);

  // Your existing certificates array and useEffects remain the same
   const certificates: Certificate[] = [
    {
      title: "React Basics",
      issuer: "Meta",
      date: "April 24, 2024",
      description: "An online non-credit course authorized by Meta and offered through Coursera.",
      skills: ["React", "Application Development", "Web Application", "Front-End Web Development"],
      image: "/Certificates/coursera_react.jpg"
    },
    {
      title: "Hands-on Introduction to Linux Commands and Shell Scripting",
      issuer: "IBM",
      date: "Jan 18, 2024",
      description: "An online non-credit course authorized by IBM and offered through Coursera.",
      skills: ["Linux", "Linux Commands", "Shell Scripting", "Bash (Unix Shell)", "Extract Transform and Load (ETL)"],
      image: "/Certificates/coursera_linux.jpg"
    },
    {
      title: "Programming with JavaScript",
      issuer: "Meta",
      date: "January 17, 2024",
      description: "An online non-credit course authorized by Meta and offered through Coursera.",
      skills: ["JavaScript", "Test-Driven Development", "Object-Oriented Programming (OOP)"],
      image: "/Certificates/coursera_javascript.jpg"
    },
    {
      title: "Advanced React",
      issuer: "Scrimba",
      date: "September 11, 2024",
      description: "A comprehensive course on advanced React patterns and techniques.",
      skills: ["React", "React Router"],
      image: "/Certificates/scrimba_advanced_react.jpg"
    },
    {
      title: "Learn TypeScript",
      issuer: "Scrimba",
      date: "September 11, 2024",
      description: "A course covering TypeScript for JavaScript developers.",
      skills: ["TypeScript"],
      image: "/Certificates/scrimba_learn_typescript.jpg"
    },
    {
      title: "Learn Tailwind CSS",
      issuer: "Scrimba",
      date: "September 11, 2024",
      description: "A course focused on building modern UIs with Tailwind CSS.",
      skills: ["Tailwind CSS"],
      image: "/Certificates/scrimba_tailwind_css.jpg"
    },
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB",
      date: "January 05, 2025",
      description: "A course focused on bascis of MongoDB",
      skills: ["CRUD operations","Aggregation", "Indexes","Atlas Search",],
      image: "/Certificates/learnMongo_Intro.jpg"
    }
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const shuffled = [...certificates];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    setShuffledCertificates(shuffled);
  }, []);

  const openCertificateModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  const pageVariants = {
    initial: { opacity: 0, y: -20 },
    in: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    out: { opacity: 0, y: 20, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    in: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      id='certificates'
      className="min-h-screen bg-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-36 mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-purple-500 font-josefinSlab hover:text-purple-600 transform hover:scale-110 transition-transform duration-300"
            >
              Certifications!
            </motion.h1>
            <div ref={observerRef} className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
              {isVisible && (
                <DotLottieReact
                  src="https://lottie.host/a76a7afb-06f6-4db8-89aa-665c91652e0f/9JsXLoWVSq.lottie"
                  loop={false}
                  autoplay
                  speed={0.9}
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Continuous learning and professional development
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shuffledCertificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              animate="in"
              whileHover="hover"
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="relative aspect-video">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  onClick={() => openCertificateModal(cert)}
                  className="absolute top-2 right-2 bg-gray-900/70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-500/70"
                >
                  <Maximize2 className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                <div className='font-josefinSlab'>
                  <h2 className="text-2xl font-josefinSlab text-purple-200 mb-2 line-clamp-1">{cert.title}</h2>
                  <p className=" text-md mb-2 font-josefinSlab text-purple-200">{cert.issuer} • {cert.date}</p>
                  <p className="text-sm line-clamp-2 text-purple-100">{cert.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 ">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-200 text-xs font-medium rounded-full flex items-center hover:bg-purple-500/30 transition-colors"
                    >
                      <CheckCircle className="w-3 h-3 mr-1" strokeWidth={2} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedCertificate && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={closeCertificateModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={closeCertificateModal}
                  className="absolute top-4 right-4 bg-gray-900/70 rounded-full p-2 hover:bg-purple-500/70 transition-colors"
                >
                  <Award className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCertificate.title}</h3>
                <p className="text-gray-400 mb-4">Issued by {selectedCertificate.issuer} • {selectedCertificate.date}</p>
                <p className="text-gray-300 mb-6">{selectedCertificate.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-200 text-sm font-medium rounded-full flex items-center hover:bg-purple-500/30 transition-colors"
                    >
                      <CheckCircle className="w-3 h-3 mr-1" strokeWidth={2} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CertificatesPage;