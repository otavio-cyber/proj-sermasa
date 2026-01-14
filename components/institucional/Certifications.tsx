import { Award, FileCheck, Shield } from "lucide-react"

export default function Certifications() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Certificações e Conformidades</h2>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Nossos processos e projetos atendem às mais rigorosas normas técnicas e regulamentações do setor elétrico
              e industrial.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-white flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">ISO 9001:2015</h3>
                  <p className="mt-1 text-sm text-white/80">Sistema de Gestão da Qualidade certificado</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FileCheck className="h-8 w-8 text-white flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Normas Técnicas</h3>
                  <p className="mt-1 text-sm text-white/80">NBR, IEC e ABNT aplicadas rigorosamente</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-white flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Segurança</h3>
                  <p className="mt-1 text-sm text-white/80">NR-10 e procedimentos de segurança implementados</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="/quality-certification-documents-and-industrial-saf.jpg" alt="Certificações" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
