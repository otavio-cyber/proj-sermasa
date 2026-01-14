import Intro from "@/components/institucional/Intro"
import MissionVisionValues from "@/components/institucional/MissionVisionValues"
import QualityPolicy from "@/components/institucional/QualityPolicy"
import StrategicGuidelines from "@/components/institucional/StrategicGuidelines"
import Certifications from "@/components/institucional/Certifications"

export const metadata = {
  title: "Quem Somos | TAF-SERMASA",
  description: "Conheça a TAF-SERMASA, nossa missão, visão, valores e certificações ISO 9001.",
}

export default function QuemSomosPage() {
  return (
    <>
      <Intro />
      <MissionVisionValues />
      <QualityPolicy />
      <StrategicGuidelines />
      <Certifications />
    </>
  )
}
