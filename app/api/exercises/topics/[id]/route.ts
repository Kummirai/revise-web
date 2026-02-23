import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const topics = await query("SELECT * FROM topics WHERE subject_id = $1", [
      id,
    ]);
    console.log(topics);

    return NextResponse.json({ topics });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
