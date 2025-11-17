import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import AppTopBarDeleteAccount from "./app-topbar-delete-acc"
import AppTopBarEditCredits from "./app-topbar-edit-credits"
import AppTopBarSignOut from "./app-topbar-sign-out"

function AppTopBarSettings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-12 cursor-pointer">
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xs">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <AppTopBarEditCredits />
        <AppTopBarDeleteAccount />
        <AppTopBarSignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AppTopBarSettings
