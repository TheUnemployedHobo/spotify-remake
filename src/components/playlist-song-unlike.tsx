import { useQueryClient } from "@tanstack/react-query"
import { Trash2 } from "lucide-react"
import { toast } from "sonner"

import { favoriteAddOrRemove } from "@/services/favorite.service"

import { Button } from "./ui/button"

type PropsType = { songId: number }

function PlaylistSongUnlike({ songId }: PropsType) {
  const queryClient = useQueryClient()

  const handleUnlike = async () => {
    if (await favoriteAddOrRemove(songId)) {
      queryClient.invalidateQueries({ queryKey: ["favorites"] })
      toast.warning("Song removed from your favorites.")
    } else toast.error("Failed to update favorites.")
  }

  return (
    <Button onClick={handleUnlike} size="icon-lg" variant="ghost">
      <Trash2 />
    </Button>
  )
}

export default PlaylistSongUnlike
