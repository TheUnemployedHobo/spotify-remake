import { useNavigate } from "@tanstack/react-router"
import { LogOut } from "lucide-react"
import { toast } from "sonner"

import AlertDialog from "@/components/dialogs/alert-dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { removeToken } from "@/lib/utils"

function TopBarSignOut() {
  const navigate = useNavigate()

  const handleAction = async () => {
    toast.success("You have been signed out")
    removeToken()
    navigate({ to: "/signin" })
  }

  return (
    <AlertDialog
      actionFn={handleAction}
      description="You will be signed out of your account"
      trigger={
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} variant="destructive">
          <LogOut />
          <span>Sign out</span>
        </DropdownMenuItem>
      }
    />
  )
}

export default TopBarSignOut
