import { createFileRoute, Link, useNavigate } from "@tanstack/react-router"
import { Activity, type FormEvent, useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { userSignIn } from "@/services/user.service"

export const Route = createFileRoute("/(auth)/_layout/signin")({
  component: RouteComponent,
})

function RouteComponent() {
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    setIsPending(true)
    if (await userSignIn(form)) {
      setIsPending(false)
      toast.success("Successfully signed in")
      navigate({ to: "/" })
      return
    }

    setIsPending(false)

    toast.error("Failed to sign in")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full rounded-xs sm:w-96">
        <CardHeader>
          <CardTitle>Sign into your account</CardTitle>
          <CardDescription>Use your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <Label className="block space-y-2">
            <span className="block">Username</span>
            <Input name="username" placeholder="example" required type="text" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">Password</span>
            <Input name="password" placeholder="admin1234" required type="password" />
          </Label>
          <Button className="w-full" disabled={isPending} type="submit">
            <Activity mode={isPending ? "visible" : "hidden"}>
              <Spinner />
            </Activity>
            <span>Sign in</span>
          </Button>
        </CardContent>
        <CardFooter>
          <p>Don&apos;t have an account?</p>
          <Link to="/signup">
            <Button variant="link">Sign up</Button>
          </Link>
        </CardFooter>
      </Card>
    </form>
  )
}
