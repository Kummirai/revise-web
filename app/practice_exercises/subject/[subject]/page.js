import GradeTab from "@/components/practice_exercises/GradeTab";
import React from "react";

async function page({ params }) {
  const { subject } = await params;

  const handleGradeThree = async () => {
    "use server";
  };

  return (
    <div className="min-h-[60vh]">
      <GradeTab handleGradeThree={handleGradeThree} />
      <div className="flex flex-1 items-center justify-center">
        <h2 className="text-gray-300 font-thin text-3xl">
          No grade selected yet!
        </h2>
      </div>
    </div>
  );
}

export default page;
