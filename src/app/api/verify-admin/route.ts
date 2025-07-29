import dbConnect from "@/lib/mongodb";
import adminModel from "@/model/admin";

export async function GET() {
  try {
    await dbConnect();
    const admins = await adminModel.find({})

    return new Response(JSON.stringify(admins[0]), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
