import React from "react";
import { createServerClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import SelectTopic from "@/components/practice_exercises/SelectTopic";

async function page({ params, searchParams }) {
  const { id } = await params;

  const cookieStore = await cookies();
  const supabase = createServerClient(cookieStore);

  const { data: topics } = await supabase
    .from("topics")
    .select()
    .eq("subject_id", id);

  return (
    <div className="px-15 py-5">
      <div className="flex flex-1 ">
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="flex flex-col grow  overflow-y-auto bg-white">
            <div className="flex flex-col flex-1 px-3 mt-6">
              <div className="space-y-4">
                <nav className="flex-1 space-y-2 h-screen">
                  {topics.map((topic) => {
                    return <SelectTopic key={topic.topic_id} topic={topic} />;
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <main>
            <div className="py-6">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default page;
