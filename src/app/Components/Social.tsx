import React from "react";
// import { LinkPreview } from "./ui/link-preview";
// import { ExternalLink } from "lucide-react";
import SocialCard from "./SocialCard";

const SocialLinks = () => {
  return (
    // <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
    <div id="connect" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-800 to-black">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-900/30  rounded-full mix-blend-multiply dark:mix-blend-soft-light blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light blur-3xl animate-pulse delay-700" />
      </div>

      {/* Main content container */}
      <div className="relative max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Hero section */}
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-500 hover:text-purple-600 font-mono transform hover:scale-110 transition-transform duration-300">
            Let`&apos;`s Connect!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 hover:text-gray-100  max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
            Join me on social media to stay updated with my latest projects, thoughts, and adventures
          </p>
        </div>

        {/* Social links grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Facebook Card */}
          <SocialCard 
            name={"Facebook"}
            url={"https://www.facebook.com/Sanjeev073.sah/"} 
            description="Connect with me for daily updates and behind-the-scenes content" 
            containerDesign="group relative p-6  bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            backgroundGradient="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            linkDesign="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors gap-2" 
          />

          {/* Instagram Card */}
          <SocialCard 
            name={"Instagram"}
            url={"https://instagram.com/your-profile"} 
            description="Follow for photos, stories, and visual inspirations" 
            containerDesign="group relative p-6 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            backgroundGradient="absolute inset-0 bg-gradient-to-br  from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            linkDesign="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-medium transition-colors gap-2"
          />

          {/* LinkedIn Card */}
          <SocialCard 
            name={"Linkedin"}
            url={"https://linkedin.com/your-username"} 
            description="Connect professionally and explore my career journey" 
            containerDesign="group relative p-6  bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" 
            backgroundGradient="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            linkDesign="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-colors gap-2" 
          />
          {/* GitHub Card */}
          
          <SocialCard 
            name={"Github"}
            url={"https://github.com/your-username"} 
            description="Explore my open source projects and contributions" 
            containerDesign="group relative p-6 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" 
            backgroundGradient="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            linkDesign="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-colors gap-2" 
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;