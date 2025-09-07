import Certificates from "../public/components/Certificates";
import Contact from "../public/components/Contact";
import Header from "../public/components/Header";
import Hero from "../public/components/Hero";
import Projects from "../public/components/Projects";
import Skills from "../public/components/Skills";
import Tecnologies from "../public/components/Tecnologies";
import "./App.css";

function App() {
  return (
    <div className="bg-dark-blue w-full h-full pt-4 pl-40 pr-40 pb-4 box-border flex flex-col justify-center items-center gap-30">
      <div className="max-w-[1600px] flex flex-col gap-30">
        <div>
          <Header />
          <Hero />
        </div>
        <Skills />
        <Tecnologies />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
}

export default App;
