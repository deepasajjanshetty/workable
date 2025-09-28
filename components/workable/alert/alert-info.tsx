import { Info } from "lucide-react"

export default function AlertInfo() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-card text-card-foreground border border-border rounded-xl p-4">
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-background">
            <Info className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="sr-only">Information</span>
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-medium">New update available</h3>
            <p className="text-[13px] text-muted-foreground">
              Version 2.3 adds performance improvements and bug fixes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
