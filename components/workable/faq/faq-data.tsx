"use client"

import { Badge } from "@/components/ui/badge"

export type FAQCategory = "getting-started" | "billing" | "features" | "support"

export interface FAQItem {
  id: string
  category: FAQCategory
  question: string
  answer: string
}

export const CATEGORIES: Record<FAQCategory, { label: string }> = {
  "getting-started": { label: "Getting Started" },
  billing: { label: "Billing" },
  features: { label: "Features" },
  support: { label: "Support" },
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "getting-started-1",
    category: "getting-started",
    question: "How do I get started with the platform?",
    answer: "Sign up for an account and follow our quick setup guide. We’ll walk you through each step.",
  },
  {
    id: "billing-1",
    category: "billing",
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and bank transfers via our payment partners.",
  },
  {
    id: "features-1",
    category: "features",
    question: "What are the key features?",
    answer: "Real-time analytics, collaboration tools, automated workflows, and customizable dashboards.",
  },
  {
    id: "support-1",
    category: "support",
    question: "How can I get help?",
    answer: "Our support team is available 24/7 via help center, email, or live chat. Typical response time: 2 hours.",
  },
]

export function CategoryBadge({ category }: { category: FAQCategory }) {
  return (
    <Badge
      // keep neutral theme tokens for color accessibility
      variant="secondary"
      className="mr-2 font-normal bg-muted text-muted-foreground"
    >
      {CATEGORIES[category].label}
    </Badge>
  )
}

export function filterFaqs(items: FAQItem[], query: string, category: FAQCategory | "all") {
  const q = query.toLowerCase()
  return items.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
    const matchesCategory = category === "all" || item.category === category
    return matchesSearch && matchesCategory
  })
}
