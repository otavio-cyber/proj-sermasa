import { Card } from "@/components/ui/card"

const scenarios = [
  {
    title: "Expansão Industrial Urgente",
    challenge: "Necessidade de aumento de carga em 30 dias",
    solution: "Eletrocentro instalado e operacional em 15 dias",
  },
  {
    title: "Mineração Remota",
    challenge: "Local sem infraestrutura elétrica adequada",
    solution: "Unidade modular transportada e conectada",
  },
  {
    title: "Projeto Temporário",
    challenge: "Obra com prazo definido de 2 anos",
    solution: "Eletrocentro locado com opção de realocação",
  },
]

export default function Scenarios() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Cenários de Aplicação</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {scenarios.map((scenario) => (
            <Card key={scenario.title} className="p-6">
              <h3 className="text-lg font-bold text-foreground">{scenario.title}</h3>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-destructive">Desafio:</p>
                  <p className="text-sm text-muted-foreground">{scenario.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Solução:</p>
                  <p className="text-sm text-muted-foreground">{scenario.solution}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
