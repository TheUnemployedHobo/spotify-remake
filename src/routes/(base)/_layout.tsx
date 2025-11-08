import { createFileRoute, Outlet } from "@tanstack/react-router"

import AppSidebarDesktop from "@/components/app-sidebar/app-sidebar-desktop"
import AppSidebarMobile from "@/components/app-sidebar/app-sidebar-mobile"
import AppTopBar from "@/components/app-topbar/app-topbar-index"

export const Route = createFileRoute("/(base)/_layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <AppTopBar />
      <section className="flex h-[calc(100dvh-192px)] sm:h-[calc(100dvh-96px)]">
        <div className="hidden sm:block">
          <AppSidebarDesktop />
        </div>
        <div className="p-5">
          <Outlet />
        </div>
      </section>
      <div className="sm:hidden">
        <AppSidebarMobile />
      </div>
    </>
  )
}
