const getTechColor = (color) => {
  const colors = {
    orange: "text-orange-500 bg-orange-500/20",
    blue: "text-blue-500 bg-blue-500/20",
    yellow: "text-yellow-400 bg-amber-400/20",
    pink: "text-pink-500 bg-pink-500/20",
    gray: "text-white bg-gray-500/20",
    green: "text-green-500 bg-green-500/20",
  };
  return colors[color] || colors.gray;
};

const ProjectCard = ({ project }) => {
  return (
    <div className="border-border-white border-solid border-2 p-4 grow-1 md:max-w-[350px] lg:max-w-[390px] rounded-2xl flex flex-col min-h-full">
      <img
        className="rounded-border-standard h-[150px] w-full object-cover"
        src={project.image}
        alt={project.title}
      />
      <div className="pt-5 flex flex-col gap-3 flex-grow justify-between">
        <div className="flex flex-col gap-3">
          {/* Project Title */}
          <p className="text-primary-white font-bold text-xl">
            {project.title}
          </p>

          {/* Project Links */}
          <div className="flex gap-5 text-primary-white">
            <a
              className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Projeto
            </a>
            <a
              className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap items-center gap-2">
          {project.technologies.map((tech, index) => (
            <p
              key={index}
              className={`px-3 py-1 rounded-3xl font-medium ${getTechColor(
                tech.color
              )}`}
            >
              {tech.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
