import { useReveal } from "../../components/hooks/useReveal"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const projetos = [
  {
    nome: "WendelDog's",
    descricao: "Projeto em React + JavaScript focado em lógica e mobile.",
    github: "https://github.com/CarlosWendel/WendelDog-s",
    tags: ["React", "JavaScript"],
    status: "Deploy em breve",
  },
  {
    nome: "DT Money",
    descricao: "Controle financeiro com React, Tailwind e TypeScript, consumindo API REST.",
    github: "https://github.com/CarlosWendel/DT-Money",
    tags: ["React", "TypeScript", "Tailwind"],
    status: "Deploy em breve",
  },
  {
    nome: "Barbearia Java",
    descricao: "Sistema acadêmico completo para barbearia desenvolvido em Java.",
    github: "https://github.com/CarlosWendel/Barbearia_java",
    tags: ["Java"],
    status: "Deploy em breve",
  },
  {
    nome: "Ignite Timer",
    descricao: "Pomodoro timer em React + TypeScript focado em produtividade.",
    github: "https://github.com/CarlosWendel/Ignite-Timer",
    tags: ["React", "TypeScript"],
    status: "Deploy em breve",
  },
]

const tagColors: Record<string, string> = {
  React:      "bg-cyan-950 text-cyan-400 border-cyan-800",
  TypeScript: "bg-blue-950 text-blue-400 border-blue-800",
  JavaScript: "bg-yellow-950 text-yellow-400 border-yellow-800",
  Tailwind:   "bg-teal-950 text-teal-400 border-teal-800",
  Java:       "bg-orange-950 text-orange-400 border-orange-800",
}

export function Projeto() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-10 pt-24 text-slate-200"
    >
      {/* Título */}
      <div className="max-w-6xl mx-auto">
        <div
          style={{
            transform: visible ? "translateY(0)" : "translateY(30px)",
            opacity: visible ? 1 : 0,
            transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, opacity 0.7s ease 0.1s",
          }}
        >
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Projetos
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="relative group bg-zinc-900 p-6 rounded-xl border border-zinc-800 overflow-hidden flex flex-col justify-between hover:border-violet-500/50 transition-colors duration-300"
              style={{
                transform: visible ? "translateY(0)" : "translateY(50px)",
                opacity: visible ? 1 : 0,
                transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.1}s, opacity 0.6s ease ${0.2 + index * 0.1}s`,
              }}
            >
              {/* Brilho no hover */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-violet-500 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Nome */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {projeto.nome}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {projeto.descricao}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded-full border ${tagColors[tag] ?? "bg-zinc-800 text-zinc-400 border-zinc-700"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rodapé */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-zinc-800">
                <span className="text-xs text-zinc-600">
                  {projeto.status}
                </span>
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <FiGithub size={15} />
                  Ver no GitHub
                  <FiExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}