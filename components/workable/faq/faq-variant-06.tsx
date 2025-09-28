"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { FAQ_ITEMS } from "./faq-data"

function Helpful({ id }: { id: string }) {
  const [state, setState] = useState<"idle" | "yes" | "no">("idle")
  if (state !== "idle") {
    return <p className="text-sm text-muted-foreground">Thanks for your feedback!</p>
  }
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Was this helpful?</span>
      <Button variant="outline" size="sm" onClick={() => setState("yes")}>
        Yes
      </Button>
      <Button variant="outline" size="sm" onClick={() => setState("no")}>
        No
      </Button>
    </div>
  )
}

export default function FAQVariant06() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold text-foreground mb-4">FAQ with Feedback</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {FAQ_ITEMS.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="rounded-md border border-border bg-card">
            <AccordionTrigger className="px-4 py-3">{faq.question}</AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-muted-foreground">
              <p className="mb-3">{faq.answer}</p>
              <Helpful id={faq.id} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
