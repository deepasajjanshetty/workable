import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import type { Metadata } from "next";
import { DocsWrapper } from "@/components/ui/docs-wrapper";

export const metadata: Metadata = {
  title: {
    template:
      "%s | workable - Free UI Components to build beautiful websites",
    default: "workable - Free UI Components to build beautiful websites",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsWrapper>
      <div className="min-h-screen" suppressHydrationWarning>
        <DocsLayout
          tree={source.pageTree}
          {...baseOptions}
          sidebar={{
            defaultOpenLevel: 1,
          }}
        >
          {children}
        </DocsLayout>
      </div>
    </DocsWrapper>
  );
}