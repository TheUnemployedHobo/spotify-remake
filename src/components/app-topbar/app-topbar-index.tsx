import { Link } from "@tanstack/react-router"

import AppLogo from "../others/app-logo"
import AppTopBarThemeSwitcher from "./app-topbar-theme-switcher"
import AppTopBarSettings from "./topbar-settings-index"

function AppTopBar() {
  return (
    <section className="border-border bg-sidebar flex h-24 items-center justify-between border px-4">
      <Link to="/">
        <AppLogo />
      </Link>
      <div className="flex items-center gap-x-2">
        <AppTopBarThemeSwitcher />
        <AppTopBarSettings />
      </div>
    </section>
  )
}

export default AppTopBar
