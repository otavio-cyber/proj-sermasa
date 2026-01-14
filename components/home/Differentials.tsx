import { CheckCircle2, Users, Handshake, Package, Headphones } from "lucide-react"

const differentials = [
  {
    title: "Projetos Customizados",
    description: "Soluções sob medida para cada necessidade",
    icon: CheckCircle2,
  },
  {
    title: "Equipe Técnica Especializada",
    description: "Profissionais certificados e experientes",
    icon: Users,
  },
  {
    title: "Parcerias Estratégicas",
    description: "Colaboração com líderes do mercado",
    icon: Handshake,
  },
  {
    title: "Turnkey",
    description: "Projetos completos, do início ao fim",
    icon: Package,
  },
  {
    title: "Suporte Pós-Entrega",
    description: "Assistência técnica contínua",
    icon: Headphones,
  },
]

export default function Differentials() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Por que escolher a TAF-SERMASA?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Diferenciais que garantem excelência em cada projeto</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {differentials.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
