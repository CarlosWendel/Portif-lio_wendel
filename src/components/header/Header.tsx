import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 flex items-center
        transition-all duration-500 ease-in-out
        ${scrolled
          ? "bg-slate-950/80 backdrop-blur shadow-lg"
          : "bg-transparent"}
      `}
    >
      <span className="text-xl font-bold p-4 text-white">
        Wendel.dev
      </span>

      <nav className="ml-auto p-4 flex gap-8 text-white">
        <a href="#home" className="hover:text-violet-400">Home</a>
        <a href="#about" className="hover:text-violet-400">Sobre mim</a>
        <a href="#projects" className="hover:text-violet-400">Projetos</a>
        <a href="#contact" className="hover:text-violet-400">Contato</a>
      </nav>
    </header>
  );
}
