import Link from "next/link"
import { Building2, Cpu, Cloud, Wrench, Package } from "lucide-react"
import { Card } from "@/components/ui/card"

const cards = [
  {
    title: "Quem Somos",
    description: "Conheça nossa história, missão e valores",
    icon: Building2,
    href: "/quem-somos",
    image: "/modern-industrial-building-exterior.jpg",
  },
  {
    title: "Eletrocentro Modular",
    description: "Solução modular para infraestrutura elétrica",
    icon: Cpu,
    href: "/eletrocentro",
    image: "/modular-electrical-substation-container.jpg",
  },
  {
    title: "ECaaS",
    description: "Eletrocentro como Serviço",
    icon: Cloud,
    href: "/ecaas",
    image: "/industrial-equipment-as-a-service-concept.jpg",
  },
  {
    title: "Serviços",
    description: "Engenharia, automação e instalações",
    icon: Wrench,
    href: "/servicos",
    image: "/electrical-engineer-working-on-industrial-control-.jpg",
  },
  {
    title: "Produtos",
    description: "Painéis e sistemas de automação",
    icon: Package,
    href: "/produtos",
    image: "/industrial-electrical-panels-and-switchgear.jpg",
  },
]

export default function NavigationCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Explore Nossas Soluções</h2>
          <p className="mt-4 text-lg text-muted-foreground">Soluções completas para sua indústria</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="group">
              <Card className="overflow-hidden border border-border transition-all hover:shadow-lg hover:border-primary/50">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
