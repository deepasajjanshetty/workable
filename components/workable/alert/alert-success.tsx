import { CheckCircle2 } from "lucide-react"

export default function AlertSuccess() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        role="status"
        aria-live="polite"
        className="relative bg-card text-card-foreground border border-border rounded-xl p-4 shadow-[0_1px_6px_0_rgba(0,0,0,0.04)]"
      >
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-background">
            <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="sr-only">Success</span>
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-medium">Successful</h3>
            <p className="text-[13px] text-muted-foreground">Your changes have been saved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
