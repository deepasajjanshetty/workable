import { Info } from "lucide-react"

export default function AlertLeftAccent() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        role="status"
        className="relative bg-card text-card-foreground border border-border rounded-xl p-4 pl-5"
        style={{ boxShadow: "0 1px 6px 0 rgba(0,0,0,0.04)" }}
      >
        <div className="absolute left-0 top-0 h-full w-1.5 rounded-l-xl bg-primary" aria-hidden="true" />
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-background">
            <Info className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-medium">New device sign-in</h3>
            <p className="text-[13px] text-muted-foreground">If this wasn&rsquo;t you, secure your account now.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
