import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

function AppTopBarThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <Button onClick={changeTheme} size="icon-lg" variant="ghost">
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  )
}

export default AppTopBarThemeSwitcher
