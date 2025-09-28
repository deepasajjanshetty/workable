"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQ_ITEMS } from "./faq-data"

export default function FAQVariant08() {
  return (
    <section className="py-6">
      <h2 className="text-lg font-semibold text-foreground mb-2">FAQ (Compact)</h2>
      <Accordion type="single" collapsible className="space-y-2">
        {FAQ_ITEMS.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="rounded border border-border bg-card">
            <AccordionTrigger className="px-3 py-2 text-sm">{faq.question}</AccordionTrigger>
            <AccordionContent className="px-3 pb-3 text-sm text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
