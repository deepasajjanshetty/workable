import { Info } from "lucide-react"

export default function AlertWithCta() {
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
              <h3 className="text-sm font-medium">Upgrade available</h3>
              <p className="text-[13px] text-muted-foreground">Get more seats and higher limits with Pro.</p>
            </div>
          </div>
          <button className="px-3 py-1.5 text-xs rounded-md bg-primary text-primary-foreground">Upgrade</button>
        </div>
      </div>
    </div>
  )
}
