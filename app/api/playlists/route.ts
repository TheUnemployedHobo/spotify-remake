export async function GET() {
  try {
    return new Response("hello")
  } catch (error) {
    console.error(error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
