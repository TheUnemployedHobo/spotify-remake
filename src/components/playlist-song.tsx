import { Play } from "lucide-react"
import { Activity, useState } from "react"

import PlaylistSongLike from "./playlist-song-like"
import PlaylistSongUnlike from "./playlist-song-unlike"
import { Button } from "./ui/button"
import { TableCell, TableRow } from "./ui/table"

type PropsType = {
  artist: string
  genre: string
  id: number
  img: string
  isLiked: boolean
  mode: "delete" | "like" | "unlike"
  title: string
}

function PlaylistSong({ artist, genre, id, img, isLiked, mode, title }: PropsType) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TableRow
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TableCell className="w-20 text-center">
        <Activity mode={isHovered ? "hidden" : "visible"}>
          <span>{id}</span>
        </Activity>
        <Activity mode={isHovered ? "visible" : "hidden"}>
          <Button size="icon-sm" variant="ghost">
            <Play />
          </Button>
        </Activity>
      </TableCell>
      <TableCell className="flex items-center gap-x-2">
        <img alt="Nothing" className="aspect-square size-10 rounded-xs" src={img} />
        <div className="flex flex-col">
          <span className="text-base font-medium">{title}</span>
          <span className="text-muted-foreground text-sm">{artist}</span>
        </div>
      </TableCell>
      <TableCell className="hidden capitalize sm:table-cell">{genre}</TableCell>
      <TableCell>
        {mode === "delete" && null}
        {mode === "unlike" && <PlaylistSongUnlike songId={id} />}
        {mode === "like" && <PlaylistSongLike isLiked={isLiked} songId={id} />}
      </TableCell>
    </TableRow>
  )
}

export default PlaylistSong
