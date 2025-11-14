import { Link } from "@tanstack/react-router"

import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "../ui/item"

type PropsType = {
  cover: string
  description: string
  href: string
  title: string
}

function PlaylistCard({ cover, description, href, title }: PropsType) {
  return (
    <Link to={href}>
      <Item className="bg-muted rounded-[10px]" variant="outline">
        <ItemHeader>
          <img alt={title} className="aspect-square w-full rounded-xs object-cover" src={cover} />
        </ItemHeader>
        <ItemContent>
          <ItemTitle className="text-xl">{title}</ItemTitle>
          <ItemDescription className="capitalize">{description}</ItemDescription>
        </ItemContent>
      </Item>
    </Link>
  )
}

export default PlaylistCard
