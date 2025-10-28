import db from "@/lib/db"
import { songs } from "@/lib/db/schema/song.schema"

export async function GET() {
  try {
    const data = await db.select().from(songs)

    return Response.json(data)
  } catch (error) {
    console.error(error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
