"use client"

import dynamic from "next/dynamic"
import Link from "next/link"

import AppLogo from "./app-logo"
import AppTopBarNavigation from "./app-topbar-navigation"

const AppTopBarThemeSwitcher = dynamic(() => import("./app-topbar-theme-switcher"), { ssr: false })
const AppTopBarSettings = dynamic(() => import("./topbar-settings-index"), { ssr: false })

function AppTopBar() {
  return (
    <section className="border-border bg-sidebar flex h-24 items-center justify-between border px-4">
      <div className="flex items-center gap-x-10">
        <Link href="/">
          <AppLogo />
        </Link>
        <AppTopBarNavigation />
      </div>
      <div className="flex items-center gap-x-2">
        <AppTopBarThemeSwitcher />
        <AppTopBarSettings />
      </div>
    </section>
  )
}

export default AppTopBar
