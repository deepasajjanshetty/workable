import { Info, ChevronRight } from "lucide-react"

export default function AlertWithList() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-card text-card-foreground border border-border rounded-xl p-4">
        <div className="flex gap-3">
          <div className="p-2 rounded-full bg-background">
            <Info className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="sr-only">Information</span>
          </div>
          <div className="space-y-2">
            <div className="space-y-0.5">
              <h3 className="text-sm font-medium">Next steps</h3>
              <p className="text-[13px] text-muted-foreground">Complete these tasks to finish setup:</p>
            </div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-[13px] text-muted-foreground">
                <ChevronRight className="h-3.5 w-3.5 mt-[2px]" aria-hidden="true" />
                Add a billing method
              </li>
              <li className="flex items-start gap-2 text-[13px] text-muted-foreground">
                <ChevronRight className="h-3.5 w-3.5 mt-[2px]" aria-hidden="true" />
                Invite your team
              </li>
              <li className="flex items-start gap-2 text-[13px] text-muted-foreground">
                <ChevronRight className="h-3.5 w-3.5 mt-[2px]" aria-hidden="true" />
                Connect integrations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
