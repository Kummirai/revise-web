import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const subjects = await query(`SELECT *FROM subjects`);

    return NextResponse.json({ subjects });
  } catch (error) {
    console.log("Error in /api/subjects:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 },
    );
  }
}
