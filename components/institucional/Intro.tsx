export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24">
      <div className="absolute inset-0">
        <img
          src="/industrial-facility-aerial-view.jpg"
          alt="Instalações Industriais"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Quem Somos</h1>
        <p className="mt-6 text-lg leading-relaxed text-white/90">
          A TAF-SERMASA é referência em soluções de automação industrial e engenharia elétrica, com expertise
          consolidada na execução de projetos complexos para diversos segmentos industriais.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-white/90">
          Com certificação ISO 9001, atuamos com foco em qualidade, segurança e inovação tecnológica.
        </p>
      </div>
    </section>
  )
}
