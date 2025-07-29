import dbConnect  from "@/lib/mongodb";
import submissionModel from "@/model/submission";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const submission = {
      ...body,
      ssn: await bcrypt.hash(body.ssn, 10),
    }
    await dbConnect();
    const result = await submissionModel.insertOne({
      ...submission,
      status: "pending",
    });
    
    return new Response(
      JSON.stringify({ success: true, id: "result.insertedId" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error saving verification:", error);

    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
