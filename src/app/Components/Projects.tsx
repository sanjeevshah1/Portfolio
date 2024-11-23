'use client';
import React, { useState, useEffect } from "react";
import { ExternalLink, Github} from 'lucide-react';
import useFetch from "../useFetch";
import { LanguagesType, ProjectType } from "../types";
//  import {BentoGrid} from "./ui/bento"; 

import { SiJavascript, SiPython, SiCplusplus, SiTypescript, SiRuby, SiGo, SiRust, SiSwift, SiKotlin, SiPhp, SiHtml5, SiCss3, SiShell, SiDocker } from "react-icons/si";
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
const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative bg-gray-900 text-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.screenshot_url} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
        <h3 className="text-2xl font-bold text-gray-100 mb-3 capitalize">
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



const NetlifySites = () => {
  const [sites, loading, error] = useFetch('https://api.netlify.com/api/v1/sites');
  const [projects, setProjects] = useState<ProjectType[]>([]);

  async function fetchGit(repoPath: string): Promise<LanguagesType> {
    if (!repoPath) {
      console.log("Missing repo path for the site");
      return {}; // Return empty object if no repoPath
    }
    const fetchUrl = `https://api.github.com/repos/${repoPath}/languages`;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    if (sites.length > 0) {
      const fetchLanguages = async () => {
        const updatedProjects = await Promise.all(
          sites.map(async (site) => {
            const languages = await fetchGit(site.build_settings.repo_path);
            return {
              name: site.name,
              url: site.url.replace(/^http:\/\//, 'https://'),
              screenshot_url: site.screenshot_url,
              repoUrl: site.build_settings.repo_url,
              languages,
            };
          })
        );
        setProjects(updatedProjects);
      };
      fetchLanguages();
    }
  }, [sites]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    // < className="max-w-4xl mx-auto">
    <section 
    id="projects" 
    className="py-16 px-4 sm:px-10 md:px-20 lg:px-32 inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,rgba(68,68,68,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(68,68,68,0.5)_1px,transparent_1px)] bg-[size:40px_40px] "
  >
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold tracking-wide text-white">
        My Projects
      </h2>
      <p className="text-lg text-gray-100 mt-4 max-w-2xl mx-auto">
        A showcase of projects that demonstrate my skills and creativity.
      </p>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
  
  );
};

export default NetlifySites;