import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // POST request to the server endpoint
      await axios.post("http://localhost:3001/api/signup", {
        name,
        email,
        password,
      });
      // Reseting the form
      setName("");
      setEmail("");
      setPassword("");
      alert("User registered successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <input
        type="text"
        placeholder="John Wick"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="example@domain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">SIGN UP</button>
    </form>
  );
};

export default Signup;
