import { PropsWithChildren } from "react"

import AppSidebarDesktop from "@/components/app-sidebar/app-sidebar-desktop"
import AppSidebarMobile from "@/components/app-sidebar/app-sidebar-mobile"
import AppTopBar from "@/components/app-topbar"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <AppTopBar />
      <div className="flex h-[calc(100%-192px)] md:h-[calc(100%-96px)]">
        <div className="hidden md:block">
          <AppSidebarDesktop />
        </div>
        {children}
      </div>
      <div className="md:hidden">
        <AppSidebarMobile />
      </div>
    </>
  )
}
