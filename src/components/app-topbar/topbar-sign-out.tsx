"use client"

import { LogOut } from "lucide-react"
import { redirect } from "next/navigation"
import { toast } from "sonner"

import AlertDialog from "@/components/alert-dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

function TopBarSignOut() {
  const handleAction = async () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
    toast.success("Signed out successfully")
    redirect("/signin")
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
