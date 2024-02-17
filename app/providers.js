"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider forcedTheme="dark" attribute="class">
      {children}
    </ThemeProvider>
  );
}
