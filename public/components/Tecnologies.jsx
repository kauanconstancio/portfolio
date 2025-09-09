import Title from "./Title";
import Tech from "../constants/TecnologiesDB";

const Tecnologies = () => {
  return (
    <div id="tecnologies" className="max-w-[1600px]">
      <Title title="Tecnologias" subtitle="Tecnologias nas quais atuo" />
      <div className="w-full">
        <ul className="flex flex-wrap gap-10 justify-center p-8">
          {Tech.map((Techs) => (
            <li
              className="flex flex-col items-center justify-center gap-3 w-35 h-35 border-border-white border-solid border-2 p-7 rounded-2xl hover:-translate-y-3 hover:border-neon-green transition-all hover:shadow-lg hover:shadow-green-500 ease-in-out"
              key={Techs.id}
            >
              <img src={Techs.logo} alt={Techs.title} className="w-20" />
              <p className="text-white font-medium">{Techs.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tecnologies;
