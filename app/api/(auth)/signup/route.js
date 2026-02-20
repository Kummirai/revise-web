import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@/utils/supabase/server";

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    const cookieStore = await cookies();
    const supabase = createServerClient(cookieStore);

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username, // This stores username in user metadata
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/plan`,
      },
    });

    if (error) {
      console.error("Signup error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Check if user needs email confirmation
    if (data?.user?.identities?.length === 0) {
      return NextResponse.json({
        success: true,
        message: "User already registered",
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Account successfully created! Please check your email to confirm.",
        data: data,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(`Error in /api/signup:`, error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
