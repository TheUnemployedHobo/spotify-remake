"use client"

import { LogOut } from "lucide-react"

import AlertDialog from "@/components/dialogs/alert-dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

function TopBarSignOut() {
  return (
    <AlertDialog
      actionFn={alert}
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
