import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import SocialInput from "./SocialInput";

const Social2 = () => {
  return (
    <div className="flex flex-col gap-5 border-2 border-solid border-border-white rounded-2xl p-10 w-full">
      <h1 className="text-neon-green text-3xl font-bold">
        Acesse minhas redes:
      </h1>
      <p className="text-white font-medium">
        Me conte mais como posso te ajudar!
      </p>
      <div className="grid grid-cols-2 gap-5">
        <SocialInput
          link="https://www.linkedin.com/in/kauanconstancio"
          icon={<Linkedin />}
          iconClass="w-10 h-10 flex items-center justify-center bg-blue-950 text-blue-500 rounded-xl"
          socialPlatform="LinkedIn"
          description="Vamos Conectar!"
        />
        <SocialInput
          link="https://www.instagram.com/kauanconstancio/"
          icon={<Instagram />}
          iconClass="w-10 h-10 flex items-center justify-center bg-red-950 text-red-500 rounded-xl"
          socialPlatform="Instagram"
          description="@kauanconstancio"
        />
        <SocialInput
          link="https://wa.me/5527995323227"
          icon={<MessageCircle />}
          iconClass="w-10 h-10 flex items-center justify-center bg-green-950 text-green-500 rounded-xl"
          socialPlatform="WhatsApp"
          description="Mande uma.."
        />
        <SocialInput
          link="https://github.com/kauanconstancio"
          icon={<Github />}
          iconClass="w-10 h-10 flex items-center justify-center bg-gray-500 text-white rounded-xl"
          socialPlatform="GitHub"
          description="kauanconstancio"
        />
      </div>
    </div>
  );
};

export default Social2;
