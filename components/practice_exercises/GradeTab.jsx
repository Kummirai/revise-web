"use client";

import React from "react";

function GradeTab({ handleGrade }) {
  const grades = [
    { id: 3, grade: 3 },
    { id: 4, grade: 4 },
    { id: 5, grade: 5 },
    { id: 6, grade: 6 },
    { id: 7, grade: 7 },
    { id: 8, grade: 8 },
    { id: 9, grade: 9 },
    { id: 10, grade: 10 },
    { id: 11, grade: 11 },
    { id: 12, grade: 12 },
  ];

  return (
    <div className="grid grid-cols-10 px-20 py-10 gap-5">
      {grades.map((grade) => {
        return (
          <button
            key={grade.id}
            className={
              grade.grade % 2 === 0
                ? "btn btn-outline btn-info"
                : "btn btn-outline btn-error"
            }
            onClick={() => handleGrade(grade.grade)}
          >
            <span>Grade</span>
            <span>{grade.grade}</span>
          </button>
        );
      })}
    </div>
  );
}

export default GradeTab;
