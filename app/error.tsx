"use client"

import { ServerCrash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"

type PropsType = {
  error: {
    digest: string
    environmentName: string
    message: string
    name: string
    stack: string
  }
  reset: () => void
}

export default function Error({ error, reset }: PropsType) {
  return (
    <Empty className="flex h-full items-center justify-center">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ServerCrash />
        </EmptyMedia>
        <EmptyTitle>{error.name}</EmptyTitle>
        <EmptyDescription>{error.message}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button onClick={reset}>Reset</Button>
      </EmptyContent>
    </Empty>
  )
}
