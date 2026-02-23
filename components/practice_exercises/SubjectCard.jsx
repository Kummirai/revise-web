import Link from "next/link";
import React from "react";

function SubjectCard({ subject }) {
  return (
    <div>
      <div className="card p-5 w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold line-clamp-1">
              {subject.subject_name}
            </h2>
            {/* <span className="text-xl">Grade {subject.grade_range_start}</span> */}
          </div>
          <ul className="mt-6 flex flex-col font-light text-gray-600 gap-2 text-md">
            <li>
              <span>{subject.description}</span>
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href={`/practice_exercises/subject/${subject.subject_name}/${subject.subject_id}`}
              className="flex items-center gap-2 border border-slate-800 hover:bg-slate-900 hover:text-white text-slate-800 text-xs px-4 py-2 mt-8 rounded-md w-fit transition hover:cursor-pointer"
            >
              Exercises
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectCard;
