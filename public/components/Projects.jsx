import Title from "./Title";

{
  /* <p className="text-orange-500 px-3 py-1 bg-orange-500/20 rounded-3xl font-medium">HTML</p>
<p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">CSS</p>
<p className="text-yellow-400 px-3 py-1 bg-amber-400/20 rounded-3xl font-medium">JavaScript</p>
<p className="text-pink-500 px-3 py-1 bg-pink-500/20 rounded-3xl font-medium">Sass</p>
<p className="text-white px-3 py-1 bg-gray-500/20 rounded-3xl font-medium">NextJS</p>
<p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">React</p>
<p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">TypeScript</p>
<p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">Tailwind</p>
<p className="text-white px-3 py-1 bg-gray-500/20 rounded-3xl font-medium">Lucide</p>
<p className="text-white px-3 py-1 bg-gray-500/20 rounded-3xl font-medium">ShadCN</p> */
}

const Projects = () => {
  return (
    <div className="flex flex-col w-full max-w-[1600px]" id="projects">
      <Title title="Portfolio" subtitle="Confira meus projetos" />
      <div className="flex flex-wrap justify-center items-center gap-5">
        <div
          className="border-border-white border-solid border-2 p-4 grow-1 md:max-w-[350px] lg:max-w-[390px] rounded-2xl"
          d
        >
          <img
            className="rounded-border-standard h-[150px] w-full object-cover"
            src="../assets/projects-img/Chat Bot.png"
          />
          <div className="pt-5 flex flex-col gap-3">
            {/* Projects Title */}
            <p className="text-primary-white font-bold text-xl">
              Chat Bot AI (Open AI)
            </p>

            {/* Projects Links */}
            <div className="flex gap-5 text-primary-white">
              <a
                className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                href="https://chat-bot-one-olive.vercel.app/"
                target="_blank"
              >
                Ver Projeto
              </a>
              <a
                className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                href="https://github.com/kauanconstancio/chat-bot"
                target="_blank"
              >
                Github
              </a>
            </div>

            {/* Projects frameworks useds */}
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-orange-500 px-3 py-1 bg-orange-500/20 rounded-3xl font-medium">
                HTML
              </p>
              <p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">
                CSS
              </p>
              <p className="text-white px-3 py-1 bg-gray-500/20 rounded-3xl font-medium">
                NextJS
              </p>
              <p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">
                TypeScript
              </p>
              <p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">
                Tailwind
              </p>
              <p className="text-white px-3 py-1 bg-gray-500/20 rounded-3xl font-medium">
                Lucide
              </p>
              <p className="text-white px-3 py-1 bg-gray-500/20 rounded-3xl font-medium">
                ShadCN
              </p>
            </div>
          </div>
        </div>
        {/* project2 */}
        <div
          className="border-border-white border-solid border-2 p-4 grow-1 md:max-w-[350px] lg:max-w-[390px] rounded-2xl"
          d
        >
          <img
            className="rounded-border-standard h-[150px] w-full object-cover"
            src="../assets/projects-img/portfolio.png"
          />
          <div className="pt-5 flex flex-col gap-3">
            {/* Projects Title */}
            <p className="text-primary-white font-bold text-xl">Portfolio</p>

            {/* Projects Links */}
            <div className="flex gap-5 text-primary-white">
              <a
                className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                href="https://portfolio-five-eosin-41.vercel.app/"
                target="_blank"
              >
                Ver Projeto
              </a>
              <a
                className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                href="https://github.com/kauanconstancio/portfolio"
                target="_blank"
              >
                Github
              </a>
            </div>

            {/* Projects frameworks useds */}
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-orange-500 px-3 py-1 bg-orange-500/20 rounded-3xl font-medium">
                HTML
              </p>
              <p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">
                CSS
              </p>
              <p className="text-yellow-400 px-3 py-1 bg-amber-400/20 rounded-3xl font-medium">
                JavaScript
              </p>
              <p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">
                React
              </p>
              <p className="text-green-500 px-3 py-1 bg-green-500/20 rounded-3xl font-medium">
                Vite
              </p>
              <p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">
                Tailwind
              </p>
              <p className="text-white px-3 py-1 bg-gray-500/20 rounded-3xl font-medium">
                Lucide
              </p>
            </div>
          </div>
        </div>
        {/* PROJECT 3 */}
        <div
          className="border-border-white border-solid border-2 p-4 grow-1 md:max-w-[350px] lg:max-w-[390px] rounded-2xl"
          d
        >
          <img
            className="rounded-border-standard h-[150px] w-full object-cover"
            src="../assets/projects-img/Captura de tela 2025-01-12 174914.png"
          />
          <div className="pt-5 flex flex-col gap-3">
            {/* Projects Title */}
            <p className="text-primary-white font-bold text-xl">
              Biblioteca de Jogos
            </p>

            {/* Projects Links */}
            <div className="flex gap-5 text-primary-white">
              <a
                className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                href="https://imerss-o-dev-alura-google-gemini.vercel.app/"
                target="_blank"
              >
                Ver Projeto
              </a>
              <a
                className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                href="https://github.com/kauanconstancio/Imersao-DEV-Alura-Google-Gemini"
                target="_blank"
              >
                Github
              </a>
            </div>

            {/* Projects frameworks useds */}
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-orange-500 px-3 py-1 bg-orange-500/20 rounded-3xl font-medium">
                HTML
              </p>
              <p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">
                CSS
              </p>
              <p className="text-yellow-400 px-3 py-1 bg-amber-400/20 rounded-3xl font-medium">
                JavaScript
              </p>
              <p className="text-pink-500 px-3 py-1 bg-pink-500/20 rounded-3xl font-medium">
                Sass
              </p>
            </div>
          </div>
        </div>
        {/* PROJECT 4 */}
        <div
          className="border-border-white border-solid border-2 p-4 grow-1 md:max-w-[350px] lg:max-w-[390px] rounded-2xl"
          d
        >
          <img
            className="rounded-border-standard h-[150px] w-full object-cover"
            src="../assets/projects-img/Captura de tela 2025-01-13 124340.png"
          />
          <div className="pt-5 flex flex-col gap-3">
            {/* Projects Title */}
            <p className="text-primary-white font-bold text-xl">
              Adivinhação de Números
            </p>

            {/* Projects Links */}
            <div className="flex gap-5 text-primary-white">
              <a
                className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                href="https://l-gica-com-js.vercel.app/"
                target="_blank"
              >
                Ver Projeto
              </a>
              <a
                className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                href="https://github.com/kauanconstancio/L-gica-com-JS/tree/main/parte-2/numero%20secreto%202.0"
                target="_blank"
              >
                Github
              </a>
            </div>

            {/* Projects frameworks useds */}
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-orange-500 px-3 py-1 bg-orange-500/20 rounded-3xl font-medium">
                HTML
              </p>
              <p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">
                CSS
              </p>
              <p className="text-yellow-400 px-3 py-1 bg-amber-400/20 rounded-3xl font-medium">
                JavaScript
              </p>
              <p className="text-pink-500 px-3 py-1 bg-pink-500/20 rounded-3xl font-medium">
                Sass
              </p>
            </div>
          </div>
        </div>
        {/* PROJECT 5 */}
        <div
          className="border-border-white border-solid border-2 p-4 grow-1 md:max-w-[350px] lg:max-w-[390px] rounded-2xl"
          d
        >
          <img
            className="rounded-border-standard h-[150px] w-full object-cover"
            src="../assets/projects-img/Captura de tela 2025-01-24 201255.png"
          />
          <div className="pt-5 flex flex-col gap-3">
            {/* Projects Title */}
            <p className="text-primary-white font-bold text-xl">
              Calculadora de Médias
            </p>

            {/* Projects Links */}
            <div className="flex gap-5 text-primary-white">
              <a
                className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                href="https://calculador-de-medias-zeta.vercel.app/"
                target="_blank"
              >
                Ver Projeto
              </a>
              <a
                className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                href="https://github.com/kauanconstancio/calculador-de-medias"
                target="_blank"
              >
                Github
              </a>
            </div>

            {/* Projects frameworks useds */}
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-orange-500 px-3 py-1 bg-orange-500/20 rounded-3xl font-medium">
                HTML
              </p>
              <p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">
                CSS
              </p>
              <p className="text-yellow-400 px-3 py-1 bg-amber-400/20 rounded-3xl font-medium">
                JavaScript
              </p>
              <p className="text-pink-500 px-3 py-1 bg-pink-500/20 rounded-3xl font-medium">
                Sass
              </p>
            </div>
          </div>
        </div>
        {/* PROJECT 6 */}
        <div
          className="border-border-white border-solid border-2 p-4 grow-1 md:max-w-[350px] lg:max-w-[390px] rounded-2xl"
          d
        >
          <img
            className="rounded-border-standard h-[150px] w-full object-cover"
            src="../assets/projects-img/image.png"
          />
          <div className="pt-5 flex flex-col gap-3">
            {/* Projects Title */}
            <p className="text-primary-white font-bold text-xl">
              Cards de precificação
            </p>

            {/* Projects Links */}
            <div className="flex gap-5 text-primary-white">
              <a
                className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                href="https://cards-de-precifica-o-com-altern-ncia.vercel.app/"
                target="_blank"
              >
                Ver Projeto
              </a>
              <a
                className="hover:text-neon-green hover:scale-110 transition-all ease-linear underline"
                href="https://github.com/kauanconstancio/cards-de-precifica--o-com-altern-ncia"
                target="_blank"
              >
                Github
              </a>
            </div>

            {/* Projects frameworks useds */}
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-orange-500 px-3 py-1 bg-orange-500/20 rounded-3xl font-medium">
                HTML
              </p>
              <p className="text-blue-500 px-3 py-1 bg-blue-500/20 rounded-3xl font-medium">
                CSS
              </p>
              <p className="text-yellow-400 px-3 py-1 bg-amber-400/20 rounded-3xl font-medium">
                JavaScript
              </p>
              <p className="text-pink-500 px-3 py-1 bg-pink-500/20 rounded-3xl font-medium">
                Sass
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
