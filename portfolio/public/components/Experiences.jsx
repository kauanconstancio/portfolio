const Experiences = () => {
  return (
    <div className=" text-primary-white flex flex-col gap-3">
      <h2 className="flex items-center text-white font-bold text-xl gap-1">
        <span className="text-neon-green font-extrabold text-2xl">+</span>
        Experiências
      </h2>
      <div className="flex mt-5">
        <div className=" flex flex-col items-center">
          <div className="w-4 h-4 bg-neon-green rounded-full"></div>
          <div className="w-0.5 h-full bg-neon-green"></div>
        </div>
        <div className="ml-5 flex flex-col gap-3">
          <h2 className="font-bold text-xl">
            Operador de Vendas e Atendimento
          </h2>
          <p>10/2024 - 11/2024</p>
          <p className="text-neon-green">C&A</p>
          <p>
            Trabalho voltado ao atendimento ao público, ajudando em necessidades
            do cliente. E realizando operação de caixa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
