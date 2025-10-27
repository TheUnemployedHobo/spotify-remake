"use client"

import { UserMinus } from "lucide-react"
import { toast } from "sonner"

import AlertDialog from "@/components/dialogs/alert-dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import authClient from "@/lib/auth-client"

function TopBarDeleteAccount() {
  const handleAction = async () => {
    await authClient.deleteUser({
      callbackURL: "/signup",
      fetchOptions: {
        onError() {
          toast.error("There was an error deleting your account")
        },
        onSuccess() {
          toast.success("Account deleted successfully")
        },
      },
    })
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
