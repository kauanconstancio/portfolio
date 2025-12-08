import { useState } from "react";
import FormInputs, { FormTextarea } from "./FormInputs";
import FormSubmitButton from "./FormSubmitButton";
import emailjs from "@emailjs/browser";

const Email = () => {
  //utilizando Emailjs

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos antes de enviar a mensagem!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_onvy577",
        "template_4xocff9",
        templateParams,
        "Q6-nivjrbHzX3d1uy"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO:", err);
        }
      );
  }

  return (
    <div className="border-2 border-solid border-border-white rounded-2xl p-10 w-full">
      <form className="flex flex-col gap-5 items-center" onSubmit={sendEmail}>
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-neon-green text-3xl font-bold">
            Envie uma mensagem!
          </h1>
          <p className="text-white font-medium">
            Me conte mais como posso te ajudar!
          </p>
          <FormInputs
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            value={name}
          />
          <FormInputs
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            value={email}
          />

          <FormTextarea
            value={message}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <FormSubmitButton />
      </form>
    </div>
  );
};

export default Email;
