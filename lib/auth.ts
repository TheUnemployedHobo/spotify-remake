import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"

import db from "./db"
import { account, session, user, verification } from "./db/schema/auth.schema"

const auth = betterAuth({
  advanced: { useSecureCookies: true },
  database: drizzleAdapter(db, { provider: "pg", schema: { account, session, user, verification } }),
  emailAndPassword: { autoSignIn: false, enabled: true },
  plugins: [nextCookies()],
  user: { deleteUser: { enabled: true } },
})

export default auth
