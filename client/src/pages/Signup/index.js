import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import "./signup.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    //check to see if password and confim password match up
    if (password !== confirmPassword) {
      toast.error(
        "Passwords do not match. Please make sure your passwords match."
      );
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // created Account
        const user = userCredential.user;
        console.log(user);
        toast.success("Account Created!");
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        //handle error cases
        switch (errorCode) {
          case "auth/email-already-in-use":
            toast.error("Email address is already in use");
            break;
          case "auth/missing-email":
            toast.error("Please enter email");
            break;
          case "auth/missing-password":
            toast.error("Please enter password");
            break;
          default:
            toast.error("An error occured. Please try again later.");
        }
        //add more shit
      });
  };

  return (
    <div className="container">
      <div className="form">
        <h1 className="text-white text-center m-5">Signup</h1>
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

          <div>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm Password"
            />
          </div>

          <button
            variant="primary"
            className="btn btn-lg btn-block"
            type="submit"
            onClick={onSubmit}
          >
            REGISTER
          </button>
        </form>

        <p className="message">
          Already have an account?{" "}
          <NavLink to="/login" className="signup-link">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;
