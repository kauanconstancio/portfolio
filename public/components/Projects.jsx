import Title from "./Title";
import Projetos from "../constants/ProjectsDB";

const Projects = () => {
  return (
    <div className="flex flex-col w-full max-w-[1600px]" id="projects">
      <Title title="Portfolio" subtitle="Confira meus projetos" />
      <div className="flex flex-wrap justify-center items-center gap-5">
        {Projetos.map((projetos) => (
          <div
            className="border-border-white border-solid border-2 p-4 grow-1 md:max-w-[350px] lg:max-w-[390px] rounded-2xl"
            key={projetos.id}
          >
            <img
              className="rounded-border-standard h-[230px] w-full object-cover"
              src={projetos.img}
            />
            <div className="p-5 flex flex-col gap-2">
              {/* Projects Title */}
              <p className="text-primary-white font-bold text-xl">
                {projetos.title}
              </p>

              {/* Projects Links */}
              <div className="flex gap-5 text-primary-white">
                <a
                  className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                  href={projetos.projectLink}
                  target="_blank"
                >
                  Ver Projeto
                </a>
                <a
                  className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                  href={projetos.githubLink}
                  target="_blank"
                >
                  Github
                </a>
              </div>

              {/* Projects frameworks useds */}
              <div className="flex gap-4 items-center mt-5">
                <img
                  className="h-7 transition-all ease-in-out hover:scale-115"
                  src={projetos.html}
                />
                <img
                  className="h-7 transition-all ease-in-out hover:scale-115"
                  src={projetos.css}
                />
                <img
                  className="h-7 transition-all ease-in-out hover:scale-115"
                  src={projetos.js}
                />
                <img
                  className="h-7 transition-all ease-in-out hover:scale-115"
                  src={projetos.scss}
                />
                <img
                  className="h-7 transition-all ease-in-out hover:scale-115"
                  src={projetos.react}
                />
                <img
                  className="h-3 transition-all ease-in-out hover:scale-115"
                  src={projetos.tailwind}
                />
                <img
                  className="h-3 transition-all ease-in-out hover:scale-115"
                  src={projetos.vite}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
