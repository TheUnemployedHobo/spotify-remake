import { defineConfig } from "drizzle-kit"
import "dotenv/config"

export default defineConfig({
  dbCredentials: { url: process.env["DATABASE_URL"]! },
  dialect: "postgresql",
  out: "./lib/db/migrations",
  schema: "./lib/db/schema",
})
