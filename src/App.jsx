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
    <div className="py-4 w-full px-5 md:px-15 box-border flex flex-col justify-center items-center gap-30 max-w-[1600px]">
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
  );
}

export default App;
