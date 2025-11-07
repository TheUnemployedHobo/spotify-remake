"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "./ui/button"
import { ButtonGroup } from "./ui/button-group"

function AppTopBarNavigation() {
  const router = useRouter()

  return (
    <ButtonGroup>
      <Button onClick={router.back} size="icon-lg" variant="outline">
        <ArrowLeft />
      </Button>
      <Button onClick={router.forward} size="icon-lg" variant="outline">
        <ArrowRight />
      </Button>
    </ButtonGroup>
  )
}

export default AppTopBarNavigation
