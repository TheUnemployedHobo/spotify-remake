import { useRouter } from "@tanstack/react-router"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

function AppTopBarNavigation() {
  const router = useRouter()

  const goBack = () => router.history.back()
  const goForward = () => router.history.forward()

  return (
    <ButtonGroup>
      <Button onClick={goBack} size="icon-lg" variant="outline">
        <ArrowLeft />
      </Button>
      <Button onClick={goForward} size="icon-lg" variant="outline">
        <ArrowRight />
      </Button>
    </ButtonGroup>
  )
}

export default AppTopBarNavigation
