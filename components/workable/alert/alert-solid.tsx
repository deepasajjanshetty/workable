import { Info } from "lucide-react"

export default function AlertSolid() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-primary text-primary-foreground rounded-xl p-4">
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-primary/20">
            <Info className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Information</span>
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-medium">Invite sent</h3>
            <p className="text-[13px] opacity-90">We emailed an invite to alex@example.com.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
