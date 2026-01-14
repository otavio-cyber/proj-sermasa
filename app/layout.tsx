import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TAF-SERMASA | Soluções em Automação e Elétrica Industrial",
  description:
    "Especialistas em sistemas integrados de automação, painéis elétricos e soluções modulares para indústria e infraestrutura. Certificada ISO 9001.",
  keywords: "automação industrial, painéis elétricos, eletrocentro modular, engenharia elétrica, ISO 9001",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
