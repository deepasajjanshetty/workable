"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQ_ITEMS } from "./faq-data"

export default function FAQVariant03() {
  return (
    <section className="py-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">FAQ (Minimal)</h2>
        <p className="text-muted-foreground">Quick answers at a glance.</p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="mt-6 divide-y divide-border rounded-md border border-border bg-card"
      >
        {FAQ_ITEMS.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="px-4">
            <AccordionTrigger className="py-4 text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
