import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // POST request to the server endpoint
      await axios.post("http://localhost:3001/api/login", {
        email,
        password,
      });
      // Reseting the form

      setEmail("");
      setPassword("");
      alert("Login success!");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="form-container" onSubmit={handleLogin}>
      <h2>Log in</h2>
      <input
        type={"email"}
        placeholder={"example@domain.com"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type={"password"}
        placeholder={"Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit">LOG IN</button>
    </form>
  );
};

export default Login;
