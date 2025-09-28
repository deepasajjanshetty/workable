"use client"

import { FAQ_ITEMS } from "./faq-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQVariant10() {
  const gettingStarted = FAQ_ITEMS.filter((i) => i.category === "getting-started")
  const others = FAQ_ITEMS.filter((i) => i.category !== "getting-started")

  return (
    <section className="py-10 space-y-6">
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Getting Started</h3>
        <Accordion type="single" collapsible className="space-y-2">
          {gettingStarted.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-md">
              <AccordionTrigger className="px-4 py-3">{faq.question}</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-2">More Questions</h3>
        <Accordion type="single" collapsible className="space-y-2">
          {others.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-md bg-card">
              <AccordionTrigger className="px-4 py-3">{faq.question}</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
