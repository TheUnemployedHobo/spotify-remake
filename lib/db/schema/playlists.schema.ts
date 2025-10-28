import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core"

import { user } from "./auth.schema"
import { songs } from "./song.schema"

export const playlistInfo = pgTable("playlist_info", {
  description: varchar("description"),
  id: serial("id").primaryKey(),
  img: varchar("img"),
  title: varchar("title").notNull(),
  user_id: varchar("user_id")
    .notNull()
    .references(() => user.id),
})

export const playlists = pgTable("playlists", {
  pli_id: integer("pli_id")
    .notNull()
    .references(() => playlistInfo.id),
  song_id: integer("song_id")
    .notNull()
    .references(() => songs.id),
})
