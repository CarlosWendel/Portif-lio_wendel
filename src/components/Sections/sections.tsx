interface SectionProps {
  id: "about" | "projects" | "contact";
  title: string;
  children: React.ReactNode;
}

export function Sections({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="min-h-screen px-10 py-32">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}
