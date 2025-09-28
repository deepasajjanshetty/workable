import { ExternalLink, Info } from "lucide-react"

export default function AlertWithLink() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div role="status" className="relative bg-card text-card-foreground border border-border rounded-xl p-4">
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-background">
            <Info className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="sr-only">Information</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-medium">We&rsquo;ve updated our terms</h3>
            <p className="text-[13px] text-muted-foreground">
              Please review the changes in our{" "}
              <a
                href="#"
                className="underline underline-offset-4 text-primary"
                aria-label="Read updated Terms of Service"
              >
                Terms of Service
              </a>
              .
            </p>
            <a href="#" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
              Learn more <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
