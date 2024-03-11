import React from "react";
import "./addclass.css";

function AddClass() {
  return (
    <div className="add-assignment-container">
      <h1>Add Class</h1>
      <div>
        <label>Class Name</label>
        <input type="text" placeholder="Enter Assignment" />
      </div>
      <div>
        <label>Course Number</label>
        <input type="text" placeholder="Enter Course Number" />
      </div>
      <button className="btn btn-primary mt-3 add-class-button">
        Add Class
      </button>
    </div>
  );
}

export default AddClass;
