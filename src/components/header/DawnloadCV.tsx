import { ArrowLineDownIcon   } from "@phosphor-icons/react";

export default function DownloadCV() {
  return (
    <a
      href="/Curriculo-Wendel.pdf"
      download="Curriculo_Desenvolvedor_FrontEnd_CarlsoWendel.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2  text-white rounded  transition-colors duration-300 flex items-center gap-2 border border-violet-400 hover:bg-violet-400 hover:text-white"
    >
      <ArrowLineDownIcon   size={20} />
        <span>Currículo</span>
    </a>
  );
}