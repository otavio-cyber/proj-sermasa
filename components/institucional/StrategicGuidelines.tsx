import { Lightbulb, Users, TrendingUp, Shield } from "lucide-react"

const guidelines = [
  {
    title: "Inovação Tecnológica",
    description: "Investimento contínuo em tecnologias de ponta e capacitação técnica",
    icon: Lightbulb,
  },
  {
    title: "Desenvolvimento de Equipes",
    description: "Formação e valorização de profissionais altamente qualificados",
    icon: Users,
  },
  {
    title: "Crescimento Sustentável",
    description: "Expansão planejada com responsabilidade ambiental e social",
    icon: TrendingUp,
  },
  {
    title: "Excelência Operacional",
    description: "Processos otimizados com foco em segurança e qualidade",
    icon: Shield,
  },
]

export default function StrategicGuidelines() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Diretrizes Estratégicas</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guidelines.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
