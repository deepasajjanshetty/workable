"use client"

import { useState } from "react"
import { FAQ_ITEMS } from "./faq-data"
import { cn } from "@/lib/utils"

export default function FAQVariant09() {
  const [openId, setOpenId] = useState<string | null>(null)
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold text-foreground mb-4">FAQ (Cards Grid)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FAQ_ITEMS.map((faq) => {
          const open = openId === faq.id
          return (
            <button
              key={faq.id}
              onClick={() => setOpenId(open ? null : faq.id)}
              className={cn(
                "text-left rounded-md border border-border bg-card p-4 transition-colors",
                open && "bg-accent",
              )}
              aria-expanded={open}
              aria-controls={`answer-${faq.id}`}
            >
              <div className="font-medium text-foreground">{faq.question}</div>
              <div
                id={`answer-${faq.id}`}
                className={cn("mt-2 text-muted-foreground leading-relaxed", !open && "hidden")}
              >
                {faq.answer}
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
