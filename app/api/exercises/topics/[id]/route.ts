import { createServerClient } from "../../../../../utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const cookieStore = await cookies();
    const supabase = createServerClient(cookieStore);

    const { data: topics, error } = await supabase
      .from("topics")
      .select()
      .eq("subject_id", parseInt(id));

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ topics });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
