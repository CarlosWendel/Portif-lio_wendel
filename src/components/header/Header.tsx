import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import imgLogo from "../../assets/logo1.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${scrolled ? "bg-slate-950/80 backdrop-blur shadow-lg" : "bg-transparent"}
      `}
    >
      {/* wrapper relative */}
      <div className="relative">

        {/* linha do header */}
        <div className="max-w-7xl mx-auto flex items-center px-6 py-4">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-xl font-bold text-white hover:text-violet-400"
          >
            <img src={imgLogo} alt="WendelDev logo" className="w-20 h-20" />
            WendelDev
          </a>

          {/* Menu desktop */}
          <nav className="hidden md:flex gap-8 text-white ml-auto">
            <a href="#home" className="hover:text-violet-400">Home</a>
            <a href="#about" className="hover:text-violet-400">Sobre mim</a>
            <a href="#projects" className="hover:text-violet-400">Projetos</a>
            <a href="#contact" className="hover:text-violet-400">Contato</a>
          </nav>

          {/* Botão mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-auto text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu mobile */}
        <nav
          className={`
            md:hidden
            absolute top-full left-0 w-full
            bg-slate-950/95 backdrop-blur
            flex flex-col gap-4
            px-6 py-6
            text-white
            items-end text-right

            transition-all duration-300 ease-out
            origin-top

            ${menuOpen
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
        `}
        >
          <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
          <a onClick={() => setMenuOpen(false)} href="#about">Sobre mim</a>
          <a onClick={() => setMenuOpen(false)} href="#projects">Projetos</a>
          <a onClick={() => setMenuOpen(false)} href="#contact">Contato</a>
        </nav>

      </div>
    </header>
  );
}
