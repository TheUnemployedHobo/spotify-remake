import db from "@/lib/db"
import { genres } from "@/lib/db/schema/genre.schema"

export async function GET() {
  try {
    const data = await db.select().from(genres)

    return Response.json(data)
  } catch (error) {
    console.error(error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
