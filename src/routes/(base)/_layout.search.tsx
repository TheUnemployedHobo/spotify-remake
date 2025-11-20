import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { Activity, useState } from "react"

import Placeholder from "@/components/playlist-placeholder"
import PlaylistSong from "@/components/playlist-song"
import PlaylistTable from "@/components/playlist-table"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { favoriteGetAll } from "@/services/favorite.service"
import { songGetAll } from "@/services/song.service"

export const Route = createFileRoute("/(base)/_layout/search")({
  component: RouteComponent,
})

function RouteComponent() {
  const [text, setText] = useState("")
  const allSongs = useQuery({ queryFn: songGetAll, queryKey: ["songs"] })
  const favorites = useQuery({ queryFn: favoriteGetAll, queryKey: ["favorites"] })

  const favoriteSongs = favorites.data?.map(({ songId }) => songId)

  const songs = structuredClone(allSongs.data)
    ?.filter(({ title }) => title.toLowerCase().includes(text.toLowerCase()))
    .sort((a, b) => a.id - b.id)

  return (
    <>
      <h1 className="mb-5 text-4xl font-bold">Search</h1>
      <Input
        className="mb-5"
        onInput={(e) => setText(e.currentTarget.value)}
        placeholder="Type here..."
        type="search"
        value={text}
      />
      <h2 className="mb-5 text-2xl font-semibold">Available songs</h2>
      <ScrollArea className="h-[calc(100dvh-284px)]">
        <PlaylistTable>
          <Activity mode={allSongs.isPending ? "hidden" : "visible"}>
            {songs?.map(({ artist, genre, id, img, title }, i) => (
              <PlaylistSong
                artist={artist}
                genre={genre}
                id={id}
                img={img}
                //@ts-expect-error Just ignore
                isLiked={favoriteSongs?.includes(id)}
                key={i}
                mode="like"
                title={title}
              />
            ))}
          </Activity>
        </PlaylistTable>
        <Activity mode={allSongs.isPending ? "visible" : "hidden"}>
          <Placeholder mode="Playlist Song" numberOfItems={8} />
        </Activity>
      </ScrollArea>
    </>
  )
}
