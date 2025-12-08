import { Github, Instagram, Linkedin, MessageCircleMore } from "lucide-react";

const Social = () => {
  return (
    <div className="flex gap-3 mt-8">
      <a
        href="https://wa.me/5527995323227"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center bg-green-950 text-green-500 rounded-xl transition-all ease-linear hover:scale-120"
      >
        <MessageCircleMore />
      </a>
      <a
        href="https://github.com/kauanconstancio"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center bg-gray-500 text-white rounded-xl transition-all ease-linear hover:scale-120"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/kauanconstancio"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center bg-blue-950 text-blue-500 rounded-xl transition-all ease-linear hover:scale-120"
      >
        <Linkedin />
      </a>
      <a
        href="https://www.instagram.com/kauanconstancio/"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center bg-red-950 text-red-500 rounded-xl transition-all ease-linear hover:scale-120"
      >
        <Instagram />
      </a>
    </div>
  );
};

export default Social;
