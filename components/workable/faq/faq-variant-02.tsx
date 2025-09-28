"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { FAQ_ITEMS, type FAQCategory, CATEGORIES, filterFaqs, CategoryBadge } from "./faq-data"
import { cn } from "@/lib/utils"

export default function FAQVariant02() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<FAQCategory | "all">("all")
  const items = filterFaqs(FAQ_ITEMS, query, category)

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 bg-card border border-border rounded-md p-4">
          <h3 className="text-sm font-semibold text-foreground mb-3">Filter</h3>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              aria-label="Search FAQs"
              placeholder="Search..."
              className="pl-9"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className={cn("cursor-pointer", category === "all" && "bg-primary text-primary-foreground")}
              onClick={() => setCategory("all")}
            >
              All
            </Badge>
            {Object.entries(CATEGORIES).map(([key, { label }]) => (
              <Badge
                key={key}
                variant="secondary"
                className={cn("cursor-pointer", category === key && "bg-primary text-primary-foreground")}
                onClick={() => setCategory(key as FAQCategory)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </aside>

        <main className="md:col-span-3">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-md bg-card">
                <AccordionTrigger className="px-4 py-3">
                  <div className="flex flex-col items-start gap-2 text-left">
                    <CategoryBadge category={faq.category} />
                    <span className="text-base font-medium text-foreground">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {items.length === 0 && <p className="text-center text-muted-foreground mt-6">No results.</p>}
        </main>
      </div>
    </section>
  )
}
