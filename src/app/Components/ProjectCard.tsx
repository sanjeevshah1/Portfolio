'use client';
import { useState } from 'react'
import Image from 'next/image';
import { ProjectType } from '../types';
import { ExternalLink, Github} from 'lucide-react';
import { SiJavascript, SiPython, SiCplusplus, SiTypescript, SiRuby, SiGo, SiRust, SiSwift, SiKotlin, SiPhp, SiHtml5, SiCss3, SiShell, SiDocker } from "react-icons/si";
const ProjectCard = ({ project }: { project: ProjectType }) => {
    const [isHovered, setIsHovered] = useState(false);
    const languageIcons = {
        'JavaScript': <SiJavascript />,
        'TypeScript': <SiTypescript />,
        'Python': <SiPython />,
        'C++': <SiCplusplus />,
        'Ruby': <SiRuby />,
        'Go': <SiGo />,
        'Rust': <SiRust />,
        'Swift': <SiSwift />,
        'Kotlin': <SiKotlin />,
        'PHP': <SiPhp />,
        'HTML': <SiHtml5 />,
        'CSS': <SiCss3 />,
        'Shell': <SiShell />,
        'Dockerfile': <SiDocker />
      };
      
    return (
      <div 
        className="shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative bg-gray-900 text-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={project.screenshot_url} 
            alt={project.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            width={500}
            height={300}
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300">
              <div className="flex space-x-4">
                {project.repoUrl && (
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <Github className="text-gray-100" size={24} />
                  </a>
                )}
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <ExternalLink className="text-gray-100" size={24} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
  
        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold font-josefinSlab text-gray-100 mb-3 capitalize">
            {project.name}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.languages && Object.keys(project.languages).length > 0 ? (
              Object.keys(project.languages).map((lang) => (
                <span 
                  key={lang} 
                  className="flex items-center bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded-full"
                >
                  <span className="mr-1">
                    {languageIcons[lang as keyof typeof languageIcons] || '💻'}
                  </span>
                  {lang}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm">No languages specified</span>
            )}
          </div>
  
          <div className="space-y-2">
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Site URL:</span> {project.url}
            </p>
            <p className="text-gray-300 text-sm flex items-center">
              <span className="font-semibold mr-2">Repository:</span>
              {project.repoUrl ? (
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline truncate max-w-[200px]"
                >
                  {project.repoUrl}
                </a>
              ) : (
                "No repository URL available"
              )}
            </p>
          </div>
        </div>
      </div>
    );
  };
  

export default ProjectCard