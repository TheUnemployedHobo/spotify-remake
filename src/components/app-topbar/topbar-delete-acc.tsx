import { useNavigate } from "@tanstack/react-router"
import { UserMinus } from "lucide-react"
import { toast } from "sonner"

import AlertDialog from "@/components/dialogs/alert-dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { userDeleteAcc } from "@/services/user.service"

function TopBarDeleteAccount() {
  const navigate = useNavigate()

  const handleAction = async () => {
    if (await userDeleteAcc()) {
      toast.success("Your account has been deleted.")
      navigate({ to: "/signin" })
    } else {
      toast.error("Failed to delete your account.")
    }
  }

  return (
    <AlertDialog
      actionFn={handleAction}
      description="Your account will permanently be deleted"
      trigger={
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} variant="destructive">
          <UserMinus />
          <span>Delete account</span>
        </DropdownMenuItem>
      }
    />
  )
}

export default TopBarDeleteAccount
