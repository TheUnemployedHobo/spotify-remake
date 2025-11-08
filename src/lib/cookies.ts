import Cookies from "universal-cookie"

const cookies = new Cookies()

export const setToken = (value: string) =>
  cookies.set("token", value, {
    maxAge: 86400,
    path: "/",
    sameSite: "lax",
    secure: true,
  })

export const getToken = () => cookies.get("token")

export const removeToken = () => cookies.remove("token", { path: "/" })
