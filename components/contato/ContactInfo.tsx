import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground">Informações de Contato</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Nossa equipe está pronta para atender sua empresa com soluções personalizadas.
      </p>

      <div className="mt-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Endereço</h3>
            <p className="mt-1 text-sm text-muted-foreground">São Paulo, SP - Brasil</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Telefone</h3>
            <p className="mt-1 text-sm text-muted-foreground">+55 (11) 0000-0000</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">WhatsApp</h3>
            <p className="mt-1 text-sm text-muted-foreground">+55 (11) 90000-0000</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">E-mail</h3>
            <p className="mt-1 text-sm text-muted-foreground">contato@taf-sermasa.com.br</p>
            <p className="mt-1 text-sm text-muted-foreground">comercial@taf-sermasa.com.br</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Horário de Atendimento</h3>
            <p className="mt-1 text-sm text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-muted/50 p-6">
        <img src="/placeholder.svg?height=300&width=500" alt="Escritório TAF-SERMASA" className="w-full rounded-lg" />
      </div>
    </div>
  )
}
