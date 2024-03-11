import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./login.css";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Welcome!");
      navigate("/home");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error("Username or password is incorrect, try again!");
      console.log(errorCode, errorMessage);
    }
    //add all error cases
  };

  return (
    <div className="container">
      <div className="form">
        <h1 className="text-white text-center m-5">Login</h1>
        <form>
          <div>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
            />
          </div>

          <div>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          <button
            variant="primary"
            className="btn btn-lg btn-block"
            type="submit"
            onClick={onSubmit}
          >
            SIGN IN
          </button>
        </form>

        <p className="message">
          Don't have an account?{" "}
          <NavLink to="/signup" className="signup-link">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
