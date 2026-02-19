import React from "react";

function Subject({ subject }) {
  return (
    <div className="card sm:w-96 bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{subject.subject_name}</h2>
        <p>{subject.description}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-warning">More Subjects</button>
        </div>
      </div>
    </div>
  );
}

export default Subject;
