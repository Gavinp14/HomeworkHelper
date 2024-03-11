import React from "react";
import "./classlist.css";

function ClassList() {
  const dummyData = ["Ethics", "Calculus", "Project Management"];
  return (
    <div className="classList-container">
      <h1>My Classes</h1>
      <ul>
        {dummyData.map((className, index) => (
          <div key={index} className="class-item">
            {className}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ClassList;
