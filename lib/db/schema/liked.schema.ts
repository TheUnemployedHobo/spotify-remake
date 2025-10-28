import { integer, pgTable, primaryKey, varchar } from "drizzle-orm/pg-core"

export const likedSongs = pgTable(
  "liked_songs",
  {
    song_id: integer("song_id").notNull(),
    user_id: varchar("user_id").notNull(),
  },
  (table) => [primaryKey({ columns: [table.user_id, table.song_id] })],
)
