"use client"

import Form from "next/form"
import Link from "next/link"
import { toast } from "sonner"

import SubmitButton from "@/components/others/submit-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import authClient from "@/lib/auth-client"

export default function Page() {
  const handleAction = async (f: FormData) => {
    const username = f.get("username") as string
    const password = f.get("password") as string
    const remember = f.get("remember") as string

    await authClient.signIn.username({
      callbackURL: "/",
      fetchOptions: {
        onError() {
          toast.error("Failed to sign in. Please check your credentials and try again")
        },
        onSuccess() {
          toast.success("Signed in successfully!")
        },
      },
      password,
      rememberMe: Boolean(remember),
      username,
    })
  }

  return (
    <Form action={handleAction}>
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
          <Label>
            <Checkbox defaultChecked name="remember" />
            <span>Remember me for 30 days</span>
          </Label>
          <SubmitButton text="Sign up" />
        </CardContent>
        <CardFooter>
          <p>Don&apos;t have an account?</p>
          <Link href="/signup">
            <Button variant="link">Sign up</Button>
          </Link>
        </CardFooter>
      </Card>
    </Form>
  )
}
