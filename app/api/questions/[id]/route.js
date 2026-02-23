import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Topic ID is required" },
        { status: 400 },
      );
    }

    const questions = await query(
      `SELECT * FROM questions WHERE topic_id = $1`,
      [id],
    );

    return NextResponse.json({ questions });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
