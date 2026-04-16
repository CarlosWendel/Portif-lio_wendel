import { SkillsSolarSystem } from "../../components/background/SkillsBlackHole"
import { useReveal } from "../../components/hooks/useReveal"

export function About() {
  const { ref, visible } = useReveal()

  const animStyle = (delay: string): React.CSSProperties => ({
    transform: visible ? "translateY(0)" : "translateY(40px)",
    opacity: visible ? 1 : 0,
    transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}, opacity 0.7s ease ${delay}`,
  })

  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-10 pt-24 text-slate-200"
    >
      <div
        ref={ref}
        className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto"
      >
        <SkillsSolarSystem />

        <div className="max-w-3xl space-y-6">

          {/* Título */}
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={animStyle("0.1s")}
          >
            Sobre mim
          </h2>

          {/* Origem */}
          <p className="text-lg leading-relaxed" style={animStyle("0.2s")}>
            Minha história com a tecnologia começou no{" "}
            <span className="font-semibold text-white">Maranhão</span>, alimentada
            pelo fascínio que sentia ao ver filmes de tecnologia e grandes desafios
            digitais. Naquela época, a paixão era grande, mas o acesso aos recursos
            era limitado. No entanto, o que começou como um{" "}
            <span className="font-semibold text-white">sonho de infância</span>{" "}
            tornou-se um propósito de vida.
          </p>

          {/* Jornada */}
          <p className="text-lg leading-relaxed" style={animStyle("0.35s")}>
            Venci as barreiras iniciais e decidi mergulhar de cabeça na programação,
            graduando-me em{" "}
            <span className="font-semibold text-white">
              Análise e Desenvolvimento de Sistemas
            </span>. Hoje, aquela curiosidade de entender{" "}
            <span className="italic text-violet-300">"como os hackers faziam"</span>{" "}
            evoluiu para a capacidade técnica de construir sistemas reais, seguros
            e performáticos.
          </p>

          {/* O que entrega */}
          <div style={animStyle("0.5s")}>
            <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">
              O que eu entrego hoje
            </p>
            <p className="text-lg leading-relaxed">
              Acredito no equilíbrio entre a{" "}
              <span className="font-semibold text-white">estética e a função</span>.
              Foco no{" "}
              <span className="font-semibold text-white">
                React e TypeScript
              </span>{" "}
              para o Front-end, sem abrir mão da robustez que{" "}
              <span className="font-semibold text-white">Java e C#</span> oferecem
              no Back-end. Minha trajetória me ensinou que a tecnologia é uma
              ferramenta de transformação — meu objetivo é utilizá-la para criar
              soluções inteligentes, integrando{" "}
              <span className="font-semibold text-white">IA</span> e boas práticas
              de engenharia de software.
            </p>
          </div>

          {/* Objetivo */}
          <div
            className="border-l-2 border-violet-500 pl-4"
            style={animStyle("0.65s")}
          >
            <p className="text-lg leading-relaxed text-slate-300">
              Hoje busco minha primeira oportunidade como{" "}
              <span className="font-semibold text-white">Desenvolvedor Júnior</span>,
              levando a mesma paixão que me motivou no início — agora amparada por
              uma base técnica sólida e uma vontade incansável de resolver
              problemas complexos.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}