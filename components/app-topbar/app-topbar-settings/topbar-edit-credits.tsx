"use client"

import { UserPen } from "lucide-react"
import Form from "next/form"
import { useState } from "react"
import { toast } from "sonner"

import RegularDialog from "@/components/dialogs/regular-dialog"
import SubmitButton from "@/components/others/submit-button"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import authClient from "@/lib/auth-client"

function TopBarEditCredits() {
  const [isOpen, setIsOpen] = useState(false)

  const handleAction = async (f: FormData) => {
    const email = f.get("email") as string
    const password = f.get("password") as string
    const repass = f.get("repass") as string

    if (password && repass) {
      await authClient.changePassword({
        currentPassword: repass,
        fetchOptions: {
          onError() {
            toast.error("Failed to change password")
          },
          onSuccess() {
            toast.success("Password changed successfully")
          },
        },
        newPassword: password,
        revokeOtherSessions: true,
      })
    }

    if (email) {
      await authClient.changeEmail({
        callbackURL: "/signin",
        fetchOptions: {
          onError() {
            toast.error("Failed to change email")
          },
          onSuccess() {
            toast.success("Email changed successfully")
          },
        },
        newEmail: email,
      })
    }
  }

  return (
    <RegularDialog
      content={
        <Form action={handleAction} className="grow space-y-5">
          <Label className="block space-y-2">
            <span className="block">New email</span>
            <Input name="email" placeholder="admin@example.com" type="email" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">Old password</span>
            <Input name="repass" placeholder="admin1234" type="password" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">New password</span>
            <Input name="password" placeholder="admin1234" type="password" />
          </Label>
          <SubmitButton text="Save changes" />
        </Form>
      }
      control={{ onOpenChange: setIsOpen, open: isOpen }}
      title="Edit credentials"
      trigger={
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} variant="default">
          <UserPen />
          <span>Edit credentials</span>
        </DropdownMenuItem>
      }
    />
  )
}

export default TopBarEditCredits
