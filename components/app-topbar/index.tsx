"use client"

import dynamic from "next/dynamic"
import Link from "next/link"

import AppLogo from "../others/app-logo"
import { Avatar, AvatarFallback } from "../ui/avatar"
import AppTopBarNavigation from "./app-topbar-navigation"

const AppTopBarThemeSwitcher = dynamic(() => import("./app-topbar-theme-switcher"), { ssr: false })
const AppTopBarSettings = dynamic(() => import("./app-topbar-settings"), { ssr: false })

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
        <Avatar className="size-12">
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
    </section>
  )
}

export default AppTopBar
