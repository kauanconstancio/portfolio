import CertificatesDB from "../constants/CertificatesDB";
import CertificatesCards from "./CertificatesCards";
import CertificateButton from "./CetificateButtons";
import Title from "./Title";

const Certificates = () => {
  const totalCertificates = CertificatesDB.length;

  return (
    <div id="certificates">
      <Title title="Certificados" subtitle="Confira minhas conquistas" />
      <div className="flex flex-col gap-10">
        <h1 className="text-primary-white text-xl font-medium">
          Total de certificados: {totalCertificates}
        </h1>
        {/* Desativado até criação da função de filtro */}
        {/* <CertificateButton /> */}
        <CertificatesCards />
      </div>
    </div>
  );
};

export default Certificates;
