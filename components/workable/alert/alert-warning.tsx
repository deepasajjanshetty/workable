import { AlertTriangle } from "lucide-react"

export default function AlertWarning() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-card text-card-foreground border border-border rounded-xl p-4">
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-muted">
            <AlertTriangle className="h-6 w-6 text-accent-foreground" aria-hidden="true" />
            <span className="sr-only">Warning</span>
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-medium">Heads up</h3>
            <p className="text-[13px] text-muted-foreground">Your plan is nearing its usage limit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
