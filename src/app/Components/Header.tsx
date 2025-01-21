'use client';
import { List, X } from 'lucide-react';
import { useState } from 'react';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: element,
      });
      // Close modal after navigation on mobile
      if (window.innerWidth < 768) {
        closeModal();
      }
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    // Small delay to allow render before transition
    setTimeout(() => {
      setIsModalVisible(true);
    }, 10);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    // Wait for transition to complete before removing from DOM
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  const NavLinks = () => (
    <>
      <li>
        <button
          onClick={() => scrollToSection('main')}
          className="text-purple-500 hover:text-purple-600 transform hover:scale-110 transition-transform duration-300"
        >
          HOME
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection('about')}
          className="text-purple-500 hover:text-purple-600 transform hover:scale-110 transition-transform duration-300"
        >
          ABOUT ME
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-purple-500 hover:text-purple-600 transform hover:scale-110 transition-transform duration-300"
        >
          PORTFOLIO
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection('journey')}
          className="text-purple-500 hover:text-purple-600 transform hover:scale-110 transition-transform duration-300"
        >
          JOURNEY
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection('certificates')}
          className="text-purple-500 hover:text-purple-600 transform hover:scale-110 transition-transform duration-300"
        >
          CERTIFICATES
        </button>
      </li>
     
      <li>
        <button
          onClick={() => scrollToSection('contact-me')}
          className="text-purple-500 hover:text-purple-600 transform hover:scale-110 transition-transform duration-300"
        >
          CONTACT ME
        </button>
      </li>
    </>
  );

  return (
    <>
      <nav className="flex bg-black flex-col lg:flex-row items-center justify-between py-5 px-8 md:pt-8">
        {/* Logo and Menu Icon */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          <h1 className="text-white italic text-2xl">Sanjeev</h1>
          <List
            className={`${isModalOpen ? "hidden" : "visible"} h-10 w-10 text-white cursor-pointer lg:hidden`}
            onClick={openModal}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex font-josefinSlab flex-col mx-auto md:flex-row items-center gap-8 my-8 sm:text-base md:my-0 md:text-lg lg:text-xl">
          <NavLinks />
        </ul>

        {/* Connect Button */}
        <h2 className="text-2xl cursor-pointer hidden lg:block">
          <button
            onClick={() => scrollToSection('connect')}
            className="text-white italic mr-4 hover:text-gray-300"
          >
            Connect
          </button>
        </h2>
      </nav>

      {/* Mobile Modal Navigation */}
      {isModalOpen && (
        <div 
          className={`
            fixed inset-0 z-50 bg-black/80  
            transition-all duration-500 ease-in-out
            ${isModalVisible ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={closeModal}
        >
          <div 
            className={` border-l-2 border-white/10
              flex flex-col items-start justify-center h-full bg-black/20
              w-[75%] ml-auto transform transition-transform duration-500 ease-in-out
              ${isModalVisible ? 'translate-x-0' : 'translate-x-full'}
              
            `}
            onClick={(event) => event.stopPropagation()}
          >
            <X 
              className="absolute top-5 right-7 h-10 w-10 text-white cursor-pointer"
              onClick={closeModal}
            />
            <ul className="flex flex-col ml-12 gap-14 text-2xl ">
              <NavLinks />
              <li>
                <button
                  onClick={() => scrollToSection('connect')}
                  className="text-purple-500 hover:text-purple-600"
                >
                  CONNECT
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;