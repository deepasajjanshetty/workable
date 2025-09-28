import { Info } from "lucide-react"

export default function AlertWithProgress() {
  const progress = 62
  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        role="status"
        aria-live="polite"
        className="relative bg-card text-card-foreground border border-border rounded-xl p-4"
      >
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-background">
            <Info className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="sr-only">Progress</span>
          </div>
          <div className="flex-1 space-y-2">
            <div className="space-y-0.5">
              <h3 className="text-sm font-medium">Profile completion</h3>
              <p className="text-[13px] text-muted-foreground">
                You&rsquo;re {progress}% done. Finish the remaining steps.
              </p>
            </div>
            <div
              className="h-2 w-full rounded-full bg-muted"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="h-2 rounded-full bg-primary" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
