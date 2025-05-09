"use client";

import { SWRConfig } from "swr";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SWRConfig
      value={{
        errorRetryCount: 3,
        shouldRetryOnError: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 3600000, // 1 hour
      }}
    >
      {children}
    </SWRConfig>
  );
}
