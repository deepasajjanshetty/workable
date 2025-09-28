"use client"

import { FAQ_ITEMS } from "./faq-data"

export default function FAQVariant12() {
  return (
    <section className="py-10 space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">FAQ (Inline Q&A)</h2>
      <div className="space-y-6 rounded-md border border-border bg-card p-6">
        {FAQ_ITEMS.map((faq) => (
          <article key={faq.id} className="space-y-2">
            <h3 className="text-lg font-medium text-foreground">{faq.question}</h3>
            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
