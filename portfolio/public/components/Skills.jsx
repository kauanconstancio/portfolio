import Experiences from "./Experiences";
import Formations from "./Formations";

const Skills = () => {
  return (
    <div className="mt-15">
      <h1 className="font-bold text-3xl text-neon-green mb-6">Competências</h1>
      <div className="flex">
        <div>
          <Formations />
        </div>
        
        <div>
          <Experiences />
        </div>
      </div>
    </div>
  );
};

export default Skills;
