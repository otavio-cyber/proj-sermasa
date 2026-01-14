import ProductsGrid from "@/components/produtos/ProductsGrid"

export const metadata = {
  title: "Produtos | TAF-SERMASA",
  description: "Painéis elétricos, sistemas de automação e cubículos para baixa e média tensão.",
}

export default function ProdutosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary py-24">
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Nossos Produtos</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Equipamentos de alta qualidade para infraestrutura elétrica industrial
          </p>
        </div>
      </section>
      <ProductsGrid />
    </>
  )
}
