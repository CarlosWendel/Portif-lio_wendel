import { ParticlesBackground } from "../../components/background/ParticlesBackground";
import { Header } from "../../components/header/Header";
import { Sections } from "../../components/Sections/sections";





export function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <ParticlesBackground />
      <Header />

      <main id="home" className="relative z-10 max-w-4xl mx-auto p-10">
        <h1 className="text-4xl font-bold">Carlos Wendel</h1>
        <p className="text-slate-300 mt-4">
          Desenvolvedor Frontend
        </p>
      </main>
      <Sections id='about' title="Sobre">
        Sobre mim content
      </Sections>
      <Sections id='projects' title="Projetos"> 
        Projetos content
      </Sections>
      <Sections id='contact' title="Contato">
        Contato content 
      </Sections>
      
    </div>
  );
}
