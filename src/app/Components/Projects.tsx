import { use, Suspense } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectType, SiteType, LanguagesType } from "../types";

async function fetchGit(repoPath: string): Promise<LanguagesType> {
  if (!repoPath) return {};
  const response = await fetch(`https://api.github.com/repos/${repoPath}/languages`);
  return response.json();
}

async function fetchSites(): Promise<ProjectType[]> {
  const NETLIFY_ACCESS_TOKEN = process.env.NEXT_PUBLIC_NETLIFY_ACCESS_TOKEN;

  const netlifyResponse =  await fetch("https://api.netlify.com/api/v1/sites", {
          headers: {
            Authorization: `Bearer ${NETLIFY_ACCESS_TOKEN}`,
          },
        });

  const sites: SiteType[] = await netlifyResponse.json();

  const projects = await Promise.all(
    sites.map(async (site) => {
      const languages = await fetchGit(site.build_settings.repo_path);
      return {
        name: site.name,
        url: site.url.replace(/^http:\/\//, "https://"),
        screenshot_url: site.screenshot_url,
        repoUrl: site.build_settings.repo_url,
        languages,
      };
    })
  );

  return projects;
}

const NetlifySites = () => {
  const projects: ProjectType[] = use(fetchSites());

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section
        id="projects"
        className="py-16 px-4 sm:px-10 md:px-20 lg:px-32 inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,rgba(68,68,68,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(68,68,68,0.5)_1px,transparent_1px)] bg-[size:40px_40px]"
        >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-wide text-white">My Projects</h2>
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
  </Suspense>
  );
};

export default NetlifySites;
