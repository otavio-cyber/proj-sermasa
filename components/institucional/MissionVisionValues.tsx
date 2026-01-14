import { Target, Eye, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function MissionVisionValues() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Missão */}
          <Card className="p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-foreground">Missão</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Fornecer soluções técnicas de excelência em automação e elétrica industrial, com segurança, confiabilidade
              e atendimento personalizado aos nossos clientes.
            </p>
          </Card>

          {/* Visão */}
          <Card className="p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-foreground">Visão</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ser reconhecida como líder em soluções integradas de automação e elétrica industrial, referência em
              inovação e qualidade no mercado nacional.
            </p>
          </Card>

          {/* Valores */}
          <Card className="p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-foreground">Valores</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• Ética e transparência</li>
              <li>• Qualidade técnica</li>
              <li>• Segurança em primeiro lugar</li>
              <li>• Inovação contínua</li>
              <li>• Compromisso com o cliente</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
