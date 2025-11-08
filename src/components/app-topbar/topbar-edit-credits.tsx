"use client"

import { UserPen } from "lucide-react"
import { Activity, useState } from "react"

import RegularDialog from "@/components/dialogs/regular-dialog"
import SubmitButton from "@/components/others/submit-button"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"

function TopBarEditCredits() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <RegularDialog
      content={
        <form className="grow space-y-5">
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
          {/* <Button className="w-full" disabled={pending} type="submit">
            <Activity mode={pending ? "visible" : "hidden"}>
              <Spinner />
            </Activity>
            <span>Save changes</span>
          </Button> */}
        </form>
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
