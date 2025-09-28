import { User, Info } from "lucide-react"

export default function AlertWithAvatar() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-card text-card-foreground border border-border rounded-xl p-4">
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-background">
            <User className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
            <span className="sr-only">User notice</span>
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-medium">Welcome back, Jamie</h3>
            <p className="text-[13px] text-muted-foreground">We added new features to your workspace.</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Info className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Check the changelog for details.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
