"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQ_ITEMS } from "./faq-data"

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function highlight(text: string, query: string) {
  if (!query) return text
  const escaped = escapeRegExp(query)
  const parts = text.split(new RegExp(`(${escaped})`, "ig"))
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-primary/20 text-foreground rounded px-0.5">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export default function FAQVariant07() {
  const [query, setQuery] = useState("")
  const items = useMemo(() => {
    const q = query.toLowerCase()
    return FAQ_ITEMS.filter((i) => i.question.toLowerCase().includes(q) || i.answer.toLowerCase().includes(q))
  }, [query])

  return (
    <section className="py-10">
      <div className="relative max-w-xl mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          aria-label="Search FAQs"
          placeholder="Search and see highlights..."
          className="pl-9"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="rounded-md border border-border bg-card">
            <AccordionTrigger className="px-4 py-3">
              <span className="text-left">{highlight(faq.question, query)}</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-muted-foreground">
              <p>{highlight(faq.answer, query)}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {items.length === 0 && <p className="text-muted-foreground mt-6">No matches.</p>}
    </section>
  )
}
