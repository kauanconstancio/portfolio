import Email from "./Email";
import Social2 from "./Social2";
import Title from "./Title";

const Contact = () => {
  return (
    <div>
      <Title title="Contato" subtitle="Vamos trabalhar juntos?" />
      <div className="flex auto-cols-auto gap-5 w-full">
        <Email />
        <Social2 />
      </div>
    </div>
  );
};

export default Contact;
