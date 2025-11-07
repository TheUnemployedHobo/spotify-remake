import { useLocation, useNavigate } from "@tanstack/react-router"

import { cn } from "@/lib/utils"

import appSidebarLinks from "./app-sidebar-links"

function AppSidebarMobile() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <ul className="bg-sidebar border-border relative z-20 flex h-24 border">
      {appSidebarLinks.map(({ href, Icon }, i) => (
        <li
          className={cn(
            "hover:bg-sidebar-accent border-primary flex grow items-center justify-center transition-all hover:border-b-8",
            pathname === href && "bg-sidebar-accent border-primary border-b-8",
          )}
          key={i}
          onClick={() => navigate({ to: href })}
        >
          <Icon className="text-sidebar-foreground" />
        </li>
      ))}
    </ul>
  )
}

export default AppSidebarMobile
