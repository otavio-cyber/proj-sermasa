import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/industrial-automation-factory-floor-with-electrica.jpg"
          alt="Automação Industrial"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Soluções Inteligentes em Automação e Elétrica Industrial
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Especialistas em sistemas integrados de automação, painéis elétricos e soluções modulares para indústria e
            infraestrutura. Combinamos tecnologia de ponta com expertise técnica para entregar projetos com
            confiabilidade, segurança e eficiência.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/servicos">
                Conheça Nossas Soluções
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
