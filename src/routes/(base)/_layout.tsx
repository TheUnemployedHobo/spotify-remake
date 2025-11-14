import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

import AppSidebarDesktop from "@/components/app-sidebar/app-sidebar-desktop"
import AppSidebarMobile from "@/components/app-sidebar/app-sidebar-mobile"
import AppTopBar from "@/components/app-topbar/app-topbar-index"
import { isAuthenticated } from "@/lib/utils"

export const Route = createFileRoute("/(base)/_layout")({
  beforeLoad() {
    if (!isAuthenticated()) throw redirect({ to: "/signin" })
  },
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
        <div className="w-full px-5 pt-5">
          <Outlet />
        </div>
      </section>
      <div className="sm:hidden">
        <AppSidebarMobile />
      </div>
    </>
  )
}
