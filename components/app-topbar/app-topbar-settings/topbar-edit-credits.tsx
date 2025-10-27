"use client"

import { UserPen } from "lucide-react"
import Form from "next/form"
import { useState } from "react"

import RegularDialog from "@/components/dialogs/regular-dialog"
import SubmitButton from "@/components/others/submit-button"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function TopBarEditCredits() {
  const [isOpen, setIsOpen] = useState(false)

  const handleAction = async (f: FormData) => {}

  return (
    <RegularDialog
      content={
        <Form action={handleAction} className="grow space-y-5">
          <Label className="block space-y-2">
            <span className="block">Edit email</span>
            <Input name="email" placeholder="admin@example.com" type="email" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">Edit password</span>
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
