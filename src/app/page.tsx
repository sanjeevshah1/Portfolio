import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { Timeline } from "./Components/Timeline";
import CertificatesPage from "./Components/Certificates";
import Contact from "./Components/Contact";
import Social from "./Components/Social";
import Projects from "./Components/Projects";
const Portfolio = () => {
  return (
    // <div className="min-h-screen max-w-screen overflow-hidden  text-white font-cursive bg-gradient-to-r from-[#78776D] via-[#958F7F] to-[#C6AE94]">
    <div className="min-h-screen max-w-screen overflow-hidden  text-white font-cursive bg-black">
      {/* Navbar */}
      <Header />

      {/* Main Section */}
      <Home />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      <Timeline />

      {/* Certificates Section */}
      <CertificatesPage />

      {/* Contact Section */}
      <Contact />

      {/* Social Links */}
      <Social />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
