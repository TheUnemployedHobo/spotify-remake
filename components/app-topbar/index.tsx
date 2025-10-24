"use client"

import dynamic from "next/dynamic"
import Link from "next/link"

import AppLogo from "../app-logo"
import AppTopBarNavigation from "./app-topbar-navigation"

const AppTopBarProfile = dynamic(() => import("./app-topbar-profile"), { ssr: false })

function AppTopBar() {
  return (
    <div className="border-border bg-sidebar flex h-24 items-center justify-between border px-4">
      <div className="flex items-center gap-x-10">
        <Link href="/">
          <AppLogo />
        </Link>
        <AppTopBarNavigation />
      </div>
      <AppTopBarProfile />
    </div>
  )
}

export default AppTopBar
