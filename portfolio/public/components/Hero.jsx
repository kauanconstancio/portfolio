
import Social from "./Social";

const Hero = () => {
  return (
    <div className="mt-15 flex items-center justify-center gap-20">
      <div className="text-white">
        <h3 className="font-bold text-2xl">Hello, i'm Kauan.</h3>
        <h1 className="text-8xl font-extrabold">Front End Developer</h1>
        <p className="mt-10 text-lg">
          Nascido na cidade de Vitória no Espírito Santo. Desde pequeno sempre
          gostei de tecnologia e sempre procurei me manter atualizado. Sou
          aquele tipo de pessoa que gosta de aproveitar ao máximo a tecnologia
          que tenho em mãos e sempre me perguntei como as coisas funcionam.
        </p>
        <Social />
      </div>
      <img
        className="rounded-full h-80 aspect-square object-cover outline-white border-solid outline-2"
        src="../src/assets/Imagem do WhatsApp de 2025-03-13 à(s) 20.29.13_9b424798.jpg"
      />
    </div>
  );
};

export default Hero;
