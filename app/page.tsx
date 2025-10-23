import { Button } from "@/components/ui/button"

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <>
      <Button>Click me</Button>
      <p>Hello next 16</p>
    </>
  )
}
