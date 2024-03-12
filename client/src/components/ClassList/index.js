import React from "react";
import "./classlist.css";
import { FaTrash } from "react-icons/fa";

function ClassList() {
  const dummyData = ["Ethics", "Calculus", "Project Management"];
  return (
    <div className="classList-container">
      <h1>My Classes</h1>
      <ul>
        {dummyData.map((className, index) => (
          <div key={index} className="class-item">
            {className}
            <i className="delete-button">
              <FaTrash />
            </i>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ClassList;
