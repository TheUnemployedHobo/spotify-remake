"use client"

import { UserMinus } from "lucide-react"

import AlertDialog from "@/components/dialogs/alert-dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import authClient from "@/lib/auth-client"

function TopBarDeleteAccount() {
  // const deleteAccount = authClient.deleteUser()

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
