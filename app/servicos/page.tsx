import ServicesGrid from "@/components/servicos/ServicesGrid"

export const metadata = {
  title: "Serviços | TAF-SERMASA",
  description: "Engenharia elétrica, automação industrial, instrumentação e soluções turnkey.",
}

export default function ServicosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary py-24">
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Nossos Serviços</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Soluções completas em engenharia elétrica e automação industrial
          </p>
        </div>
      </section>
      <ServicesGrid />
    </>
  )
}
