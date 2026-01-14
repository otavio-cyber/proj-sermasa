import Definition from "@/components/eletrocentro/Definition"
import Applications from "@/components/eletrocentro/Applications"
import Advantages from "@/components/eletrocentro/Advantages"
import Scenarios from "@/components/eletrocentro/Scenarios"
import Gallery from "@/components/eletrocentro/Gallery"

export const metadata = {
  title: "Eletrocentro Modular | TAF-SERMASA",
  description: "Solução modular de infraestrutura elétrica completa, pronta para instalação.",
}

export default function EletrocentroPage() {
  return (
    <>
      <Definition />
      <Applications />
      <Advantages />
      <Scenarios />
      <Gallery />
    </>
  )
}
