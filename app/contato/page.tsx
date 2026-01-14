import ContactInfo from "@/components/contato/ContactInfo"
import ContactForm from "@/components/contato/ContactForm"

export const metadata = {
  title: "Contato | TAF-SERMASA",
  description: "Entre em contato com a TAF-SERMASA para soluções em automação e elétrica industrial.",
}

export default function ContatoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary py-24">
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Entre em Contato</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Fale com nossos especialistas e descubra a melhor solução para seu projeto
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
