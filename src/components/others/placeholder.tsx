import { Skeleton } from "../ui/skeleton"

type PropsType = {
  mode: "Playlist Card" | "Playlist Song"
  numberOfItems: number
}

function Placeholder({ mode, numberOfItems }: PropsType) {
  if (mode === "Playlist Card")
    return Array.from({ length: numberOfItems }, (_, i) => (
      <div className="flex flex-col gap-y-2" key={i}>
        <Skeleton className="size-full h-80 rounded-xs" />
        <Skeleton className="size-full h-5 rounded-xs" />
        <Skeleton className="size-full h-5 rounded-xs" />
      </div>
    ))

  if (mode === "Playlist Song")
    return (
      <ul className="flex flex-col gap-y-2">
        {Array.from({ length: numberOfItems }, (_, i) => (
          <li className="flex items-center gap-x-5" key={i}>
            <Skeleton className="size-14 rounded-xs" />
            <div className="space-y-2">
              <Skeleton className="size-20 h-2 rounded-xs" />
              <Skeleton className="size-20 h-2 rounded-xs" />
            </div>
          </li>
        ))}
      </ul>
    )
}

export default Placeholder
