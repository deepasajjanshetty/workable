import { Info } from "lucide-react"

export default function AlertQuiet() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="rounded-lg border border-border/60 bg-background p-3">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <span className="text-sm">Beta features are experimental.</span>
        </div>
      </div>
    </div>
  )
}
