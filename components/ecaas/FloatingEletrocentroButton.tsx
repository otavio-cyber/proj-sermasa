"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FloatingEletrocentroButton() {
  return (
    <div
      className="
        fixed z-[60]
        right-6 top-[180px]
        max-lg:top-auto max-lg:bottom-4 max-lg:right-4
      "
    >
      <Button
        asChild
        className="
          h-20 w-20
          p-0
          flex items-center justify-center
          text-center
          leading-tight
          shadow-md
          transition-all duration-200 ease-out
          hover:-translate-y-0.5
          hover:shadow-lg
        "
      >
        <Link
          href="/eletrocentro"
          className="flex flex-col items-center justify-center text-xs"
        >
          <span className="font-normal">
            Voltar para
          </span>
          <span className="font-semibold">
            Eletrocentro
          </span>
        </Link>
      </Button>
    </div>
  )
}
