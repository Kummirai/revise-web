import React from "react";

async function GradeTab() {
  return (
    <div className="grid grid-cols-10 px-20 py-10 gap-5">
      <button className="btn btn-outline">Grade 3</button>
      <button className="btn btn-outline btn-primary">Grade 4</button>
      <button className="btn btn-outline btn-secondary">Grade 5</button>
      <button className="btn btn-outline btn-accent">Grade 6</button>
      <button className="btn btn-outline btn-info">Grave 7</button>
      <button className="btn btn-outline btn-success">Grade 8</button>
      <button className="btn btn-outline btn-warning">Grade 9</button>
      <button className="btn btn-outline btn-error">Grade 10</button>
      <button className="btn btn-outline">Grade 11</button>
      <button className="btn btn-outline btn-primary">Grade 12</button>
    </div>
  );
}

export default GradeTab;
