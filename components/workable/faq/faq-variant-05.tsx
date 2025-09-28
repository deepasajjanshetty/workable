"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { FAQ_ITEMS } from "./faq-data"

export default function FAQVariant05() {
  const [open, setOpen] = useState<string[]>([])

  const expandAll = () => setOpen(FAQ_ITEMS.map((i) => i.id))
  const collapseAll = () => setOpen([])

  return (
    <section className="py-10 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">FAQ (Multi-expand)</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={expandAll} aria-label="Expand all FAQs">
            Expand all
          </Button>
          <Button onClick={collapseAll} aria-label="Collapse all FAQs">
            Collapse all
          </Button>
        </div>
      </div>
      <Accordion type="multiple" value={open} onValueChange={setOpen} className="space-y-3">
        {FAQ_ITEMS.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="rounded-md border border-border bg-card">
            <AccordionTrigger className="px-4 py-3">{faq.question}</AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
