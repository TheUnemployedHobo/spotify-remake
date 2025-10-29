import { type NextRequest, NextResponse, type ProxyConfig } from "next/server"

// import auth from "./lib/auth"

export async function proxy(req: NextRequest) {
  try {
    // const path = req.nextUrl.pathname

    // const isPublicApiRoute = ["/api/auth/sign-up/email", "/api/auth/sign-in/email"].some((route) => path === route)
    // const isClientApiRoute = ["/signup", "/signin"].some((route) => path === route)

    return NextResponse.next()
  } catch (error) {
    console.error(error)
    return NextResponse.redirect(new URL("/signin", req.url))
  }
}

export const config: ProxyConfig = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
