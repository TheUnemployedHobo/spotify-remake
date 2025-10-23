import type { Metadata } from "next"

import { Outfit } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/helpers/theme-provider"

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
      </body>
    </html>
  )
}
