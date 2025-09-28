import { XCircle } from "lucide-react"

export default function AlertError() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        role="alert"
        aria-live="assertive"
        className="relative bg-card text-card-foreground border border-destructive/40 rounded-xl p-4 shadow-[0_1px_6px_0_rgba(0,0,0,0.05)]"
      >
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-background">
            <XCircle className="h-6 w-6 text-destructive" aria-hidden="true" />
            <span className="sr-only">Error</span>
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-medium">Something went wrong</h3>
            <p className="text-[13px] text-muted-foreground">
              We couldn&rsquo;t process your request. Try again later.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
