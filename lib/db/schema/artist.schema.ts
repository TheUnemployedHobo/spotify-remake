import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core"

import { genres } from "./genre.schema"

export const artists = pgTable("artists", {
  genre_id: integer("genre_id")
    .notNull()
    .references(() => genres.id),
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
})
