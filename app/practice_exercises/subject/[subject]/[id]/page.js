import React from "react";
import SelectTopic from "../../../../../components/practice_exercises/SelectTopic";
import { headers } from "next/headers";

async function page({ params, searchParams }) {
  const { id } = await params;

  const headersList = await headers();
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("host");
  const baseUrl = `${protocol}://${host}`;

  const response = await fetch(
    `${baseUrl}/api/exercises/topics/${parseInt(id)}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  const topics = data.topics;

  return (
    <div className="px-15 py-5">
      <div className="flex flex-1 ">
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="flex flex-col grow  overflow-y-auto bg-white">
            <div className="flex flex-col flex-1 px-3 mt-6">
              <div className="space-y-4">
                <nav className="flex-1 space-y-2 h-screen grid grid-cols-1">
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
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                No topic select yet!
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default page;
