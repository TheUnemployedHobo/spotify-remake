import { useQueryClient } from "@tanstack/react-query"
import { Play, Trash2 } from "lucide-react"
import { Activity, useState } from "react"
import { toast } from "sonner"

import { favoriteAddOrRemove } from "@/services/favorite.service"

import { Button } from "../ui/button"
import { TableCell, TableRow } from "../ui/table"

type PropsType = {
  artist: string
  genre: string
  id: number
  img: string
  title: string
}

function PlaylistSong({ artist, genre, id, img, title }: PropsType) {
  const [isHovered, setIsHovered] = useState(false)
  const queryClient = useQueryClient()

  const handleDelete = async () => {
    if (await favoriteAddOrRemove(id)) {
      queryClient.invalidateQueries({ queryKey: ["favorites"] })
      toast.warning("Song removed from your favorites.")
    } else toast.error("Failed to update favorites.")
  }

  return (
    <TableRow
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TableCell className="w-20 text-center">
        <Activity mode={isHovered ? "hidden" : "visible"}>
          <span>{id + 1}</span>
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
        <Button onClick={handleDelete} size="icon-lg" variant="ghost">
          <Trash2 />
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default PlaylistSong
