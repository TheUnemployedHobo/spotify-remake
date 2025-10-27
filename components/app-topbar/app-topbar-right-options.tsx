"use client"

import dynamic from "next/dynamic"

import { Avatar, AvatarFallback } from "../ui/avatar"

const AppTopBarThemeSwitcher = dynamic(() => import("./app-topbar-theme-switcher"), { ssr: false })
const AppTopBarSettings = dynamic(() => import("./app-topbar-settings"), { ssr: false })

function AppTopBarRightOptions() {
  return (
    <div className="flex items-center gap-x-2">
      <AppTopBarThemeSwitcher />
      <AppTopBarSettings />
      <Avatar className="size-12">
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default AppTopBarRightOptions
