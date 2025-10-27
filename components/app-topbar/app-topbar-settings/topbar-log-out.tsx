"use client"

import { LogOut } from "lucide-react"
import { toast } from "sonner"

import AlertDialog from "@/components/dialogs/alert-dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import authClient from "@/lib/auth-client"

function TopBarLogOut() {
  const handleAction = async () => {
    await authClient.signOut({
      fetchOptions: {
        onError() {
          toast.error("There was an error signing out. Please try again.")
        },
        onSuccess() {
          toast.success("You have been signed out")
        },
      },
    })
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

export default TopBarLogOut
