import CertificatesDB from "../constants/CertificatesDB";

const CertificatesCards = () => {
  return (
    <div className="flex flex-wrap item-center justify-center items-center gap-5">
      {CertificatesDB.map((Certificados) => (
        <div key={Certificados.id} className="flex flex-col gap-3">
          <div className="hover:scale-105  transition-all ease-in-out relative group">
            <img
              src={Certificados.certificate}
              alt=""
              className="w-35 lg:w-55 rounded-2xl group-hover:opacity-75"
            />
            <a
              className="text-neon-green transition-all ease-in-out absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-2xl py-2 px-4 border-1 border-solid border-white cursor-pointer hover:scale-105 w-[60%] items-center justify-center hidden group-hover:flex bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-xs text-center"
              href={Certificados.pdflink}
              target="blank"
            >
              Ver Certificado
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificatesCards;
