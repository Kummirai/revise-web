import GradeTab from "@/components/practice_exercises/GradeTab";
import SubjectCard from "@/components/practice_exercises/SubjectCard";
import React from "react";
import { createServerClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

async function page() {
  const cookieStore = await cookies();
  const supabase = createServerClient(cookieStore);

  const { data: subjects } = await supabase.from("subjects").select();
  console.log(subjects);

  return (
    <div>
      <GradeTab />
      <div className="pt-10 p-20">
        <SubjectCard />
      </div>
    </div>
  );
}

export default page;
