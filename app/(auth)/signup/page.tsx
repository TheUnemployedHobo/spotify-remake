"use client"

import Form from "next/form"
import Link from "next/link"
import { redirect } from "next/navigation"
import { toast } from "sonner"

import { userSignUp } from "@/actions/users.action"
import SubmitButton from "@/components/others/submit-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  const handleAction = async (f: FormData) => {
    if (f.get("password") !== f.get("repass")) {
      toast.error("Passwords do not match")
      return
    }

    if (await userSignUp(f)) {
      toast.success("Account created successfully")
      redirect("/signin")
    }

    toast.error("Error creating account")
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
