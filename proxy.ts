import { getSessionCookie } from "better-auth/cookies"
import { type NextRequest, NextResponse, type ProxyConfig } from "next/server"

export async function proxy(request: NextRequest) {
  return NextResponse.next()
}

export const config: ProxyConfig = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
