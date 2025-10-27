"use client"

import Link from "next/link"

import AppLogo from "../others/app-logo"
import AppTopBarNavigation from "./app-topbar-navigation"
import AppTopBarRightOptions from "./app-topbar-right-options"

function AppTopBar() {
  return (
    <div className="border-border bg-sidebar flex h-24 items-center justify-between border px-4">
      <div className="flex items-center gap-x-10">
        <Link href="/">
          <AppLogo />
        </Link>
        <AppTopBarNavigation />
      </div>
      <AppTopBarRightOptions />
    </div>
  )
}

export default AppTopBar
