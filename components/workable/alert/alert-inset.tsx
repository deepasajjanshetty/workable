import { Shield } from "lucide-react"

export default function AlertInset() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-card text-card-foreground border border-border rounded-xl p-0 overflow-hidden">
        <div className="px-4 py-3 bg-muted/50 border-b border-border flex items-center gap-2">
          <Shield className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <span className="text-sm font-medium">Security</span>
        </div>
        <div role="status" className="px-4 py-4">
          <p className="text-[13px] text-muted-foreground">
            We&rsquo;ve detected unusual activity. Review your recent logins.
          </p>
        </div>
      </div>
    </div>
  )
}
