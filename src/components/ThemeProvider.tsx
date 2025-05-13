
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
      <NextThemesProvider
        attribute="class"   // ← tell next-themes to toggle <html class="">
        enableSystem
        defaultTheme="dark"
        {...props}
      >      {children}
    </NextThemesProvider>
  )
}
