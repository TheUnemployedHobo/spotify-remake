import { relations } from "drizzle-orm"

import { artists } from "./schema/artist.schema"
import { genres } from "./schema/genre.schema"
import { likedSongs } from "./schema/liked.schema"
import { playlistInfo, playlists } from "./schema/playlists.schema"
import { songs } from "./schema/song.schema"

export const songsRelations = relations(songs, ({ one }) => ({
  artist: one(artists, {
    fields: [songs.artist_id],
    references: [artists.id],
  }),
}))

export const artistsRelations = relations(artists, ({ many, one }) => ({
  genre: one(genres, {
    fields: [artists.genre_id],
    references: [genres.id],
  }),
  songs: many(songs),
}))

export const playlistInfoRelations = relations(playlistInfo, ({ many }) => ({
  songs: many(playlists),
}))

export const playlistsRelations = relations(playlists, ({ one }) => ({
  playlist: one(playlistInfo, {
    fields: [playlists.pli_id],
    references: [playlistInfo.id],
  }),
  song: one(songs, {
    fields: [playlists.song_id],
    references: [songs.id],
  }),
}))

export const likedSongsRelations = relations(likedSongs, ({ one }) => ({
  song: one(songs, {
    fields: [likedSongs.song_id],
    references: [songs.id],
  }),
}))
