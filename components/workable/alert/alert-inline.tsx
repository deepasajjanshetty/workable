import { Info } from "lucide-react"

export default function AlertInline() {
  return (
    <p className="w-full max-w-xl mx-auto text-[13px] text-muted-foreground">
      <span className="inline-flex items-center gap-1.5 align-top bg-muted px-2 py-1 rounded-md border border-border">
        <Info className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
        <span className="text-foreground">Preview mode</span>
      </span>{" "}
      Changes you make won&rsquo;t be saved permanently.
    </p>
  )
}
