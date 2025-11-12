import { useNavigate } from "@tanstack/react-router"
import { UserPen } from "lucide-react"
import { Activity, type FormEvent, useState } from "react"
import { toast } from "sonner"

import RegularDialog from "@/components/dialogs/regular-dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { userEditCredits } from "@/services/user.service"

import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"

function TopBarEditCredits() {
  const [isPending, setIsPending] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    setIsPending(true)

    if (await userEditCredits(form)) {
      setIsPending(false)
      toast.success("Your credentials have been updated successfully.")
      navigate({ to: "/signin" })
    } else {
      setIsPending(false)
      toast.error("Failed to update credentials.")
    }
  }

  return (
    <RegularDialog
      content={
        <form className="grow space-y-5" onSubmit={handleSubmit}>
          <Label className="block space-y-2">
            <span className="block">New username</span>
            <Input name="username" placeholder="admin@example.com" type="text" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">Old password</span>
            <Input name="prevPassword" placeholder="admin1234" type="password" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">New password</span>
            <Input name="password" placeholder="admin1234" type="password" />
          </Label>
          <Button className="w-full" disabled={isPending} type="submit">
            <Activity mode={isPending ? "visible" : "hidden"}>
              <Spinner />
            </Activity>
            <span>Save changes</span>
          </Button>
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
