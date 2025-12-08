import { Send } from "lucide-react";

const FormSubmitButton = () => {
  return (
    <div>
      <button
        className="text-xl text-white p-5 border-1 rounded-2xl border-solid border-neon-green cursor-pointer flex items-center justify-center gap-3 "
        type="submit"
        value="enviar"
      >
        <Send className="text-neon-green" />
        Enviar Mensagem
      </button>
    </div>
  );
};

export default FormSubmitButton;
