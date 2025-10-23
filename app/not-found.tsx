import { StickyNote } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"

export default function NotFound() {
  return (
    <Empty className="flex h-full items-center justify-center">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <StickyNote />
        </EmptyMedia>
        <EmptyTitle>404 - Page not found!</EmptyTitle>
        <EmptyDescription>The page you were looking for could not be found.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Link href="/">
          <Button>Go back to home</Button>
        </Link>
      </EmptyContent>
    </Empty>
  )
}
