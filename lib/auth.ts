import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"

import db from "./db"
import { account, session, user, verification } from "./db/schema/auth.schema"

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { account, session, user, verification },
  }),
  emailAndPassword: { autoSignIn: false, enabled: true },
  user: { modelName: "user" },
})

export default auth
