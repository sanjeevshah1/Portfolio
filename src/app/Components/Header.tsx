'use client';
import { List } from 'lucide-react';
import { useState } from 'react';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: element,
      });
    }
  };

  return (
    <nav className="flex bg-black flex-col md:flex-row items-center justify-between py-5 px-8 md:pt-8 ">
      {/* Logo and Menu Icon */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-white italic text-2xl">Sanjeev</h1>
        <List
          className="h-10 w-10 text-white cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center gap-8 my-8 md:my-0 text-xl`}
      >
        <li>
          <button
            onClick={() => scrollToSection('main')}
            // className="text-white hover:text-gray-300"
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
            PROJECTS
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
      </ul>

      {/* Links Button */}
      <h2 className="text-2xl cursor-pointer hidden md:block">
        <button
          onClick={() => scrollToSection('connect')}
          className="text-white italic mr-4 hover:text-gray-300"
        >
          Connect
        </button>
      </h2>
    </nav>
  );
};

export default Header;
