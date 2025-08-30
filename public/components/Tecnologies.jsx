const Tecnologies = () => {
  const Ferramentas = [
    {
      title: "VSCode",
      id: 1,
    },
    {
      title: "Git",
      id: 2,
    },
    {
      title: "GitHub",
      id: 3,
    },
    {
      title: "Figma",
      id: 4,
    },
  ];

  const Frameworks = [
    {
      title: "React",
      id: 1,
    },
    {
      title: "TailwindCSS",
      id: 2,
    },
  ];

  const Lang = [
    {
      title: "HTML/CSS",
      id: 1,
    },
    {
      title: "JavaScript",
      id: 2,
    },
    {
      title: "SCSS",
      id: 3,
    },
  ];
  return (
    <div id="tecnologies">
      <div>
        <h2 className="text-neon-green text-3xl font-bold">Tecnologias</h2>
        <p className=" text-primary-white">Tecnologias nas quais atuo</p>
      </div>
      <div className="mt-15 flex gap-6 items-center">
        <div className="flex flex-col gap-3 bg-grayBg pt-5 pl-7 pb-5 pr-7 rounded-border-standard h-45 w-full hover:-translate-y-3 hover:bg-background-card-color-hover transition-all ease-in-out">
          <h2 className="flex items-center text-white font-bold text-lg gap-1">
            <span className="text-neon-green font-extrabold text-lg">+</span>
            Ferramentas
          </h2>
          <ul className="list-disc text-primary-white ml-9 items-center">
            {Ferramentas.map((ferramentas) => (
              <li key={ferramentas.id}>{ferramentas.title}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 bg-grayBg pt-5 pl-7 pb-5 pr-7 rounded-border-standard h-45 w-full hover:-translate-y-3 hover:bg-background-card-color-hover transition-all ease-in-out">
          <h2 className="flex items-center text-white font-bold text-lg gap-1">
            <span className="text-neon-green font-extrabold text-lg">+</span>
            Frameworks
          </h2>
          <ul className="list-disc text-primary-white ml-9 items-center">
            {Frameworks.map((frameworks) => (
              <li key={frameworks.id}>{frameworks.title}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 bg-grayBg pt-5 pl-7 pb-5 pr-7 rounded-border-standard h-45 w-full hover:-translate-y-3 hover:bg-background-card-color-hover transition-all ease-in-out">
          <h2 className="flex items-center text-white font-bold text-lg gap-1">
            <span className="text-neon-green font-extrabold text-lg">+</span>
            Linguagens
          </h2>
          <ul className="list-disc text-primary-white ml-9 items-center">
            {Lang.map((lang) => (
              <li key={lang.id}>{lang.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tecnologies;
