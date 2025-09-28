"use client"

import { Fragment } from "react"
import { FAQ_ITEMS, CATEGORIES, type FAQCategory } from "./faq-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const byCategory = (cat: FAQCategory) => FAQ_ITEMS.filter((i) => i.category === cat)

export default function FAQVariant04() {
  const cats = Object.keys(CATEGORIES) as FAQCategory[]
  return (
    <section className="py-10 space-y-8">
      <h2 className="text-2xl font-semibold text-foreground">FAQ by Category</h2>
      {cats.map((cat) => (
        <Fragment key={cat}>
          <h3 className="text-lg font-medium text-foreground">{CATEGORIES[cat].label}</h3>
          <Accordion type="single" collapsible className="space-y-3">
            {byCategory(cat).map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="rounded-md border border-border bg-card">
                <AccordionTrigger className="px-4 py-3">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Fragment>
      ))}
    </section>
  )
}
