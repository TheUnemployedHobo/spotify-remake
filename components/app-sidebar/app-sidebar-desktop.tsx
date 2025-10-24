"use client"

import { usePathname, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"

import appSidebarLinks from "./app-sidebar-links"

function AppSidebarDesktop() {
  const router = useRouter()
  const path = usePathname()

  return (
    <ul className="bg-sidebar border-border flex h-full w-24 flex-col items-center gap-y-1 border-x pt-6">
      {appSidebarLinks.map(({ href, Icon: Icon }, i) => (
        <li
          className={cn(
            "hover:bg-sidebar-accent border-border flex size-16 cursor-pointer items-center justify-center rounded-full transition-all hover:border",
            path === href && "bg-sidebar-accent border-border border",
          )}
          key={i}
          onClick={() => router.push(href)}
        >
          <Icon className="text-sidebar-foreground" />
        </li>
      ))}
    </ul>
  )
}

export default AppSidebarDesktop
