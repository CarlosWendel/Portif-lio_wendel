interface SectionProps {
  id: "about" | "projects" | "contact";
  title: string;
  children: React.ReactNode;
}

export function Sections({ id, title, children }: SectionProps) {
  const isLastSection = id === "contact";

  return (
    <section
      id={id}
      className={`
        px-6 md:px-10
        ${isLastSection ? "pt-20 pb-0" : "py-20"}
      `}
    >
      {title && (
        <h2 className="text-3xl font-bold mb-10 text-white">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}
