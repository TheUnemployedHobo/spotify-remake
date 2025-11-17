import { getToken } from "@/lib/utils"

const SERVER_BASE_URL = import.meta.env["VITE_SERVER_BASE_URL"]

export const songGetAll = async () => {
  const response = await fetch(`${SERVER_BASE_URL}/api/songs`, {
    headers: { authorization: getToken() },
    method: "GET",
  })

  return response.json() as Promise<
    {
      artist: string
      genre: string
      id: number
      img: string
      src: string
      title: string
    }[]
  >
}
