"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

function AppTopBarProfile() {
  const { setTheme, theme } = useTheme()

  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <div className="flex items-center gap-x-2">
      <Button onClick={changeTheme} size="icon-lg" variant="ghost">
        {theme === "dark" ? <Sun /> : <Moon />}
      </Button>
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default AppTopBarProfile
