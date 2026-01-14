import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo e Slogan */}
          <div className="lg:col-span-1">
            <Image src="public/sermasataf.png" alt="TAF-SERMASA" width={180} height={24} className="h-8 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Soluções Inteligentes em Automação e Elétrica Industrial
            </p>
            <div className="mt-6">
              <img src="/iso-9001-certification-badge.jpg" alt="Certificação ISO 9001" className="h-12" />
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Links Rápidos</h4>
            <ul className="mt-4 space-y-2">
              {["Quem Somos", "Eletrocentro", "ECaaS", "Serviços", "Produtos", "Contato"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Contato</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>+55 (11) 0000-0000</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>contato@taf-sermasa.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Seg-Sex: 8h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Certificações */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Certificações & Políticas</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">ISO 9001:2015</li>
              <li className="text-sm text-muted-foreground">Sistema de Gestão da Qualidade</li>
              <li className="mt-4">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TAF-SERMASA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
