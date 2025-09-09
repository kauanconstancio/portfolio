import Email from "./Email";
import Social2 from "./Social2";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="w-full max-w-[1600px]">
      <Title title="Contato" subtitle="Vamos trabalhar juntos?" />
      <div className="flex flex-wrap lg:flex-nowrap gap-5 w-full">
        <Email />
        <Social2 />
      </div>
    </div>
  );
};

export default Contact;
