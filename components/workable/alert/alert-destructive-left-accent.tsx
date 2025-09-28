import { XCircle } from "lucide-react"

export default function AlertDestructiveLeftAccent() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        role="alert"
        aria-live="assertive"
        className="relative bg-card text-card-foreground border border-destructive/40 rounded-xl p-4 pl-5"
      >
        <div className="absolute left-0 top-0 h-full w-1.5 rounded-l-xl bg-destructive" aria-hidden="true" />
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-background">
            <XCircle className="h-6 w-6 text-destructive" aria-hidden="true" />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-medium">Payment failed</h3>
            <p className="text-[13px] text-muted-foreground">
              Please update your billing information to restore service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
