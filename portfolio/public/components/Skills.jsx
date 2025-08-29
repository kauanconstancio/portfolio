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
        <div className=" flex flex-col items-center">
          <div className="w-4 h-4 bg-neon-green rounded-full"></div>
          <div className="w-0.5 h-full border-1 border-neon-green border-dashed"></div>
        </div>
        <div>
          <Experiences />
        </div>
      </div>
    </div>
  );
};

export default Skills;
