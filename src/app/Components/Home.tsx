'use client';
import {Vortex} from './ui/vortex';
import TypewriterText from './Typewriter';
import { FacebookIcon, GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';

const Home = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/resume.pdf"; 
    link.download = 'sanjeev_resume.pdf'; 
    link.click();
  };
  const SocialLinks = () => {
    return (
      <div className="md:flex md:flex-wrap gap-3 items-center hidden md:pt-[115%] ">
        <a href="https://www.facebook.com/Sanjeev073.sah/" target="_blank" rel="noopener noreferrer" className="p-3 border border-purple-600 rounded-full">
          <FacebookIcon className="w-4 h-4 md:w-6 md:h-6 text-blue-500 hover:scale-[1.2] transition-transform duration-50" />
        </a>
        <a href="https://github.com/sanjeevshah1" target="_blank" rel="noopener noreferrer" className="p-3 border border-purple-600 rounded-full">
          <GithubIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:scale-[1.2] transition-transform duration-50" />
        </a>
        <a href="https://np.linkedin.com/in/sanjeev-sah-b354b9210" target="_blank" rel="noopener noreferrer" className="p-3 border border-purple-600 rounded-full">
          <LinkedinIcon className="w-4 h-4 md:w-6 md:h-6 text-blue-600 hover:scale-[1.2] transition-transform duration-50" />
        </a>
        <a href="https://www.instagram.com/sanjeev_shah__/" target="_blank" rel="noopener noreferrer" className="p-3 border border-purple-600 rounded-full">
          <InstagramIcon className="w-4 h-4 md:w-6 md:h-6 text-pink-400 hover:scale-[1.2] transition-transform duration-50" />
        </a>
        <button onClick={handleDownload} className="ml-0 px-0 p-2 md:px-4 md:py-3 flex items-center border md:relative md:-right-6 text-sm md:text-base text-white/80 hover:text-white/90 border-purple-600 bg-purple-600/80 rounded-full">
          Download Resume
        </button>
      </div>
    )
  }
  SocialLinks.displayName = "SocialLinks";

  return (
    <>
      <main id="main" className="container  min-height-screen mx-auto px-4 pb-0 pt-4 sm:px-6 md:px-8 md:py-0 md:h-[calc(100vh-6rem)] mt-12 md:mt-6 lg:mt-6">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-6 items-center max-w-5xl mx-auto">
            {/* Image Container */}
            <div className="md:col-start-2 md:row-start-1 flex justify-center md:justify-end">
              <div 
                className="w-[250px] h-[250px] 
                           sm:w-[280px] sm:h-[280px] 
                           md:w-[350px] md:h-[350px] 
                           lg:w-[420px] lg:h-[420px] 
                           rounded-full shadow-md 
                           bg-[url('/sanjeev.jpg')] bg-cover bg-center 
                           transition-all duration-300"
              >
                <SocialLinks />
              </div>
            </div>
            {/* Text Content */}
            <div className="md:col-start-1 md:row-start-1 mt-1 flex flex-col justify-center md:justify-start  lg:mt-0">
              {/* Mobile-only CV button */}
         
              <button onClick={handleDownload} className="md:hidden mt-0 px-4 p-2 text-sm text-white/80 hover:text-white/90 border border-purple-600 bg-purple-600/80 rounded-full mb-8 max-w-fit mx-auto">
                Download Resume
              </button>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-7 md:p-8 max-w-fit shadow-lg text-center md:text-left md:pr-20">
                <TypewriterText
                  text="Hi! It&apos;s me,"
                  className="text-base text-violet-500 sm:text-lg"
                  delay={4.9}
                />
                <TypewriterText
                  text="Sanjeev Shah"
                  className="text-3xl text-white font-bold italic sm:text-3xl md:text-4xl tracking-wider my-2 sm:my-3"
                  delay={5.9}
                />
                <TypewriterText
                  text="Web Developer & Problem Solver"
                  className="text-lg text-violet-500"
                  delay={6.9}
                />
                <TypewriterText
                  text="Engineer to be"
                  className="text-sm text-violet-500 sm:text-base md:text-lg mt-2"
                  delay={8.6}
                />
              </div>
            </div>
            {/* Image below Text */}
            <div className="md:col-span-1 mt-[-1rem] row-span-2 flex justify-center md:mt-[-10rem] md:mr-[6rem]">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=sanjeevshah1&layout=compact&theme=tokyonight&langs_count=6"
                alt="Top programming languages"
                className="rounded-lg w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[370px] lg:h-[370px]"
              />
            </div>
          </div>
        </Vortex>
      </main>
    </>
  );
};

export default Home;