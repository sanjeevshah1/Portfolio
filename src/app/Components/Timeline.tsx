"use client";
import React from "react";
import { TimelineComponent } from "./ui/timeline";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiDocker,
  SiRedis,
  SiSocketdotio,
  SiPostman,
  SiVitest,
  SiGit,
  SiExpress,
  SiC,
  SiCplusplus,
} from "react-icons/si";

type TimelineItem = {
  title: string;
  description: string;
  skills?: { name: string; icon: JSX.Element }[];
  images?: { src: string; alt: string }[];
};

export function Timeline() {
  const iconColors: Record<string, string> = {
    HTML: "#E34F26",
    CSS: "#1572B6",
    JavaScript: "#F7DF1E",
    React: "#61DAFB",
    TypeScript: "#3178C6",
    "Node.js": "#339933",
    MySQL: "#4479A1",
    "Next.js": "#FFFFFF",
    "Tailwind CSS": "#06B6D4",
    "Framer Motion": "#0055FF",
    Docker: "#2496ED",
    Redis: "#DC382D",
    "Socket.io": "#FFFFFF",
    Postman: "#FF6C37",
    Vitest: "#6E9F18",
    Git: "#F05032",
    C: "#A8B9CC",
    "C++": "#00599C",
    Zustand: "#61DAFB",
    Express: "#FFFFFF",
  };

  const getAnimation = (name: string) => {
    switch (name) {
      case "React":
        return {
          animate: { rotate: [0, 360] },
          transition: { repeat: Infinity, duration: 6, ease: "linear" },
        };
      case "JavaScript":
        return {
          animate: { y: [0, -6, 0, 3, 0] },
          transition: { repeat: Infinity, duration: 2.2 },
        };
      case "Node.js":
        return {
          animate: { scale: [1, 1.08, 1] },
          transition: { repeat: Infinity, duration: 2.5 },
        };
      case "Tailwind CSS":
        return {
          animate: { rotate: [-5, 5, -5, 0] },
          transition: { repeat: Infinity, duration: 3 },
        };
      default:
        return {
          animate: { y: [0, -4, 0, 4, 0] },
          transition: { repeat: Infinity, duration: 3 },
        };
    }
  };

  const data: TimelineItem[] = [
    {
      title: "2021 - Present",
      description: "Studying Electronics, Communication and Information Engineering",
      images: [
        { src: "/ForTimeline/communication.jpg", alt: "Communication systems" },
        { src: "/ForTimeline/electronics.jpg", alt: "Electronics components" },
      ],
    },
    {
      title: "Early 2022",
      description: "Learned C programming.",
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
      ],
    },
    {
      title: "2023",
      description: "Started Learning Web Development",
      skills: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      images: [
        { src: "/ForTimeline/programming.jpg", alt: "Programming concepts" },
        { src: "/ForTimeline/programming2.jpg", alt: "Programming at night" },
      ],
    },
    {
      title: "2024",
      description: "Learned more about Web Development",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "2025",
      description: "Mastering the Stack",
      skills: [
        { name: "Socket.io", icon: <SiSocketdotio /> },
        { name: "Zustand", icon: <SiReact /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Vitest", icon: <SiVitest /> },
      ],
    },
  ];

  const renderContent = (item: TimelineItem) => (
    <div>
      <p className="text-neutral-200 text-base md:text-lg font-medium mb-6">
        {item.description}
      </p>

      {item.skills && (
        <div className="mb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {item.skills.map((skill) => {
            const { animate, transition } = getAnimation(skill.name);
            const color = iconColors[skill.name] || "#FFFFFF";
            return (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center gap-2 text-neutral-300 text-lg md:text-xl font-medium p-3 rounded-lg transition-transform hover:scale-110"
                whileHover={{ scale: 1.15 }}
              >
                <motion.div className="text-3xl md:text-4xl" animate={animate} transition={transition}>
                  {React.cloneElement(skill.icon, {
                    color,
                    size: 42,
                    style: { filter: "drop-shadow(0 0 8px rgba(255,255,255,0.15))" },
                  })}
                </motion.div>
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );

  const timelineData = data.map((item) => ({
    title: item.title,
    content: renderContent(item),
  }));

  return (
    <div className="w-full overflow-y-hidden" id="journey">
      <TimelineComponent data={timelineData} />
    </div>
  );
}
