'use client';
import React, { useState, useEffect } from 'react';
import { Award, CheckCircle, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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

  const certificates: Certificate[] = [
    {
      title: "React Basics",
      issuer: "Meta",
      date: "April 24, 2024",
      description: "An online non-credit course authorized by Meta and offered through Coursera.",
      skills: ["React", "Application Development", "Web Application", "Front-End Web Development"],
      image: "/certificates/coursera_react.jpg"
    },
    {
      title: "Hands-on Introduction to Linux Commands and Shell Scripting",
      issuer: "IBM",
      date: "Jan 18, 2024",
      description: "An online non-credit course authorized by IBM and offered through Coursera.",
      skills: ["Linux", "Linux Commands", "Shell Scripting", "Bash (Unix Shell)", "Extract Transform and Load (ETL)"],
      image: "/certificates/coursera_linux.jpg"
    },
    {
      title: "Programming with JavaScript",
      issuer: "Meta",
      date: "January 17, 2024",
      description: "An online non-credit course authorized by Meta and offered through Coursera.",
      skills: ["JavaScript", "Test-Driven Development", "Object-Oriented Programming (OOP)"],
      image: "/certificates/coursera_javascript.jpg"
    },
    {
      title: "Advanced React",
      issuer: "Scrimba",
      date: "September 11, 2024",
      description: "A comprehensive course on advanced React patterns and techniques.",
      skills: ["React", "React Router"],
      image: "/certificates/scrimba_advanced_react.jpg"
    },
    {
      title: "Learn TypeScript",
      issuer: "Scrimba",
      date: "September 11, 2024",
      description: "A course covering TypeScript for JavaScript developers.",
      skills: ["TypeScript"],
      image: "/certificates/scrimba_learn_typescript.jpg"
    },
    {
      title: "Learn Tailwind CSS",
      issuer: "Scrimba",
      date: "September 11, 2024",
      description: "A course focused on building modern UIs with Tailwind CSS.",
      skills: ["Tailwind CSS"],
      image: "/certificates/scrimba_tailwind_css.jpg"
    }
  ];

  const [shuffledCertificates, setShuffledCertificates] = useState<Certificate[]>([]);

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
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    out: { opacity: 0, x: 100, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    initial: { opacity: 0, x: -50, scale: 0.9 },
    in: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };


  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      id='certificates'
      className="min-h-screen bg-gray-900 text-gray-200  py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-white sm:text-5xl"
          >
            Professional Certifications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl text-gray-400"
          >
            Continuous learning and professional development
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          {shuffledCertificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-800 shadow-lg rounded-xl overflow-hidden transition-all duration-300 group flex"
            >
              <div className="w-1/3 relative">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                <button
                  onClick={() => openCertificateModal(cert)}
                  className="absolute top-2 right-2 bg-gray-700/70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Maximize2 className="w-5 h-5 text-gray-300" />
                </button>
              </div>
              <div className="w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{cert.title}</h2>
                  <p className="text-gray-400 mb-2">{cert.issuer} • {cert.date}</p>
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-200 text-xs font-medium rounded-full flex items-center"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={closeCertificateModal}
          >
            <div
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  width={800}
                  height={400}
                  className="w-full object-cover rounded-t-xl"
                />
                <button
                  onClick={closeCertificateModal}
                  className="absolute top-4 right-4 bg-gray-700/70 rounded-full p-2 hover:bg-gray-600 transition-all"
                >
                  <Award className="w-5 h-5 text-gray-300" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCertificate.title}</h3>
                <p className="text-gray-400 mb-2">Issued by {selectedCertificate.issuer} • {selectedCertificate.date}</p>
                <p className="text-gray-300 mb-4">{selectedCertificate.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-200 text-xs font-medium rounded-full flex items-center"
                    >
                      <CheckCircle className="w-3 h-3 mr-1" strokeWidth={2} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CertificatesPage;
