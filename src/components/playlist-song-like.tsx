import { useQueryClient } from "@tanstack/react-query"
import { Heart } from "lucide-react"
import { startTransition, useOptimistic } from "react"

import { cn } from "@/lib/utils"
import { favoriteAddOrRemove } from "@/services/favorite.service"

import { Button } from "./ui/button"

type PropsType = { isLiked: boolean; songId: number }

function PlaylistSongLike({ isLiked, songId }: PropsType) {
  const queryClient = useQueryClient()
  const [liked, setLiked] = useOptimistic(isLiked)

  const handleLike = () =>
    startTransition(async () => {
      setLiked((prev) => !prev)
      await favoriteAddOrRemove(songId)
      queryClient.invalidateQueries({ queryKey: ["favorites"] })
    })

  return (
    <Button onClick={handleLike} size="icon-lg" variant="ghost">
      <Heart className={cn("text-primary", liked && "fill-primary")} />
    </Button>
  )
}

export default PlaylistSongLike
