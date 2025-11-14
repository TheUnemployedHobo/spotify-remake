import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"

import PlaylistCard from "@/components/playlist/playlist-card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { artistGetAll } from "@/services/artist.service"

export const Route = createFileRoute("/(base)/_layout/")({
  component: Index,
})

function Index() {
  const { data } = useQuery({ queryFn: artistGetAll, queryKey: ["artists"] })

  return (
    <>
      <h1 className="mb-5 text-4xl font-bold">Available artists</h1>
      <ScrollArea className="h-[calc(100dvh-176px)]">
        <section className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {data?.map(({ cover, genreName, name }, i) => (
            <PlaylistCard cover={cover} description={genreName} href="/" key={i} title={name} />
          ))}
        </section>
      </ScrollArea>
    </>
  )
}
