import Experiences from "./Experiences";
import Formations from "./Formations";
import Title from "./Title";

const Skills = () => {
  return (
    <div>
      <Title
        title="Competências"
        subtitle="Confira minha Formações e Experiências"
      />
      <div className="flex">
        <Formations />
        <div className=" flex flex-col items-center">
          <div className="w-4 h-4 bg-neon-green rounded-full"></div>
          <div className="w-0.5 h-full border-1 border-neon-green border-dashed"></div>
        </div>
        <Experiences />
      </div>
    </div>
  );
};

export default Skills;
