import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { Activity, useState } from "react"

import Placeholder from "@/components/others/placeholder"
import PlaylistSong from "@/components/playlist/playlist-song"
import PlaylistTable from "@/components/playlist/playlist-table"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { songGetAll } from "@/services/song.service"

export const Route = createFileRoute("/(base)/_layout/search")({
  component: RouteComponent,
})

function RouteComponent() {
  const [text, setText] = useState("")
  const { data, isPending } = useQuery({ queryFn: songGetAll, queryKey: ["songs"] })

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
          <Activity mode={isPending ? "hidden" : "visible"}>
            {data?.map(({ artist, genre, id, img, title }, i) => (
              <PlaylistSong artist={artist} genre={genre} id={id} img={img} key={i} title={title} />
            ))}
          </Activity>
        </PlaylistTable>
        <Activity mode={isPending ? "visible" : "hidden"}>
          <Placeholder mode="Playlist Song" numberOfItems={8} />
        </Activity>
      </ScrollArea>
    </>
  )
}
