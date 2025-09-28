import { Info } from "lucide-react"

export default function AlertTopAccent() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-card text-card-foreground border border-border rounded-xl p-4 pt-5">
        <div className="absolute left-0 top-0 h-1.5 w-full rounded-t-xl bg-accent" aria-hidden="true" />
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-background">
            <Info className="h-6 w-6 text-accent-foreground" aria-hidden="true" />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-medium">Security notice</h3>
            <p className="text-[13px] text-muted-foreground">
              Enable two-factor authentication to protect your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
