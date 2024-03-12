import React from "react";
import "./addassignment.css";

function AddAssignment() {
  //select option contains dummy data for now
  const dummyData = ["Ethics", "Calculus", "Project Management"];
  return (
    <div className="add-assignment-container">
      <h1>Add Assignment</h1>
      <div>
        <label>Assignment Name</label>
        <input type="text" placeholder="Enter Assignment" />
      </div>
      <div>
        <label>Due Date</label>
        <input type="date" />
      </div>
      <div>
        <label>Select Class</label>
        <select>
          {dummyData.map(
            (
              classItem,
              index //dummy data for classes
            ) => (
              <option key={index} value={classItem}>
                {classItem}
              </option>
            )
          )}
        </select>
      </div>
      <button className="btn btn-primary mt-3 add-assignment-button">
        Add Assignment
      </button>
    </div>
  );
}

export default AddAssignment;
