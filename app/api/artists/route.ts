import db from "@/lib/db"
import { artists } from "@/lib/db/schema/artist.schema"

export async function GET() {
  try {
    const data = await db.select().from(artists)

    return Response.json(data)
  } catch (error) {
    console.error(error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
