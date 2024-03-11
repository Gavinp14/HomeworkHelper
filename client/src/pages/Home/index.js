import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddAssignment from "../../components/AddAssignment";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Logged Out!");
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="main-container">
      <h1 className="text-center text-white mt-4">Homework Planner</h1>
      <button onClick={handleLogout} className="btn mt-1 logout-button">
        Logout
      </button>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <AddAssignment />
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
