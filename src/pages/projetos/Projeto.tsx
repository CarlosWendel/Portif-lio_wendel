
export function Projeto() {
  const projetos = [
    {
      nome: "WendelDog's",
      descricao: "Projeto em React + javascript focado em lógica e moblie.",
      github: "https://github.com/CarlosWendel/WendelDog-s",
      status: "Deploy em breve",
    },
    {
      nome: "DT Money",
      descricao: "Projeto pessoal com React, Tailwind e typeScipt com cosumo de API.",
      github: "https://github.com/CarlosWendel/DT-Money",
      status: "Deploy em breve",
    },
     {
      nome: "Barbearia Java",
      descricao: "Projeto acadêmico de sistema para barbearia utilizando Java.",
      github: "https://github.com/CarlosWendel/Barbearia_java",
      status: "Deploy em breve",
    },
   {
      nome: "Ignite Timer",
      descricao: "Projeto em React + TypeScript focado em produtividade.",
      github: "https://github.com/CarlosWendel/Ignite-Timer",
      status: "Deploy em breve",
    },
  ]


  return (
    <div id='project' className="min-h-screen px-10 text-amber-50">

      <section className="pt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-10">
          Projetos
        </h2>
      </section>


      <div className="grid grid-cols-2 gap-6">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="relative group bg-zinc-900 p-6 rounded-xl border border-zinc-700 overflow-hidden"
          >
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition" />

            <h3 className="text-lg font-semibold text-white">
              {projeto.nome}
            </h3>

            <p className="text-sm text-zinc-400 mt-2">
              {projeto.descricao}
            </p>

            <a
              href={projeto.github}
              target="_blank"
              className="inline-block mt-4 text-yellow-400 hover:underline"
            >
              Ver no GitHub →
            </a>

            <span className="block mt-2 text-xs text-zinc-500">
              {projeto.status}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}