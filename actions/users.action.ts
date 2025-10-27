"use server"

import auth from "@/lib/auth"

export const userSignUp = async (f: FormData) => {
  const email = f.get("email") as string
  const password = f.get("password") as string

  const response = await auth.api.signUpEmail({
    asResponse: true,
    //@ts-expect-error no need for name and image
    body: { email, password },
  })

  return response.ok
}

export const userSignIn = async (f: FormData) => {
  const email = f.get("email") as string
  const password = f.get("password") as string
  const remember = f.get("remember") as string

  const response = await auth.api.signInEmail({
    asResponse: true,
    body: { email, password, rememberMe: Boolean(remember) },
  })

  return response.ok
}
