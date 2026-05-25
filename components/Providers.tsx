"use client";

import { ErrorOverlayProvider } from "@/components/ErrorOverlay/ErrorOverlayContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ErrorOverlayProvider>{children}</ErrorOverlayProvider>;
}
