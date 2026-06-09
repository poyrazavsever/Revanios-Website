import { NAV_LINKS } from "@/config/links";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero placeholder */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">Neta'ya Hoş Geldiniz</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">Freelance projelerinizi ve müşterilerinizi tek bir platformdan yönetin.</p>
      </section>

      {/* Sections for navigation */}
      {NAV_LINKS.map((item) => (
        <section
          key={item.id}
          id={item.id}
          className="min-h-screen flex items-center justify-center border-t border-border px-4"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{item.label} Bölümü</h2>
            <p className="text-muted-foreground">İçerik buraya gelecek...</p>
          </div>
        </section>
      ))}
    </div>
  );
}
