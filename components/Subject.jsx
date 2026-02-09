import React from "react";

function Subject({ subject }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="h-60">
        <img
          src={subject.image}
          alt="Shoes"
          className="h-full w-full object-cover rounded-s"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{subject.name}</h2>
        <p>{subject.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">More details</button>
        </div>
      </div>
    </div>
  );
}

export default Subject;
