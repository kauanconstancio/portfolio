import Button from "./Button";

const CertificateButton = () => {
  return (
    <div className="flex gap-5">
      <Button button="Todos" />
      <Button button="Eventos" />
      <Button button="Formações" />
      <Button button="Alura" />
      <Button button="Rocketseat" />
      <Button button="Bradesco" />
    </div>
  );
};

export default CertificateButton;
