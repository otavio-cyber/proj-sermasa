import { Clock, DollarSign, Wrench, Truck, Shield, Recycle } from "lucide-react"

const advantages = [
  { title: "Instalação Rápida", description: "Redução de 60% no tempo de implantação", icon: Clock },
  { title: "Custo-Benefício", description: "Menor investimento inicial comparado a obras civis", icon: DollarSign },
  { title: "Manutenção Facilitada", description: "Acesso simplificado a todos os componentes", icon: Wrench },
  { title: "Mobilidade", description: "Possibilidade de realocação conforme necessidade", icon: Truck },
  { title: "Segurança", description: "Proteção integrada e conformidade com normas", icon: Shield },
  { title: "Sustentabilidade", description: "Redução de resíduos e impacto ambiental", icon: Recycle },
]

export default function Advantages() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Vantagens do Eletrocentro</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
