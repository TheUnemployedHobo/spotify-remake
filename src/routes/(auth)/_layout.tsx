import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

import { isAuthenticated } from "@/lib/utils"

export const Route = createFileRoute("/(auth)/_layout")({
  beforeLoad() {
    if (isAuthenticated()) throw redirect({ to: "/" })
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="flex h-dvh items-center justify-center">
      <Outlet />
    </section>
  )
}
