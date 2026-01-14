import { Cpu, Zap, Gauge, Wrench, CheckCircle, Package } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    title: "Engenharia Elétrica",
    description:
      "Projetos de instalações elétricas industriais, dimensionamento de cargas, estudos de curto-circuito e seletividade.",
    icon: Zap,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Automação Industrial",
    description: "Sistemas SCADA, CLPs, IHMs, redes industriais e integração de processos automatizados.",
    icon: Cpu,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Instrumentação",
    description: "Especificação, instalação e calibração de sensores, transmissores e analisadores industriais.",
    icon: Gauge,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Instalações Elétricas",
    description: "Montagem de painéis, instalação de equipamentos, infraestrutura elétrica completa.",
    icon: Wrench,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Comissionamento",
    description: "Testes funcionais, validação de sistemas, startup assistido e treinamento operacional.",
    icon: CheckCircle,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Turnkey",
    description: "Gestão completa do projeto: da engenharia à entrega final, incluindo fornecimento e instalação.",
    icon: Package,
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
