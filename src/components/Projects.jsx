import { portfolioData } from "../Data/portfolioData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="px-8 py-24 bg-slate-950 text-white">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {portfolioData.projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
