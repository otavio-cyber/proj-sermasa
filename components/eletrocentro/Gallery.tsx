export default function Gallery() {
  const images = [
    { src: "/modular-electrical-substation-exterior-view.jpg", alt: "Eletrocentro Externo" },
    { src: "/electrical-switchgear-inside-modular-container.jpg", alt: "Painéis Internos" },
    { src: "/modular-substation-installation-site.jpg", alt: "Instalação no Local" },
    { src: "/electrical-transformer-and-distribution-panel.jpg", alt: "Transformador e Distribuição" },
  ]

  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Galeria de Projetos</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {images.map((image, index) => (
            <div key={index} className="aspect-video overflow-hidden rounded-lg">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
