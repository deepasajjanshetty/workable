"use client";

import { useEffect, useState } from "react";

interface DocsWrapperProps {
  children: React.ReactNode;
}

export function DocsWrapper({ children }: DocsWrapperProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="min-h-screen">
        <div className="flex">
          <div className="w-64 bg-gray-50 dark:bg-gray-900 border-r">
            <div className="p-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="flex-1 p-6">
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/3"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
