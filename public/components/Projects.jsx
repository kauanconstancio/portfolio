const Projects = () => {
  // Caminhos:

  // htmlcss: "../src/assets/lang-logos/html5_23329.png",
  // js: "../src/assets/lang-logos/JavaScript-logo.png",
  // scss: "../src/assets/lang-logos/sass-1.svg",
  // react: "../src/assets/lang-logos/React_(web_framework)-Logo.wine.svg",
  // tailwind: "../src/assets/lang-logos/Tailwind_CSS_Logo.svg.png",
  // vite: "../src/assets/lang-logos/Vitejs-logo.svg.png",

  const ProjetosTemplate = [
    {
      img: "../src/assets/projects-img/EM BREVE.png",
      title: "Projeto em Construção",
      projectLink: "",
      githubLink: "",
      id: 1,
    },
  ];
  const Projetos = [
    {
      img: "../src/assets/projects-img/Captura de tela 2025-01-12 174914.png",
      title: "Biblioteca de Jogos",
      projectLink: "",
      githubLink: "",
      html: "../src/assets/lang-logos/html5_23329.png",
      css: "../src/assets/lang-logos/css-3.svg",
      js: "../src/assets/lang-logos/JavaScript-logo.png",
      scss: "../src/assets/lang-logos/sass-1.svg",
      react: "",
      tailwind: "",
      vite: "",
      id: 1,
    },
    {
      img: "../src/assets/projects-img/Captura de tela 2025-01-13 124340.png",
      title: "Adivinhação de Números",
      projectLink: "",
      githubLink: "",
      html: "../src/assets/lang-logos/html5_23329.png",
      css: "../src/assets/lang-logos/css-3.svg",
      js: "../src/assets/lang-logos/JavaScript-logo.png",
      scss: "../src/assets/lang-logos/sass-1.svg",
      react: "",
      tailwind: "",
      vite: "",
      id: 2,
    },
    {
      img: "../src/assets/projects-img/Captura de tela 2025-01-24 201255.png",
      title: "Calculadora de Médias",
      projectLink: "",
      githubLink: "",
      html: "../src/assets/lang-logos/html5_23329.png",
      css: "../src/assets/lang-logos/css-3.svg",
      js: "../src/assets/lang-logos/JavaScript-logo.png",
      scss: "../src/assets/lang-logos/sass-1.svg",
      react: "",
      tailwind: "",
      vite: "",
      id: 3,
    },
    {
      img: "../src/assets/projects-img/image.png",
      title: "Cards de precificação",
      projectLink: "",
      githubLink: "",
      html: "../src/assets/lang-logos/html5_23329.png",
      css: "../src/assets/lang-logos/css-3.svg",
      js: "../src/assets/lang-logos/JavaScript-logo.png",
      scss: "../src/assets/lang-logos/sass-1.svg",
      react: "",
      tailwind: "",
      vite: "",
      id: 4,
    },
  ];
  return (
    <div className="flex flex-col gap-15">
      <div>
        <h2 className="text-neon-green text-3xl font-bold">Portfolio</h2>
        <p className=" text-primary-white">Confira meus projetos</p>
      </div>
      <div className="grid grid-cols-3 justify-center items-center gap-10">
        <div className="bg-grayBg h-full rounded-border-standard">
          <img
            className="rounded-t-border-standard h-40 w-full object-cover"
            src={ProjetosTemplate[0].img}
          />
          <div className="p-5 flex flex-col gap-2">
            <p className="text-primary-white font-bold text-xl">
              {ProjetosTemplate[0].title}
            </p>
            <p className="text-primary-white">
              {ProjetosTemplate[0].description}
            </p>
            <div className="flex gap-5 text-primary-white">
              <a
                className="hover:text-neon-green transition-all ease-linear"
                href={ProjetosTemplate[0].projectLink}
              >
                Ver Projeto
              </a>
              <a
                className="hover:text-neon-green transition-all ease-linear"
                href={Projetos.githubLink}
              >
                Github
              </a>
            </div>
          </div>
        </div>
        {Projetos.map((projetos) => (
          <div className="bg-grayBg rounded-border-standard h-full">
            <img
              className="rounded-t-border-standard h-40 w-full object-cover"
              src={projetos.img}
            />
            <div className="p-5 flex flex-col gap-2">
              <p className="text-primary-white font-bold text-xl">
                {projetos.title}
              </p>
              <p className="text-primary-white">{projetos.description}</p>
              <div className="flex gap-5 text-primary-white">
                <a
                  className="hover:text-neon-green transition-all ease-linear"
                  href={projetos.projectLink}
                >
                  Ver Projeto
                </a>
                <a
                  className="hover:text-neon-green transition-all ease-linear"
                  href={projetos.githubLink}
                >
                  Github
                </a>
              </div>
              <div className="flex gap-4 items-center flex-wrap mt-2">
                <img className="h-9" src={projetos.html} />
                <img className="h-7" src={projetos.css} />
                <img className="h-7" src={projetos.js} />
                <img className="h-7" src={projetos.scss} />
                <img className="h-10" src={projetos.react} />
                <img className="h-7" src={projetos.tailwind} />
                <img className="h-7" src={projetos.vite} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
