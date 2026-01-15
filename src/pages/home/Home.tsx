import { ParticlesBackground } from "../../components/background/ParticlesBackground";
import { Header } from "../../components/header/Header";
import { Sections } from "../../components/Sections/sections";
import avatar from '../../assets/Cartoon.png';
import { About } from "../about/About";
import { Projeto } from "../projetos/Projeto";
import { Contato } from "../contato/Contato";






export function Home() {
  return (
    <div className="relative min-h-[100svh] text-white overflow-x-hidden">
      <ParticlesBackground />
      <Header />

      <main
        id="home"
        className="
          relative z-10
          max-w-6xl mx-auto
          flex flex-col-reverse md:flex-row
          items-center justify-center
          gap-12 px-6
          pt-24 md:pt-28
          min-h-[100svh]
        "
      >

        {/* TEXTO */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Carlos Wendel
          </h1>

          <p className="text-slate-300 mt-4">
            Desenvolvedor Fullstack | React | TypeScript | Tailwind CSS | Mobile
          </p>

          <p className="text-slate-300 mt-6 leading-relaxed">
            Crio interfaces modernas, rápidas e responsivas usando
            <span className="text-white font-medium">
              {" "}React, TypeScript e Tailwind CSS
            </span>.
          </p>
        </div>

        {/* IMAGEM */}
        <div className="flex justify-center md:justify-start">
          <img
            src={avatar}
            alt="Avatar Carlos Wendel"
            className="
              w-48 h-48
              md:w-68 md:h-70
              rounded-full
              border-4 border-indigo-500
              shadow-lg
              object-cover
            "
          />
        </div>

      </main>

      <Sections id='about' title="">
        <About />
      </Sections>
      <Sections id='projects' title="" >
        <Projeto />
      </Sections>
      <Sections id='contact' title="">
        <Contato />
      </Sections>

    </div>
  );
}
