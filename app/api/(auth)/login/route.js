import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@/utils/supabase/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required",
        },
        { status: 400 },
      );
    }

    const cookieStore = await cookies();
    const supabase = createServerClient(cookieStore); // Added await

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email, // Use the email from request, not hardcoded
      password: password, // Use the password from request, not hardcoded
    });

    if (error) {
      console.error("Sign in error:", error.message);
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 401 },
      );
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: "Signed in successfully",
      data: {
        user: data.user,
        session: data.session,
      },
    });
  } catch (error) {
    console.error("Sign in error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    );
  }
}
