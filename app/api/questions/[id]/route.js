import { createServerClient } from "../../../../utils/supabase/server";
import { cookies } from "next/headers";
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

    const cookieStore = await cookies();
    const supabase = createServerClient(cookieStore);

    const { data: questions, error } = await supabase
      .from("questions")
      .select()
      .eq("topic_id", parseInt(id));

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    console.log(questions);

    return NextResponse.json({ questions });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
