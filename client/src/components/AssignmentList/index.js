import React from "react";
import "./assignmentlist.css";
import { FaTrash, FaCheck } from "react-icons/fa";

function AssignmentList() {
  const dummyData = ["Homework 5.1", "Midterm Essay", "Read chapter 3"];
  return (
    <div className="assignmentList-container">
      <h1>My Assignments</h1>
      <ul>
        {dummyData.map((className, index) => (
          <li key={index} className="class-item">
            {className}
            <div className="icons-container">
              <span className="check-button">
                <FaCheck />
              </span>
              <span className="trash-button">
                <FaTrash />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

//css bug where icons are not scaling properly but ones in class are
export default AssignmentList;
