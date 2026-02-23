import Link from "next/link";
import React from "react";

function SubjectCard({ subject }) {
  return (
    <div>
      <div className=" card p-5 w-96 bg-base-100 shadow-sm">
        <div className="card-body flex flex-col items-center justify-center  ">
          <div className="flex justify-between">
            <h2 className="text-3xl text-slate-700 line-clamp-1">
              {subject.subject_name}
            </h2>
          </div>
          <ul className="my-6 flex flex-col font-light text-center line-clamp-3 h-16.25 text-gray-400 gap-2 text-md">
            <li>
              <span>{subject.description}</span>
            </li>
          </ul>
          <div className="mt-4">
            <Link
              href={`/practice_exercises/subject/${subject.subject_name}/${subject.subject_id}`}
              className="flex items-center gap-2 border bg-slate-800 hover:bg-transparent hover:text-slate-800 hover:border border-slate-800  text-white  text-xs px-4 py-2 rounded-md w-fit transition hover:cursor-pointer"
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
