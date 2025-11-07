import { Palette, Play, Shuffle } from "lucide-react"

import { Button } from "@/components/ui/button"

function PlaylistMidControl() {
  return (
    <div className="my-5 space-x-5">
      <Button className="size-12">
        <Play />
      </Button>
      <Button size="icon-lg" variant="ghost">
        <Shuffle />
      </Button>
      <Button size="icon-lg" variant="ghost">
        <Palette />
      </Button>
    </div>
  )
}

export default PlaylistMidControl
