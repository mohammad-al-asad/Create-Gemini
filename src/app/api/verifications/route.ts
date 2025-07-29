import dbConnect from "@/lib/mongodb";
import submissionModel from "@/model/submission";

export async function GET() {
  try {
    await dbConnect();
    const verifications = await submissionModel.find({}).sort({ createdAt: -1 })

    return new Response(JSON.stringify(verifications), {
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
