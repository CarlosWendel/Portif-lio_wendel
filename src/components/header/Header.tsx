import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import imgLogo from "../../assets/logo1.png";
import DawnloadCV from "./DawnloadCV";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Sobre mim" },
    { href: "#projects", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-500
        ${scrolled ? "bg-slate-950/80 backdrop-blur shadow-lg" : "bg-transparent"}
      `}
    >
      {/* wrapper precisa ser relative */}
        <div className="relative w-full">
        <div className="max-w-7xl mx-auto flex items-center px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center  gap-2 px-6 text-xl font-bold text-white hover:text-violet-400"
        >
          <img src={imgLogo} alt="WendelDev logo" className="w-14 h-14" />
          WendelDev
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-8 text-white ml-auto ">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-violet-400"
            >
              {label}
            </a>
          ))}
          <DawnloadCV />
        </nav>

        {/* Botão mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto text-white z-50"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu mobile */}
        {menuOpen && (
          <nav
            className="
              md:hidden
              absolute
              top-full
              inset-x-0
              z-40
              bg-slate-950/95
              backdrop-blur
              px-6
              py-6
              flex
              flex-col
              gap-4
              text-white
              items-end
            "
          >
            
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="hover:text-violet-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div onClick={()=> setMenuOpen(false)}>
                <DawnloadCV />
              </div>
            
            
          </nav>
        )}
      </div>
      </div>
    </header>
  );
}
