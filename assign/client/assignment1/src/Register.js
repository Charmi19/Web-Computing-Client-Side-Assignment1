import React, { useState } from "react";

//Code for creating a registration form
export default function RegistrationForm() {
  const [error, setError] = useState();
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

//API from the Swagger Docs
  const API_URL = "http://131.181.190.87:3000";

  const url = "${API_URL}/user/register";
  
  fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: `${state.email}`,
      password: `${state.password}`,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
     localStorage.setItem("token", res.token);
    });

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      alert("You are registered!");
    } else {
      alert("Password does not match!");
    }
  };

//The following section of code is adapted from the medium article Create login forms using react js hooks and bootstrap
  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
          
        >
          Register
        </button>
      </form>
    </div>
  );
}
