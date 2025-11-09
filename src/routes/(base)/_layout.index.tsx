import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(base)/_layout/")({
  component: Index,
})

function Index() {
  return (
    <>
      <p>Hello pure react and f nextjs</p>
    </>
  )
}
