"use client"

import { UserPen } from "lucide-react"
import Form from "next/form"
import { redirect } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

import { userEditCredits } from "@/actions/user.action"
import RegularDialog from "@/components/regular-dialog"
import SubmitButton from "@/components/submit-button"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { deleteCookie } from "@/lib/utils"

function TopBarEditCredits() {
  const [isOpen, setIsOpen] = useState(false)

  const handleAction = async (f: FormData) => {
    if (await userEditCredits(f)) {
      toast.success("Your credentials have been updated. Please sign in again.")
      deleteCookie("token")
      redirect("/signin")
    }

    toast.error("Failed to update credentials. Please try again.")
  }

  return (
    <RegularDialog
      content={
        <Form action={handleAction} className="grow space-y-5">
          <Label className="block space-y-2">
            <span className="block">New username</span>
            <Input name="username" placeholder="admin@example.com" type="text" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">Old password</span>
            <Input name="prevPass" placeholder="admin1234" type="password" />
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
