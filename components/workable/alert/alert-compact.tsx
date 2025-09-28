import { Info } from "lucide-react"

export default function AlertCompact() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-card text-card-foreground border border-border rounded-lg p-3">
        <div className="flex gap-2 items-center">
          <Info className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <p className="text-xs text-muted-foreground">Maintenance window scheduled for Sunday 2:00-3:00 AM UTC.</p>
        </div>
      </div>
    </div>
  )
}
