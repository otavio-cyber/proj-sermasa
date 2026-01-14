import { DollarSign, TrendingUp, Wrench, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "ECaaS - Eletrocentro como Serviço | TAF-SERMASA",
  description: "Infraestrutura elétrica como serviço, sem investimento inicial.",
}

export default function EcaasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary py-24">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1920"
            alt="ECaaS"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            ECaaS - Eletrocentro como Serviço
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Infraestrutura elétrica modular sem investimento inicial. Você paga apenas pelo uso, com manutenção e
            suporte inclusos.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Como Funciona</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <DollarSign className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Sem CAPEX</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Zero investimento inicial em equipamentos
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Instalação Rápida</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Implantação em até 15 dias</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Manutenção Inclusa</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Suporte técnico e manutenção preventiva
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Flexibilidade</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Contratos adaptáveis ao seu projeto</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">CAPEX vs. Serviço</h2>
              <div className="mt-8 space-y-6">
                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-6">
                  <h3 className="font-semibold text-foreground">Modelo Tradicional (CAPEX)</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• Alto investimento inicial</li>
                    <li>• Depreciação do ativo</li>
                    <li>• Custos de manutenção extras</li>
                    <li>• Baixa flexibilidade</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                  <h3 className="font-semibold text-foreground">ECaaS (Serviço)</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>✓ Pagamento mensal previsível</li>
                    <li>✓ Sem depreciação</li>
                    <li>✓ Manutenção incluída</li>
                    <li>✓ Escalável e relocável</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Comparativo CAPEX vs Serviço"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/contato">Solicite uma Proposta ECaaS</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
