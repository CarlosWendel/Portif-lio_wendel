import { useState } from 'react'
import { Mail, Github, Linkedin, Send, Rocket, Satellite, Wifi } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useReveal } from "../../components/hooks/useReveal"

export function Contato() {
  const { ref, visible } = useReveal()

  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const anim = (delay: string): React.CSSProperties => ({
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    opacity: visible ? 1 : 0,
    transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}, opacity 0.7s ease ${delay}`,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await emailjs.send(
        'service_s9dp6fn',
        'template_xbyepcr',
        { nome: formData.nome, email: formData.email, mensagem: formData.mensagem },
        'nAy-Z4TtOMwbHRY6k'
      )
      setIsSubmitted(true)
      setFormData({ nome: '', email: '', mensagem: '' })
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.')
      console.error(error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setIsSubmitted(false), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section
      id="contato"
      className="relative px-4 md:px-10 pt-16 md:pt-24 pb-12 text-white overflow-hidden"
    >
      {/* ✅ Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-black to-zinc-950 pointer-events-none" />

      {/* ✅ Blobs SEM posição negativa — não causam mais overflow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-56 h-56 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-12" style={anim('0.1s')}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Satellite className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Estação de Contato
            </h2>
            <Wifi className="w-6 h-6 md:w-8 md:h-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Envie um sinal através do espaço digital. Estou pronto para novos projetos!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Canais */}
          <div style={anim('0.25s')}>
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                <Rocket className="w-5 h-5 text-yellow-400" />
                Canais de Transmissão
              </h3>

              <div className="space-y-4">
                <a
                  href="https://github.com/CarlosWendel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-cyan-400/50 transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-gray-800 group-hover:bg-black transition-colors">
                    <Github className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">GitHub</p>
                    <p className="text-xs md:text-sm text-gray-400">Projetos e códigos</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-blue-400/50 transition-all"
                >
                
                  <div className="p-2.5 rounded-lg bg-gray-800 group-hover:bg-black transition-colors">
                    <Linkedin className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">LinkedIn</p>
                    <p className="text-xs md:text-sm text-gray-400">Conexão profissional</p>
                  </div>
                </a>

                <a
                  href="mailto:wendelsilva0910@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-yellow-400/50 transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-gray-800 group-hover:bg-black transition-colors">
                    <Mail className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">Email</p>
                    <p className="text-xs md:text-sm text-gray-400">wendelsilva0910@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div style={anim('0.4s')}>
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                <Send className="w-5 h-5 text-purple-400" />
                Transmissão Direta
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <Rocket className="w-12 h-12 text-green-400 animate-bounce" />
                  <p className="text-green-400 text-center font-semibold text-lg">
                    Mensagem enviada com sucesso!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none text-sm md:text-base placeholder:text-gray-500 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base placeholder:text-gray-500 transition"
                  />
                  <textarea
                    name="mensagem"
                    rows={5}
                    placeholder="Sua mensagem"
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none text-sm md:text-base placeholder:text-gray-500 transition"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 md:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem 🚀'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}