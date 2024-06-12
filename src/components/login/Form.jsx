import React from "react";
import "./Form.css";
import Login from "./login";
import Signup from "./signup";
import { useState } from "react";
const Form = () => {
  const [displayLogin, setDisplayLogin] = useState(false);

  const handleLoginClick = () => {
    setDisplayLogin(true);
  };

  const handleSignupClick = () => {
    setDisplayLogin(false);
  };

  return (
    <>
      <div className="circle"></div>
      <div className="card">
        <div className="options">
          <span>
            <a
              className={`${!displayLogin ? "active" : ""} signup`}
              onClick={handleSignupClick}
            >
              Signup
            </a>
            <a
              className={`${displayLogin ? "active" : ""} login`}
              onClick={handleLoginClick}
            >
              Login
            </a>
          </span>
        </div>

        {displayLogin ? <Login /> : <Signup />}
        <footer>Santheep's craft</footer>
      </div>
    </>
  );
};

export default Form;
