import { Info } from "lucide-react"

export default function AlertMultiLine() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-card text-card-foreground border border-border rounded-xl p-4">
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-background">
            <Info className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="sr-only">Information</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Service notice</h3>
            <p className="text-[13px] text-muted-foreground">
              We&rsquo;re performing scheduled maintenance on Saturday between 01:00 and 03:00 UTC.
            </p>
            <p className="text-[13px] text-muted-foreground">
              During this window, some features may be slow or temporarily unavailable. We appreciate your patience and
              will restore full service as quickly as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
