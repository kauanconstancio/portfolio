import CertificatesDB from "../constants/CertificatesDB";

const CertificatesCards = () => {
  return (
    <div className="flex flex-wrap item-center justify-center items-center gap-10">
      {CertificatesDB.map((Certificados) => (
        <div key={Certificados.id} className="flex flex-col gap-3">
          <img
            src={Certificados.certificate}
            alt=""
            className="w-55 rounded-2xl"
          />
          <a
            href={Certificados.pdflink}
            className="text-white hover:text-neon-green transition-all ease-in-out"
            target="_blank"
          >
            Ver Certificado
          </a>
        </div>
      ))}
    </div>
  );
};

export default CertificatesCards;
