'use client';
import React,{useState, useEffect, useRef} from "react";
import dynamic from "next/dynamic";
import SocialCard from "./SocialCard";
const DotLottieReact = dynamic(() => import( '@lottiefiles/dotlottie-react').then((component) => component.DotLottieReact), { ssr: false } );


const SocialLinks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it's visible
        }
      },
      { threshold: 0.02 } // Trigger when 2% of the component is visible
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div 
      id="connect" 
      className="relative min-h-screen w-full flex items-center justify-center 
                 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black 
                 py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] 
                     bg-purple-900/20 rounded-full mix-blend-overlay 
                     blur-3xl animate-pulse"
        />
        <div 
          className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] 
                     bg-pink-900/20 rounded-full mix-blend-overlay 
                     blur-3xl animate-pulse delay-700"
        />
      </div>

      {/* Main content container */}
      <div 
        className="relative w-full max-w-7xl mx-auto bg-gray-800/50 
                   rounded-3xl backdrop-blur-lg border border-gray-700/50 
                   shadow-2xl overflow-hidden"
      >
        {/* Hero section with animation */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 
                     items-center justify-center"
        >
          {/* Lottie Animation */}
        <div ref={observerRef} className="hidden md:flex w-screen  md:w-auto justify-center items-center">
           { isVisible && <DotLottieReact 
              src="https://lottie.host/154357bd-5c36-4a36-8d8e-855195cba2a5/jYPO9xm53P.lottie"
              loop
              autoplay
              className="w-full max-w-[500px] h-auto"
            />}
        </div>
          
          {/* <div ref={observerRef} className="hidden md:flex w-screen  md:w-auto justify-center items-center">
            <DotLottieReact 
              src="https://lottie.host/154357bd-5c36-4a36-8d8e-855195cba2a5/jYPO9xm53P.lottie"
              loop
              autoplay
              className="w-full max-w-[500px] h-auto"
            />
          </div> */}

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold 
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-purple-500 to-pink-500 
                         hover:from-purple-600 hover:to-pink-600 
                         transition-all duration-300"
            >
              Let&apos;s Connect!
            </h1>
            <p 
              className="text-xl  text-gray-300 
                         max-w-2xl mx-auto lg:mx-0 
                         leading-relaxed"
            >
              Join me on social media to stay updated with my latest projects, 
              thoughts, and adventures. Let&apos;s build connections and share experiences!
            </p>
          </div>

          {/* Lottie Animation for mobile*/}
          <div className="flex w-screen md:hidden md:w-auto justify-center items-center">
            { isVisible && <DotLottieReact 
              src="https://lottie.host/154357bd-5c36-4a36-8d8e-855195cba2a5/jYPO9xm53P.lottie"
              loop
              autoplay
              className="w-full max-w-[500px] h-auto"
              />
            }
          </div>
          
          

        </div>

        {/* Social links grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 
                     p-8 md:p-12 pt-0"
        >
          {/* Social Cards with Dynamic Icons */}
          <SocialCard 
            name="Facebook"
            url="https://www.facebook.com/Sanjeev073.sah/"
            description="Connect with me for daily updates and behind-the-scenes content"
            containerDesign="group relative p-6 bg-gray-800/60 rounded-2xl backdrop-blur-sm 
                             border border-gray-700/50 hover:border-blue-500/50 
                             transition-all duration-300 hover:-translate-y-2 
                             hover:shadow-2xl hover:bg-gray-800/80"
            backgroundGradient="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 
                                rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            linkDesign="inline-flex items-center px-6 py-3 bg-blue-600 
                        hover:bg-blue-700 text-white rounded-lg font-medium 
                        transition-colors gap-2 group-hover:scale-105"
          />

          <SocialCard 
            name="Instagram"
            url="https://www.instagram.com/sanjeev_shah__/"
            description="Follow for photos, stories, and visual inspirations"
            containerDesign="group relative p-6 bg-gray-800/60 rounded-2xl backdrop-blur-sm 
                             border border-gray-700/50 hover:border-pink-500/50 
                             transition-all duration-300 hover:-translate-y-2 
                             hover:shadow-2xl hover:bg-gray-800/80"
            backgroundGradient="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 
                                rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            linkDesign="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 
                        to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white 
                        rounded-lg font-medium transition-colors gap-2 group-hover:scale-105"
          />

          <SocialCard 
            name="LinkedIn"
            url="https://np.linkedin.com/in/sanjeev-sah-b354b9210"
            description="Connect professionally and explore my career journey"
            containerDesign="group relative p-6 bg-gray-800/60 rounded-2xl backdrop-blur-sm 
                             border border-gray-700/50 hover:border-sky-500/50 
                             transition-all duration-300 hover:-translate-y-2 
                             hover:shadow-2xl hover:bg-gray-800/80"
            backgroundGradient="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-600/10 
                                rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            linkDesign="inline-flex items-center px-6 py-3 bg-sky-600 
                        hover:bg-sky-700 text-white rounded-lg font-medium 
                        transition-colors gap-2 group-hover:scale-105"
          />

          <SocialCard 
            name="GitHub"
            url="https://github.com/sanjeevshah1"
            description="Explore my open source projects and contributions"
            containerDesign="group relative p-6 bg-gray-800/60 rounded-2xl backdrop-blur-sm 
                             border border-gray-700/50 hover:border-gray-500/50 
                             transition-all duration-300 hover:-translate-y-2 
                             hover:shadow-2xl hover:bg-gray-800/80"
            backgroundGradient="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-white/10 
                                rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            linkDesign="inline-flex items-center px-6 py-3 bg-gray-800 
                        hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 
                        text-white rounded-lg font-medium transition-colors 
                        gap-2 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;