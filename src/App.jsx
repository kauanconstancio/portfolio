import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tecnologies from "./components/Tecnologies";
import "./App.css";

function App() {
  return (
    <div className="py-4 w-full px-5 md:px-15 box-border flex flex-col justify-center items-center gap-30 ">
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
