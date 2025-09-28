"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FAQ_ITEMS, CATEGORIES, type FAQCategory } from "./faq-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export default function FAQVariant11() {
  const [tab, setTab] = useState<FAQCategory>("getting-started")
  const items = FAQ_ITEMS.filter((i) => i.category === tab)

  return (
    <section className="py-10 space-y-6">
      <div className="flex flex-wrap gap-2">
        {(Object.keys(CATEGORIES) as FAQCategory[]).map((cat) => (
          <Button
            key={cat}
            variant="outline"
            className={cn(tab === cat && "bg-primary text-primary-foreground")}
            onClick={() => setTab(cat)}
            aria-pressed={tab === cat}
          >
            {CATEGORIES[cat].label}
          </Button>
        ))}
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {items.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="rounded-md border border-border bg-card">
            <AccordionTrigger className="px-4 py-3">{faq.question}</AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
