import React from "react";
import "./assignmentlist.css";

function AssignmentList() {
  const dummyData = ["Homework 5.1", "Midterm Essay", "Read chapter 3"];
  return (
    <div className="assignmentList-container">
      <h1>My Assignments</h1>
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

export default AssignmentList;
