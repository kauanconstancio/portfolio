// Import das logos das tecnologias usadas
import html from "../assets/logos/HTML.png";
import css from "../assets/logos/css-3.svg";
import javascript from "../assets/logos/JavaScript-logo.png";
import sass from "../assets/logos/sass-1.svg";
import react from "../assets/logos/REACT.svg";
import vite from "../assets/logos/Vitejs-logo.svg.png";
import tailwind from "../assets/logos/Tailwind_CSS_Logo.svg.png";
import nextjs from "../assets/logos/next-js.avif";
import lucide from "../assets/logos/lucide.png";
import shadcn from "../assets/logos/shadcn.png";
import typescript from "../assets/logos/typescript.svg";

// Import da capa dos projetos
import p1 from "../assets/projects-img/Captura de tela 2025-01-12 174914.png";
import p2 from "../assets/projects-img/Captura de tela 2025-01-13 124340.png";
import p3 from "../assets/projects-img/Captura de tela 2025-01-24 201255.png";
import p4 from "../assets/projects-img/image.png";
import p5 from "../assets/projects-img/portfolio.png";
import p6 from "../assets/projects-img/Chat Bot.png";

const Projetos = [
  {
    img: p6,
    title: "Chat Bot AI (Open AI)",
    projectLink: "https://chat-bot-one-olive.vercel.app/",
    githubLink: "https://github.com/kauanconstancio/chat-bot",
    nextjs: nextjs,
    typescript: typescript,
    tailwind: tailwind,
    lucide: lucide,
    shadcn: shadcn,
    id: 1234,
  },
  {
    img: p5,
    title: "Portfolio",
    projectLink: "https://portfolio-five-eosin-41.vercel.app/",
    githubLink: "https://github.com/kauanconstancio/portfolio",
    html: html,
    css: css,
    js: javascript,
    react: react,
    vite: vite,
    tailwind: tailwind,
    id: 1234,
  },
  {
    img: p1,
    title: "Biblioteca de Jogos",
    projectLink: "https://imerss-o-dev-alura-google-gemini.vercel.app/",
    githubLink:
      "https://github.com/kauanconstancio/Imersao-DEV-Alura-Google-Gemini",
    html: html,
    css: css,
    js: javascript,
    scss: sass,
    id: 14568,
  },
  {
    img: p2,
    title: "Adivinhação de Números",
    projectLink: "https://l-gica-com-js.vercel.app/",
    githubLink:
      "https://github.com/kauanconstancio/L-gica-com-JS/tree/main/parte-2/numero%20secreto%202.0",
    html: html,
    css: css,
    js: javascript,
    scss: sass,
  },
  {
    img: p3,
    title: "Calculadora de Médias",
    projectLink: "https://calculador-de-medias-zeta.vercel.app/",
    githubLink: "https://github.com/kauanconstancio/calculador-de-medias",
    html: html,
    css: css,
    js: javascript,
    scss: sass,
  },
  {
    img: p4,
    title: "Cards de precificação",
    projectLink: "https://cards-de-precifica-o-com-altern-ncia.vercel.app/",
    githubLink:
      "https://github.com/kauanconstancio/cards-de-precifica--o-com-altern-ncia",
    html: html,
    css: css,
    js: javascript,
    scss: sass,
  },
];

export default Projetos;
