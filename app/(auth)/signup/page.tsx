"use client"

import Form from "next/form"
import Link from "next/link"
import { toast } from "sonner"

import SubmitButton from "@/components/others/submit-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import authClient from "@/lib/auth-client"

export default function Page() {
  const handleAction = async (f: FormData) => {
    const email = f.get("email") as string
    const password = f.get("password") as string
    const repass = f.get("repass") as string

    if (password !== repass) toast.error("Passwords do not match")
    else
      //@ts-expect-error no need for name & image
      authClient.signUp.email({
        callbackURL: "/signin",
        email,
        fetchOptions: {
          onError() {
            toast.error("Error creating account")
          },
          onSuccess() {
            toast.success("Account created successfully")
          },
        },
        password,
      })
  }

  return (
    <Form action={handleAction}>
      <Card className="w-full rounded-xs sm:w-96">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Create an account and get started.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <Label className="block space-y-2">
            <span className="block">Email</span>
            <Input name="email" placeholder="admin@example.com" required type="email" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">Password</span>
            <Input minLength={8} name="password" placeholder="admin1234" required type="password" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">Confirm password</span>
            <Input minLength={8} name="repass" placeholder="admin1234" required type="password" />
          </Label>
          <SubmitButton text="Sign up" />
        </CardContent>
        <CardFooter>
          <p>Already have an account?</p>
          <Link href="/signin">
            <Button variant="link">Sign in</Button>
          </Link>
        </CardFooter>
      </Card>
    </Form>
  )
}
