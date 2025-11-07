import Image from "next/image"
import Link from "next/link"

import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "./ui/item"

type PropsType = {
  cover: string
  description: string
  href: string
  title: string
}

function PlaylistCard({ cover, description, href, title }: PropsType) {
  return (
    <Link href={href}>
      <Item className="bg-muted rounded-[10px]" variant="outline">
        <ItemHeader>
          <Image
            alt={title}
            className="aspect-square w-full rounded-xs object-cover"
            height={128}
            src={cover}
            width={128}
          />
        </ItemHeader>
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription className="capitalize">{description}</ItemDescription>
        </ItemContent>
      </Item>
    </Link>
  )
}

export default PlaylistCard
