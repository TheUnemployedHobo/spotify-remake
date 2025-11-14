import { getToken } from "@/lib/utils"

const SERVER_BASE_URL = import.meta.env["VITE_SERVER_BASE_URL"]

export const favoriteGetAll = async () => {
  const response = await fetch(`${SERVER_BASE_URL}/api/favorites`, {
    headers: { authorization: getToken() },
    method: "GET",
  })

  return response.json() as Promise<
    {
      artist: string
      genre: string
      img: string
      songId: number
      songSrc: string
      title: string
    }[]
  >
}

export const favoriteAddOrRemove = async (songId: number) => {
  const response = await fetch(`${SERVER_BASE_URL}/api/favorites/${songId}`, {
    headers: {
      authorization: getToken(),
      "Content-Type": "application/json",
    },
    method: "POST",
  })

  return response.ok
}
