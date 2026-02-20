"use client";

import Link from "next/link";
import React from "react";

function Subject({ subject }) {
  console.log(subject);

  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative  h-96 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer"
    >
      {visible && (
        <div
          className="pointer-events-none blur-xl bg-linear-to-r from-slate-400 via-slate-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
          style={{ top: position.y - 120, left: position.x - 120 }}
        />
      )}

      <div className="relative z-10 bg-white p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full shadow-md my-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-1 line-clamp-1">
          {subject.subject_name}{" "}
        </h2>
        {/* <p className="text-sm text-indigo-500 font-medium mb-4">
          Software Developer
        </p> */}
        <p className="text-sm text-gray-500 mb-4 px-4">{subject.description}</p>
        <div className="flex space-x-4 mb-4 text-xl text-indigo-600">
          <Link href={"/practice_exercises"}>
            <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white text-xs px-8 py-3 mt-8 rounded-full transition hover:cursor-pointer">
              <span>View Practice Exercises</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subject;
