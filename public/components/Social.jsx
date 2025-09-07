import { Github, Linkedin, MessageCircleMore } from "lucide-react";

const Social = () => {
  return (
    <div className="flex gap-2 mt-8">
      <a
        href="https://wa.me/5527995323227"
        target="_blank"
        className="flex items-center justify-center hover:bg-neon-green p-2 rounded-full hover:text-black transition-all ease-linear shadow-md shadow-green-500"
      >
        <MessageCircleMore />
      </a>
      <a
        href="https://github.com/kauanconstancio"
        target="_blank"
        className="hover:bg-neon-green p-2 rounded-full hover:text-black transition-all ease-linear shadow-md shadow-green-500"
      >
        <Github />
      </a>
      <a
        href="www.linkedin.com/in/kauanconstancio"
        target="_blank"
        className="hover:bg-neon-green p-2 rounded-full hover:text-black transition-all ease-linear shadow-md shadow-green-500"
      >
        <Linkedin />
      </a>
    </div>
  );
};

export default Social;
