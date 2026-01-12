import { useState } from "react";


export function ContadorPalavras() {
  const [text, setText] = useState("");

  const palavras = text.trim() ? text.trim().split(/\s+/).length : 0;



  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
      <h2 className="text-xl font-semibold text-white mb-4">
        Contador de Palavras
      </h2>

      <textarea
        className="
          w-full h-40
          bg-zinc-900
          text-zinc-100
          p-4
          rounded-xl
          outline-none
          resize-none
          border border-zinc-700

          focus:border-yellow-400
          focus:ring-2
          focus:ring-yellow-400/30

          transition
        "
        placeholder="Digite algo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />


      <div className="flex justify-between text-zinc-400 mt-4">
        <span>Palavras: {palavras}</span>
        <span>Caracteres: {text.length}</span>
      </div>
    </div>
  )
}