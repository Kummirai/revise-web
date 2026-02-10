import SubjectCard from "../../components/practice_exercises/SubjectCard";
import React from "react";
import { createServerClient } from "../../utils/supabase/server";
import { cookies } from "next/headers";

async function page() {
  const cookieStore = await cookies();
  const supabase = createServerClient(cookieStore);

  const { data: subjects } = await supabase.from("subjects").select();

  return (
    <div>
      <div className="pt-10 sm:p-20 grid sm:grid-cols-3 gap-5">
        {subjects.map((subject) => {
          return <SubjectCard key={subject.subject_id} subject={subject} />;
        })}
      </div>
    </div>
  );
}

export default page;
