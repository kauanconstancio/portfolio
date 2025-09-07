import CertificatesCards from "./CertificatesCards";
import CertificateButton from "./CetificateButtons";
import CertificatesDB from "../constants/CertificatesDB";
import Title from "./Title";

const Certificates = () => {
  return (
    <div id="certificates">
      <Title title="Certificados" subtitle="Confira minhas conquistas" />
      <div className="flex flex-col gap-10">
        <CertificateButton />
        <CertificatesCards />
      </div>
    </div>
  );
};

export default Certificates;
