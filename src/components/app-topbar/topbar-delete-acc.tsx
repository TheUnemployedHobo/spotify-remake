import { UserMinus } from "lucide-react"

import AlertDialog from "@/components/dialogs/alert-dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

function TopBarDeleteAccount() {
  return (
    <AlertDialog
      actionFn={alert}
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
