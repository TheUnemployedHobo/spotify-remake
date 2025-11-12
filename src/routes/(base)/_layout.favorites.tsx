import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"

import PlaylistHeader from "@/components/playlist/playlist-header"
import PlaylistMidControl from "@/components/playlist/playlist-mid-control"
import PlaylistSong from "@/components/playlist/playlist-song"
import PlaylistTable from "@/components/playlist/playlist-table"
import { getFavorites } from "@/services/song.service"

export const Route = createFileRoute("/(base)/_layout/favorites")({
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useQuery({ queryFn: getFavorites, queryKey: ["favorites"] })

  return (
    <>
      <PlaylistHeader numberOfSongs={data!.length} playlistName="Favorites" playlistSubName="Playlist" />
      <PlaylistMidControl />
      <PlaylistTable>
        {data?.map(({ artist, genre, img, title }, i) => (
          <PlaylistSong artist={artist} genre={genre} id={i} img={img} key={i} title={title} />
        ))}
      </PlaylistTable>
    </>
  )
}
