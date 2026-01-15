import { useState } from 'react';
import { Mail, Github, Linkedin, Send, Rocket, Satellite, Wifi } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_s9dp6fn',
        'template_xbyepcr',
        {
          nome: formData.nome,
          email: formData.email,
          mensagem: formData.mensagem,
        },
        'nAy-Z4TtOMwbHRY6k'
      );

      setIsSubmitted(true);
      setFormData({ nome: '', email: '', mensagem: '' });
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contato"
      className="
        relative
        px-6 md:px-12 lg:px-24
        pt-16 md:pt-24
        pb-8 md:pb-12
        bg-black
        text-white
        overflow-hidden
      "
    >
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-900/70 via-black to-zinc-950 pointer-events-none" />

      {/* Blobs RESPONSIVOS (corrigidos) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            -top-32 -right-32
            w-56 h-56
            md:-top-40 md:-right-40
            md:w-80 md:h-80
            bg-purple-500/10
            rounded-full
            blur-3xl
          "
        />
        <div
          className="
            absolute
            -bottom-32 -left-32
            w-56 h-56
            md:-bottom-40 md:-left-40
            md:w-80 md:h-80
            bg-blue-500/10
            rounded-full
            blur-3xl
          "
        />
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Satellite className="w-8 h-8 text-cyan-400 animate-spin-slow" />
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Estação de Contato
            </h2>
            <Wifi className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Envie um sinal através do espaço digital. Estou pronto para novos projetos!
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coluna esquerda */}
          <div className="space-y-8 w-full">
            <div className="w-full bg-linear-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-yellow-400" />
                Canais de Transmissão
              </h3>

              <div className="space-y-6">
                <a
                  href="https://github.com/CarlosWendel"
                  target="_blank"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-cyan-400/50 transition-all"
                >
                  <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-black">
                    <Github className="w-6 h-6 group-hover:text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-gray-400">Projetos e códigos</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-blue-400/50 transition-all"
                >
                  <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-black">
                    <Linkedin className="w-6 h-6 group-hover:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-gray-400">Conexão profissional</p>
                  </div>
                </a>

                <a
                  href="mailto:wendelsilva0910@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-yellow-400/50 transition-all"
                >
                  <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-black">
                    <Mail className="w-6 h-6 group-hover:text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-400">wendelsilva0910@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="w-full bg-linear-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-purple-400" />
              Transmissão Direta
            </h3>

            {isSubmitted ? (
              <p className="text-green-400 text-center py-12 font-semibold">
                Mensagem enviada com sucesso 🚀
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <textarea
                  name="mensagem"
                  rows={5}
                  placeholder="Sua mensagem"
                  required
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-linear-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold hover:scale-[1.02] transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
