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
        relative min-h-screen
        px-6 md:px-12 lg:px-24 py-24  
        bg-black
        text-white
        overflow-hidden
      "
    >
      {/* Overlay de gradiente espacial */}
        <div
          className="
            absolute inset-0
            bg-lienar-to-b
            from-zinc-900/70
            via-black
            to-zinc-950
            pointer-events-none
          "
        />


      {/* Elementos de fundo futuristas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Cabeçalho com tema espacial */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Satellite className="w-8 h-8 text-cyan-400 animate-spin-slow" />
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Estação de Contato
            </h2>
            <Wifi className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Envie um sinal através do espaço digital. Estou pronto para decolar em novos projetos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coluna Esquerda: Canais de Contato */}
          <div className="space-y-8">
            <div className="bg-linear-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-yellow-400" />
                Canais de Transmissão
              </h3>

              <div className="space-y-6">
                <a
                  href="https://github.com/CarlosWendel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-black">
                    <Github className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-gray-400">Veja meus projetos cósmicos</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/carlos-wendel-71b9051b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-black">
                    <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-gray-400">Conecte-se profissionalmente</p>
                  </div>
                </a>

               <a
                href="mailto:wendelsilva0910@gmail.com?subject=Contato pelo Portfólio&body=Olá Wendel,%0D%0AVi seu portfólio e gostaria de conversar."
                className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300"
              >

                  <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-black">
                    <Mail className="w-6 h-6 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-400">wendelsilva0910@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Status da Estação */}
            <div className="bg-linear-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4 text-cyan-300">Status da Estação</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Sinal</span>
                  <span className="text-green-400 font-mono">● ATIVO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Resposta</span>
                  <span className="text-yellow-400 font-mono">≤ 24h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Órbita</span>
                  <span className="text-purple-400 font-mono">FRONT-END</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário */}
          <div className="bg-linear-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-purple-400" />
              Transmissão Direta
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-green-500 to-emerald-500 rounded-full mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-green-400 mb-2">Transmissão Enviada!</h4>
                <p className="text-gray-300">
                  Seu sinal foi recebido com sucesso. Retornarei o contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Seu Nome / Callsign
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Como devo te chamar?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Seu Email / Frequência
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Sua Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Descreva sua missão ou projeto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando Sinal...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Iniciar Transmissão
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Rodapé com toque futurista */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Sistema de comunicação interstelar • V.2.4.1 • Always receiving signals
          </p>
          <p className="text-gray-600 text-xs mt-2 font-mono">
            {new Date().getFullYear()} © Estação de Contato Interativo
          </p>
        </div>
      </div>
    </section>
  );
}