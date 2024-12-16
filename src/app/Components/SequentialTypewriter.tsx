'use client';  
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SequentialTypewriter = ({ texts, className = '' }: { texts: string[]; className?: string }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const currentText = texts[currentTextIndex];
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < currentText.length) {
          setDisplayText(prev => prev + currentText.charAt(i));
          i++;
        } else {
          clearInterval(typingEffect);
          // Move to next text after a short delay
          setTimeout(() => {
            setCurrentTextIndex(prev => prev + 1);
            setDisplayText('');
          }, 1000); // 1 second pause between texts
        }
      }, 50); // Typing speed

      return () => clearInterval(typingEffect);
    }
  }, [currentTextIndex, texts]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${className} border-r-2 border-violet-500 animate-blink`}
    >
      {displayText}
    </motion.p>
  );
};

const Home = () => {
  const typewriterTexts = [
    "Hi! It's me,",
    "Sanjeev Shah",
    "Web Developer & Problem Solver",
    "Engineer to be..."
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-7 md:p-8 max-w-fit shadow-lg text-center md:text-left md:pr-20">
      <SequentialTypewriter 
        texts={typewriterTexts} 
        className="text-base text-violet-500 sm:text-lg first:text-base first:text-violet-500 
                    [&:nth-child(2)]:text-3xl [&:nth-child(2)]:text-white [&:nth-child(2)]:font-bold 
                    [&:nth-child(3)]:text-lg [&:nth-child(3)]:text-violet-500
                    [&:nth-child(4)]:text-sm [&:nth-child(4)]:text-violet-500"
      />
    </div>
  );
};

export default SequentialTypewriter;