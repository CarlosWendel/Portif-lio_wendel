import { SkillsSolarSystem } from "../../components/background/SkillsBlackHole"

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-10 pt-24 text-slate-200"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">

        {/* 🌞 Sistema Solar */}
        <SkillsSolarSystem />

        {/* 📝 Texto */}
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Sobre mim
          </h2>

          <p className="text-lg leading-relaxed">
            Sou formado em <span className="font-semibold text-white">
            Análise e Desenvolvimento de Sistemas</span>, com foco em
            desenvolvimento <span className="font-semibold text-white">
            Front-end e Back-end</span>, utilizando tecnologias como
            <span className="font-semibold text-white">
              {" "}React, TypeScript e Node.js
            </span>, além de bancos de dados relacionais.
          </p>

          <p className="text-lg leading-relaxed">
            Tenho experiência prática no desenvolvimento de projetos pessoais
            e acadêmicos, aplicando boas práticas, código organizado e soluções
            voltadas à qualidade e escalabilidade. Busco minha primeira
            oportunidade como <span className="font-semibold text-white">
            Desenvolvedor Júnior</span> para continuar evoluindo e contribuir
            com soluções eficientes.
          </p>
        </div>
      </div>
    </section>
  )
}
