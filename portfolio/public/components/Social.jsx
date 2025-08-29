import { Github, Linkedin, MessageCircleMore } from "lucide-react";

const Social = () => {
  return (
    <div className="flex gap-5 mt-5">
      <a href="https://wa.me/5527995323227" target="_blank">
        <MessageCircleMore />
      </a>
      <a href="https://github.com/kauanconstancio" target="_blank">
        <Github />
      </a>
      <a href="www.linkedin.com/in/kauanconstancio" target="_blank">
        <Linkedin />
      </a>
    </div>
  );
};

export default Social;
