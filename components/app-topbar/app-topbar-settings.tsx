"use client"

import { Settings } from "lucide-react"

import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

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
        <DropdownMenuItem variant="default">Edit credentials</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Delete account</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AppTopBarSettings
