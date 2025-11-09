import { createRootRoute, type ErrorComponentProps, Link, Outlet } from "@tanstack/react-router"
import { ServerCrash, StickyNote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Toaster } from "@/components/ui/sonner"
import { Spinner } from "@/components/ui/spinner"

export const Route = createRootRoute({
  component: RootLayout,
  errorComponent: Error,
  notFoundComponent: NotFound,
  pendingComponent: Pending,
})

function Error({ error, reset }: ErrorComponentProps) {
  return (
    <Empty className="flex h-dvh items-center justify-center">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ServerCrash />
        </EmptyMedia>
        <EmptyTitle>{error.name}</EmptyTitle>
        <EmptyDescription>{error.message}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button onClick={reset}>Reset</Button>
      </EmptyContent>
    </Empty>
  )
}

function NotFound() {
  return (
    <Empty className="flex h-dvh items-center justify-center">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <StickyNote />
        </EmptyMedia>
        <EmptyTitle>404 - Page not found!</EmptyTitle>
        <EmptyDescription>The page you were looking for could not be found.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Link to="/">
          <Button>Go back to home</Button>
        </Link>
      </EmptyContent>
    </Empty>
  )
}

function Pending() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Spinner className="text-primary size-16" />
    </div>
  )
}

function RootLayout() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  )
}
