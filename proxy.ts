import { type NextRequest, NextResponse, type ProxyConfig } from "next/server"

import auth from "./lib/auth"

export async function proxy(req: NextRequest) {
  const session = await auth.api.getSession({ headers: req.headers })

  console.log(session)

  return NextResponse.next()
}

export const config: ProxyConfig = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
