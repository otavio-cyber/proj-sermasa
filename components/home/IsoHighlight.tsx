import { Award, Shield, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IsoHighlight() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src="/iso-9001-quality-certificate-on-industrial-backgro.jpg"
                alt="Certificação ISO 9001"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-lg bg-primary p-6 text-white shadow-lg">
              <Award className="h-12 w-12" />
              <p className="mt-2 text-sm font-semibold">ISO 9001:2015</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Certificação ISO 9001:2015
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Nossa certificação ISO 9001 comprova nosso compromisso com a excelência em qualidade, processos rigorosos
              e melhoria contínua. Garantimos que cada projeto atenda aos mais altos padrões técnicos e de segurança.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Qualidade Assegurada</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Processos validados e auditados regularmente</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Melhoria Contínua</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Compromisso com inovação e aperfeiçoamento constante
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild>
                <Link href="/quem-somos">Saiba Mais Sobre Nós</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
