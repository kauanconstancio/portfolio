const Header = () => {
  return (
    <div className="max-w-[1600px]">
      <h1 className="text-2xl flex justify-between text-primary-white">
        <div>
          <span className="font-bold">Kauan</span>Constancio
        </div>
        <div className="hidden sm:flex text-primary-white align-center gap-5 text-lg font-medium">
          <a
            href="#tecnologies"
            className="hover:text-neon-green transition-all ease-in-out"
          >
            Tecnologias
          </a>
          <a
            href="#projects"
            className="hover:text-neon-green transition-all ease-in-out"
          >
            Projetos
          </a>
          <a
            href="#certificates"
            className="hover:text-neon-green transition-all ease-in-out"
          >
            Certificados
          </a>
          <a
            href="#contact"
            className="hover:text-neon-green transition-all ease-in-out"
          >
            Contato
          </a>
        </div>
      </h1>
    </div>
  );
};

export default Header;
