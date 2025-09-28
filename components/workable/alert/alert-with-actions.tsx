import { Info } from "lucide-react"

export default function AlertWithActions() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-card text-card-foreground border border-border rounded-xl p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <div className="p-2 rounded-full bg-background">
              <Info className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="sr-only">Information</span>
            </div>
            <div className="space-y-0.5">
              <h3 className="text-sm font-medium">Profile incomplete</h3>
              <p className="text-[13px] text-muted-foreground">Add your phone number to secure your account.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs rounded-md bg-muted text-foreground">Later</button>
            <button className="px-3 py-1.5 text-xs rounded-md bg-primary text-primary-foreground">Complete now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
