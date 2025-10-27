import type { Metadata } from "next"

import "./globals.css"
import { Outfit } from "next/font/google"

import { ThemeProvider } from "@/components/others/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const font = Outfit({
  display: "fallback",
  fallback: ["system-ui"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  description: "empty",
  title: "Spotify",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} h-screen antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
