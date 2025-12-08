import Title from "./Title";
import ProjectCard from "./ProjectCard";
import ProjectsDB from "../constants/ProjectsDB";

const Projects = () => {
  return (
    <div className="flex flex-col w-full max-w-[1600px] h-auto" id="projects">
      <Title title="Portfolio" subtitle="Confira meus projetos" />
      <div className="flex flex-wrap justify-center items-stretch gap-5 h-full">
        {ProjectsDB.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
