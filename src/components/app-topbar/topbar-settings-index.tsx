import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import TopBarDeleteAccount from "./topbar-delete-acc"
import TopBarEditCredits from "./topbar-edit-credits"
import TopBarSignOut from "./topbar-sign-out"

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
        <TopBarEditCredits />
        <TopBarDeleteAccount />
        <TopBarSignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AppTopBarSettings
