"use client"

import { UserMinus } from "lucide-react"
import { redirect } from "next/navigation"
import { toast } from "sonner"

import { userDeleteAcc } from "@/actions/user.action"
import AlertDialog from "@/components/alert-dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { deleteCookie } from "@/lib/utils"

function TopBarDeleteAccount() {
  const handleAction = async () => {
    if (await userDeleteAcc()) {
      toast.success("Your account has been deleted successfully.")
      deleteCookie("token")
      redirect("/signin")
    }

    toast.error("Failed to delete the account. Please try again.")
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
