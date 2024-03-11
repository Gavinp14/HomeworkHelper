import React from "react";
import "./addassignment.css";

function AddAssignment() {
  //select option contains dummy data for now
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
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
  );
}

export default AddAssignment;
