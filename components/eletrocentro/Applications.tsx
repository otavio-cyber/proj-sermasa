import { Factory, Building2, Zap, Container } from "lucide-react"
import { Card } from "@/components/ui/card"

const applications = [
  {
    title: "Indústrias",
    description: "Ampliação de capacidade elétrica sem obras civis complexas",
    icon: Factory,
  },
  {
    title: "Mineração",
    description: "Infraestrutura elétrica móvel para frentes de trabalho",
    icon: Container,
  },
  {
    title: "Infraestrutura",
    description: "Subestações para canteiros de obras e projetos temporários",
    icon: Building2,
  },
  {
    title: "Energia",
    description: "Geração distribuída e sistemas de backup",
    icon: Zap,
  },
]

export default function Applications() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Aplicações</h2>
          <p className="mt-4 text-lg text-muted-foreground">Versatilidade para diversos segmentos industriais</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((item) => (
            <Card key={item.title} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
