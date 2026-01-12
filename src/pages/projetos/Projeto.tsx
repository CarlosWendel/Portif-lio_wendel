
export function Projeto() {
  const projetos = [
    "Projeto 1",
    "Projeto 2",
    "Projeto 3",
    "Projeto 4",
  ]

  return (
    <div id='project' className="min-h-screen px-10 text-amber-50">

      <section className="pt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-10">
          Projetos
        </h2>
      </section>


      <div className="grid grid-cols-2 gap-6">
        {projetos.map((nome, index) => (
          <div
            key={index}
            className="relative group bg-zinc-900 p-6 rounded-xl border border-zinc-700 overflow-hidden"
          >
            {/* Brilho do sol */}
            <div className="
            absolute inset-0 
            opacity-0 
            group-hover:opacity-100 
            transition
          ">
              <div className="
              absolute -top-10 -right-10 
              w-40 h-40 
              bg-yellow-400 
              rounded-full 
              blur-3xl 
              opacity-40
            " />
            </div>

            <h3 className="text-lg font-semibold text-white">
              {nome}
            </h3>

            <p className="text-sm text-zinc-400 mt-2">
              Em breve 🚀
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}