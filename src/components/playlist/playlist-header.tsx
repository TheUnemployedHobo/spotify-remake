import { Heart } from "lucide-react"

import { cn } from "@/lib/utils"

const colors = [
  {
    child: "from-purple-400 to-purple-600",
    parent: "from-purple-700 via-purple-600 to-purple-500",
  },
  {
    child: "from-blue-400 to-blue-600",
    parent: "from-blue-700 via-blue-600 to-blue-500",
  },
  {
    child: "from-green-400 to-green-600",
    parent: "rom-green-700 via-green-600 to-green-500",
  },
  {
    child: "from-pink-400 to-pink-600",
    parent: "from-pink-700 via-pink-600 to-pink-500",
  },
  {
    child: "from-red-400 to-red-600",
    parent: "from-red-700 via-red-600 to-red-500",
  },
  {
    child: "from-teal-400 to-teal-600",
    parent: "from-teal-700 via-teal-600 to-teal-500",
  },
  {
    child: "from-indigo-400 to-indigo-600",
    parent: "from-indigo-700 via-indigo-600 to-indigo-500",
  },
  {
    child: "from-orange-400 to-orange-600",
    parent: "from-orange-700 via-orange-600 to-orange-500",
  },
]

type PropsType = {
  numberOfSongs: number
  playlistName: string
  playlistSubName: string
}

function PlaylistHeader({ numberOfSongs, playlistName, playlistSubName }: PropsType) {
  return (
    <div className={cn("flex h-52 items-center gap-x-5 rounded-[20px] bg-linear-to-br p-5", colors.at(0)?.parent)}>
      <div
        className={cn(
          "hidden h-full w-[168px] items-center justify-center rounded-[10px] bg-linear-to-br shadow-2xl sm:flex",
          colors.at(0)?.child,
        )}
      >
        <Heart className="size-24 dark:fill-[#FAFAFA]" />
      </div>
      <div className="space-y-2">
        <h1 className="text-5xl font-bold">{playlistName}</h1>
        <h2 className="text-2xl font-semibold">{playlistSubName}</h2>
        <h3 className="font-medium">{numberOfSongs} Songs</h3>
      </div>
    </div>
  )
}

export default PlaylistHeader
