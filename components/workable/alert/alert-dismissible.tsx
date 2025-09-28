"use client"

import { Info, X } from "lucide-react"
import { useState } from "react"

export default function AlertDismissible() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-card text-card-foreground border border-border rounded-xl p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <div className="p-2 rounded-full bg-background">
              <Info className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="sr-only">Information</span>
            </div>
            <div className="space-y-0.5">
              <h3 className="text-sm font-medium">Tips enabled</h3>
              <p className="text-[13px] text-muted-foreground">You can turn off product tips in settings.</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="p-1 rounded-md hover:bg-muted" aria-label="Dismiss alert">
            <X className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
