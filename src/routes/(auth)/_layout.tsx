import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/(auth)/_layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="flex h-dvh items-center justify-center">
      <Outlet />
    </section>
  )
}
