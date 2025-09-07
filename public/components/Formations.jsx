const Formations = () => {
  return (
    <div>
      <h2 className="flex items-center text-white font-bold text-xl gap-1">
        <span className="text-neon-green font-extrabold text-2xl">+</span>{" "}
        Formação
      </h2>
      <div>
        <div className="mt-8 mr-5 flex flex-col gap-3 bg-grayBg p-3 border-1 border-border-white rounded-border-standard text-primary-white hover:-translate-y-3 hover:border-neon-green transition-all hover:shadow-lg hover:shadow-green-500 ease-in-out">
          <div>
            <p className="font-bold text-xl">
              Análise e Desenvolvimento de Sistemas
            </p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-neon-green">Estácio</p>
              <p className="text-neon-green bg-dark-green pl-3 pr-3 pt-2 pb-2 rounded-full">
                Em andamento
              </p>
            </div>
          </div>
          <p className="">
            Cursando Análise e Desenvolvimento de Sistemas, desenvolvendo minhas
            habilidades em desenvolvimento de software, arquitetura de sistemas
            e banco de dados.
          </p>
        </div>
        {/* Adicionar Formações apartir daqui */}
      </div>
    </div>
  );
};

export default Formations;
