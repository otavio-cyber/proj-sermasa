import { Zap, Box, Server, Shield } from "lucide-react"

const products = [
  {
    title: "Painéis de Baixa Tensão",
    description: "CCMs, QGBTs, painéis de distribuição e proteção até 690V.",
    specs: ["Até 690V", "Norma IEC 61439", "Proteção IP54/IP65"],
    icon: Zap,
    image: "/placeholder.svg?height=500&width=700",
  },
  {
    title: "Painéis de Média Tensão",
    description: "Cubículos isolados a ar, metal-clad, switchgear de 13,8kV a 36kV.",
    specs: ["13,8kV a 36kV", "Norma IEC 62271", "Tipo Metal-Clad"],
    icon: Shield,
    image: "/placeholder.svg?height=500&width=700",
  },
  {
    title: "Sistemas de Automação",
    description: "Painéis de automação com CLPs, IHMs e sistemas supervisórios.",
    specs: ["CLPs Siemens/Allen-Bradley", "Redes Profinet/Ethernet IP", "SCADA integrado"],
    icon: Server,
    image: "/placeholder.svg?height=500&width=700",
  },
  {
    title: "Cubículos e CCMs",
    description: "Centros de controle de motores modulares e customizados.",
    specs: ["Modular", "Gavetas extraíveis", "Proteção IP41/IP54"],
    icon: Box,
    image: "/placeholder.svg?height=500&width=700",
  },
]

export default function ProductsGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`grid grid-cols-1 gap-8 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{product.title}</h3>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground">Especificações:</h4>
                  <ul className="mt-2 space-y-1">
                    {product.specs.map((spec) => (
                      <li key={spec} className="text-sm text-muted-foreground">
                        • {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
