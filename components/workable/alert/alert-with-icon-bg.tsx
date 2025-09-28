import { Info } from "lucide-react"

export default function AlertWithIconBg() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-card text-card-foreground border border-border rounded-xl p-4">
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-accent">
            <Info className="h-6 w-6 text-accent-foreground" aria-hidden="true" />
            <span className="sr-only">Information</span>
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-medium">Sandbox mode</h3>
            <p className="text-[13px] text-muted-foreground">
              Test transactions are enabled and won&rsquo;t charge real cards.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
