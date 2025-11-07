"use client"

import { Ellipsis, Play } from "lucide-react"
import Image from "next/image"
import { Activity, useState } from "react"

import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { TableCell, TableRow } from "./ui/table"

type PropsType = {
  artist: string
  genre: string
  id: number
  img: string
  title: string
}

function PlaylistSong({ artist, genre, id, img, title }: PropsType) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TableRow
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TableCell>
        <Activity mode={isHovered ? "hidden" : "visible"}>
          <span className="p-3">{id + 1}</span>
        </Activity>
        <Activity mode={isHovered ? "visible" : "hidden"}>
          <Button size="icon-sm" variant="ghost">
            <Play />
          </Button>
        </Activity>
      </TableCell>
      <TableCell className="flex items-center gap-x-2">
        <Image alt="Nothing" className="rounded-xs" height={50} src={img} width={50} />
        <div className="flex flex-col">
          <span className="text-base font-medium">{title}</span>
          <span className="text-muted-foreground text-sm">{artist}</span>
        </div>
      </TableCell>
      <TableCell className="hidden capitalize sm:table-cell">{genre}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon-lg" variant="ghost">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="rounded-xs">
            <DropdownMenuItem>Go to artist</DropdownMenuItem>
            <DropdownMenuItem>Remove</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}

export default PlaylistSong
