import { getToken } from "@/lib/utils"

const SERVER_BASE_URL = import.meta.env["VITE_SERVER_BASE_URL"]

export const genreGetAll = async () => {
  const response = await fetch(`${SERVER_BASE_URL}/api/genres`, {
    headers: { authorization: getToken() },
    method: "GET",
  })

  return response.json() as Promise<{ id: number; name: string }[]>
}
