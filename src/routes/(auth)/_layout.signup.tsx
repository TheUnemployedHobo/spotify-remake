import { createFileRoute, Link, redirect, useNavigate } from "@tanstack/react-router"
import { Activity, type FormEvent, useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { isAuthenticated } from "@/lib/utils"
import { userSignUp } from "@/services/user.service"

export const Route = createFileRoute("/(auth)/_layout/signup")({
  beforeLoad() {
    if (isAuthenticated()) throw redirect({ to: "/" })
  },
  component: RouteComponent,
})

function RouteComponent() {
  const [pending, setPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const password = form.get("password") as string
    const repass = form.get("repass") as string

    setPending(true)
    if (password !== repass) {
      toast.error("Passwords do not match")
      setPending(false)
    } else if (await userSignUp(form)) {
      setPending(false)
      toast.success("Signed up successfully")
      navigate({ to: "/signin" })
      return
    }

    setPending(false)

    toast.error("Failed to Sign up")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full rounded-xs sm:w-96">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Create an account and get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <Label className="block space-y-2">
            <span className="block">Username</span>
            <Input name="username" placeholder="admin" required type="text" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">Password</span>
            <Input minLength={8} name="password" placeholder="admin1234" required type="password" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">Confirm password</span>
            <Input minLength={8} name="repass" placeholder="admin1234" required type="password" />
          </Label>
          <Button className="w-full" disabled={pending} type="submit">
            <Activity mode={pending ? "visible" : "hidden"}>
              <Spinner />
            </Activity>
            <span>Sign up</span>
          </Button>
        </CardContent>
        <CardFooter>
          <p>Already have an account?</p>
          <Link to="/signin">
            <Button variant="link">Sign in</Button>
          </Link>
        </CardFooter>
      </Card>
    </form>
  )
}
