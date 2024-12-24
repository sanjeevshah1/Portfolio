'use client';

import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    const timer = setTimeout(() => handleClose(), 4300);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsOpen(false), 1000);
  };

  if (!isOpen) return null;
 
      <DotLottieReact
        src="https://lottie.host/89d0bd6c-53b6-4f5d-a1db-cf1624f20159/dflgTudsFK.lottie"
        loop
        autoplay
      />  
  return (
    <div 
      className={`fixed inset-0 w-screen h-screen flex items-center justify-center z-50 backdrop-blur-sm bg-fuchsia-200/40 overflow-hidden
        ${isClosing ? 'animate-collapse' : 'animate-expand'}`}
      style={{
        animation: isClosing ? 'collapse 1s ease-in-out forwards' : 'expand 0.5s ease-out'
      }}
    >
      <style jsx global>{`
        @keyframes collapse {
          0% {
            clip-path: inset(0 0 0 0);
          }
          100% {
            clip-path: inset(0 50% 0 50%);
          }
        }
        
        @keyframes expand {
          0% {
            clip-path: inset(0 50% 0 50%);
          }
          100% {
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
      
      <DotLottieReact
        src="https://lottie.host/805e61a7-017e-4ecd-a71a-f32c3e0ff279/gHCCjtr8UV.lottie"
        loop={false}
        autoplay
        className="w-[70%] md:w-[50%] text-white"
      />
    </div>
  );
};

export default WelcomeModal;