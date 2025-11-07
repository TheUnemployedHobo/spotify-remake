import { useLocation, useNavigate } from "@tanstack/react-router"

import { cn } from "@/lib/utils"

import appSidebarLinks from "./app-sidebar-links"

function AppSidebarDesktop() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <ul className="bg-sidebar border-border flex h-full w-24 flex-col items-center gap-y-1 border-x pt-6">
      {appSidebarLinks.map(({ href, Icon: Icon }, i) => (
        <li
          className={cn(
            "hover:bg-sidebar-accent border-l-primary border-y-border flex h-20 w-full cursor-pointer items-center justify-center transition-all hover:border-y hover:border-l-4",
            pathname === href && "bg-sidebar-accent border-y border-l-4",
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

export default AppSidebarDesktop
