import { ScrollArea } from "@radix-ui/react-scroll-area"
import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { genreGetAll } from "@/services/genre.service"

export const Route = createFileRoute("/(base)/_layout/search")({
  component: RouteComponent,
})

function RouteComponent() {
  const [text, setText] = useState("")
  const { data } = useQuery({ queryFn: genreGetAll, queryKey: ["genres"] })

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
      <h2 className="mb-5 text-2xl font-semibold">Genres</h2>
      <ScrollArea className="h-28"></ScrollArea>
    </>
  )
}
