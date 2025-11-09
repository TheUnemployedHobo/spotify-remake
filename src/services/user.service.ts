import { setToken } from "@/lib/utils"

const SERVER_BASE_URL = import.meta.env["VITE_SERVER_BASE_URL"]

export const userSignUp = async (f: FormData) => {
  const username = f.get("username") as string
  const password = f.get("password") as string

  const response = await fetch(`${SERVER_BASE_URL}/api/users/signup`, {
    body: JSON.stringify({ password, username }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  })

  return response.ok
}

export const userSignIn = async (f: FormData) => {
  const username = f.get("username") as string
  const password = f.get("password") as string

  const response = await fetch(`${SERVER_BASE_URL}/api/users/signin`, {
    body: JSON.stringify({ password, username }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  })

  if (!response.ok) return false

  const token = await response.text()
  setToken(token)

  return true
}
