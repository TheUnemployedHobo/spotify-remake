import { usePathname, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"

import appSidebarLinks from "./app-sidebar-links"

function AppSidebarMobile() {
  const router = useRouter()
  const path = usePathname()

  return (
    <ul className="bg-sidebar border-border relative z-20 flex h-24 border">
      {appSidebarLinks.map(({ href, Icon }, i) => (
        <li
          className={cn(
            "hover:bg-sidebar-accent border-primary flex grow items-center justify-center transition-all hover:border-b-8",
            path === href && "bg-sidebar-accent border-primary border-b-8",
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

export default AppSidebarMobile
