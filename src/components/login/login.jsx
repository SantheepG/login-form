import React from "react";
import "./Form.css";

const Login = () => {
  return (
    <form className="form-container">
      <h2>Log in</h2>
      <input type={"email"} placeholder={"example@domain.com"}></input>
      <input type={"password"} placeholder={"Password"}></input>
      <button onClick={SubmitEvent}>LOG IN</button>
    </form>
  );
};

export default Login;
