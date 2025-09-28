import { Bell } from "lucide-react"

export default function AlertNeutral() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-card text-card-foreground border border-border rounded-xl p-4">
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-muted">
            <Bell className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
            <span className="sr-only">Notification</span>
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-medium">Reminder</h3>
            <p className="text-[13px] text-muted-foreground">Your session will expire in 5 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
