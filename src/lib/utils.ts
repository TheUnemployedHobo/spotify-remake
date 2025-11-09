import { type ClassValue, clsx } from "clsx"
import { jwtDecode } from "jwt-decode"
import { twMerge } from "tailwind-merge"
import Cookies from "universal-cookie"

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

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

export const isAuthenticated = (): boolean => {
  const token = getToken()
  if (!token) return false

  try {
    const { exp } = jwtDecode<{ exp: number }>(token as string)
    return Date.now() < exp * 1000
  } catch {
    removeToken()
    return false
  }
}
