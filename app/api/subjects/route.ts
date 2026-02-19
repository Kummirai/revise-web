import { createServerClient } from "../../../utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = await cookies;
    const supabase = createServerClient(cookieStore);
    const { data: subjects, error } = await supabase.from("subjects").select();

    if (error) {
      console.log("Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

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
