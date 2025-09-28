"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/layout/footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Check if we're on a docs route
  const isDocsRoute = pathname.startsWith('/docs');
  
  // Check if we're on a preview route
  const isPreviewRoute = pathname.startsWith('/preview');
  
  // For docs and preview routes, just render children without header/footer
  if (isDocsRoute || isPreviewRoute) {
    return <>{children}</>;
  }
  
  // For all other routes, render with header and footer
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative w-full pt-0 md:pt-0 bg-white dark:bg-black flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
