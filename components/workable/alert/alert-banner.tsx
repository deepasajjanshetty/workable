import { Megaphone } from "lucide-react"

export default function AlertBanner() {
  return (
    <div className="w-full">
      <div role="status" className="bg-muted text-foreground border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2">
            <Megaphone className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <p className="text-sm">We&rsquo;ve launched new regions. Deploy closer to your users for lower latency.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
