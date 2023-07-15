import React from "react";
import "./Form.css";

const Signup = () => {
  return (
    <form className="form-container">
      <h2>Create Account</h2>
      <input type={"text"} placeholder={"John Wick"}></input>
      <input type={"email"} placeholder={"example@domain.com"}></input>
      <input type={"password"} placeholder={"Password"}></input>
      <button onClick={SubmitEvent}>SIGN UP</button>
    </form>
  );
};

export default Signup;
