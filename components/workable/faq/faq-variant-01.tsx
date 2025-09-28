"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { FAQ_ITEMS, type FAQCategory, CategoryBadge, filterFaqs, CATEGORIES } from "./faq-data"

export default function FAQVariant01() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<FAQCategory | "all">("all")
  const items = filterFaqs(FAQ_ITEMS, query, category)

  return (
    <section className="py-10 bg-background rounded-lg border border-border" aria-labelledby="faq-v1">
      <div className="px-6 space-y-6">
        <div className="text-center">
          <h2 id="faq-v1" className="text-3xl font-bold text-foreground text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">Search or browse by category</p>
        </div>

        <div className="grid gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              aria-label="Search FAQs"
              placeholder="Search FAQs..."
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
            {Object.keys(CATEGORIES).map((key) => (
              <Badge
                key={key}
                variant="secondary"
                className={cn(
                  "cursor-pointer",
                  category === (key as FAQCategory) && "bg-primary text-primary-foreground",
                )}
                onClick={() => setCategory(key as FAQCategory)}
              >
                {CATEGORIES[key as FAQCategory].label}
              </Badge>
            ))}
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="rounded-md border border-border bg-card">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex flex-col items-start gap-2 text-left">
                  <CategoryBadge category={faq.category} />
                  <span className="text-base font-medium text-foreground">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {items.length === 0 && <p className="text-center text-muted-foreground">No FAQs found.</p>}
      </div>
    </section>
  )
}
