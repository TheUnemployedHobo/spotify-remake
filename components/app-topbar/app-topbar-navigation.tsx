"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "../ui/button"

function AppTopBarNavigation() {
  const router = useRouter()

  return (
    <div className="space-x-2">
      <Button onClick={router.back} size="icon-lg" variant="secondary">
        <ArrowLeft />
      </Button>
      <Button onClick={router.forward} size="icon-lg" variant="secondary">
        <ArrowRight />
      </Button>
    </div>
  )
}

export default AppTopBarNavigation
