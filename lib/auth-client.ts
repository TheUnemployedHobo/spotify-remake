import { createAuthClient } from "better-auth/react"
import { config } from "dotenv"

config({ path: ".env.local" })

export const authClient = createAuthClient({
  baseURL: process.env["BETTER_AUTH_URL"],
})
