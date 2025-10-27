"use client"

import { Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import TopBarDeleteAccount from "./topbar-delete-acc"
import TopBarEditCredits from "./topbar-edit-credits"
import TopBarLogOut from "./topbar-log-out"

function AppTopBarSettings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon-lg" variant="ghost">
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xs">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <TopBarEditCredits />
        <TopBarDeleteAccount />
        <TopBarLogOut />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AppTopBarSettings
