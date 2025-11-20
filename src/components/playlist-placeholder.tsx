import { Item, ItemContent, ItemHeader } from "./ui/item"
import { Skeleton } from "./ui/skeleton"

type PropsType = {
  mode: "Playlist Card" | "Playlist Song"
  numberOfItems: number
}

function PlaylistPlaceholder({ mode, numberOfItems }: PropsType) {
  if (mode === "Playlist Card")
    return Array.from({ length: numberOfItems }, (_, i) => (
      <Item className="rounded-xs" key={i} variant="muted">
        <ItemHeader>
          <Skeleton className="aspect-square w-full rounded-xs object-cover" />
        </ItemHeader>
        <ItemContent>
          <Skeleton className="h-2 w-20 rounded-xs" />
          <Skeleton className="h-2 w-2/4 rounded-xs" />
        </ItemContent>
      </Item>
    ))

  if (mode === "Playlist Song")
    return (
      <ul className="flex flex-col gap-y-2">
        {Array.from({ length: numberOfItems }, (_, i) => (
          <li className="flex items-center gap-x-5 p-5" key={i}>
            <Skeleton className="size-14 rounded-xs" />
            <div className="space-y-2">
              <Skeleton className="h-2 w-28 rounded-xs" />
              <Skeleton className="h-2 w-28 rounded-xs" />
            </div>
            <Skeleton className="h-2 w-28 rounded-xs" />
          </li>
        ))}
      </ul>
    )
}

export default PlaylistPlaceholder
