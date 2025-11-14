import { getToken } from "@/lib/utils"

const SERVER_BASE_URL = import.meta.env["VITE_SERVER_BASE_URL"]

export const artistGetAll = async () => {
  const response = await fetch(`${SERVER_BASE_URL}/api/artists`, {
    headers: { authorization: getToken() },
    method: "GET",
  })

  return response.json() as Promise<{ cover: string; genreName: string; id: number; name: string }[]>
}
