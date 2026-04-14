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
          <div className="overflow-hidden mb-1">
            <h1 className="text-4xl md:text-5xl font-bold texte-white "
            data-text="Olá, sou Carlos Wendel"
              style={{
                transform: "translateY(100%)",
                animation: "slide-up 0.7s cubic-bezier(0.16, 0.1, 0.3, 1) 0.1s forwards",
                position: "relative",
              }}
            >
              Olá, sou Carlos Wendel
            </h1>
          </div>

          <div className="overflow-hidden mb-4">
            <p
              className="text-xl md:text-2xl text-violet-400 "
              style={{
                transform: "translateY(100%)",
                animation: "slide-up 0.7s cubic-bezier(0.16, 0.1, 0.3, 1) 0.2s forwards",
              }}
            >
              Desenvolvedor Fullstack | React | TypeScript | Tailwind CSS | Java
            </p>
          </div>
          <div className="overflow-hidden mb-4">
            <p className="text-slate-300 mt-6 leading-relaxed"
              style={{
                transform: "translateY(100%)",
                animation: "slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards",
              }}>
              Crio interfaces modernas, rápidas e responsivas usando
              <span className="text-white font-medium">
                {" "}React, TypeScript e Tailwind CSS
              </span>.
            </p>
          </div>
        </div>


        {/* IMAGEM + ÓRBITA */}
        <div className="flex justify-center md:justify-start">
          <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">

            {/* Anel externo — órbita lenta */}
            <div
              className="absolute rounded-full border border-indigo-500/30"
              style={{
                width: "100%",
                height: "100%",
                animation: "spin 8s linear infinite",
              }}
            >
              {/* Planetinha no anel externo */}
              <div className="absolute w-3 h-3 bg-violet-400 rounded-full -top-1.5 left-1/2 -translate-x-1/2" />
            </div>

            {/* Anel interno — órbita rápida, sentido inverso */}
            <div
              className="absolute rounded-full border border-violet-500/20"
              style={{
                width: "75%",
                height: "75%",
                animation: "spin 5s linear infinite reverse",
              }}
            >
              {/* Planetinha no anel interno */}
              <div className="absolute w-2 h-2 bg-sky-400 rounded-full -top-1 left-1/2 -translate-x-1/2" />
            </div>

            {/* Avatar no centro */}
            <img
              src={avatar}
              alt="Avatar Carlos Wendel"
              className="
              w-40 h-40 md:w-52 md:h-52
              rounded-full
              border-4 border-indigo-500
              shadow-lg
              object-cover
              relative z-10
            "
            />

          </div>
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
