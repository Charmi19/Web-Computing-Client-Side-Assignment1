import React, { useState } from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import jwt from "jsonwebtoken";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const API_URL = "http://131.181.190.87:3000";
  const url = `${API_URL}/user/login`;
  // let token = localStorage.getItem("token");
  const headers = {
    method: "POST",
    accept: "application/json",
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
    body: JSON.stringify({
      email: `${state.email}`,
      password: `${state.password}`,
    }),
  };

  fetch(url, { headers })
    .then((res) => res.json())
    .then((res) => {
    localStorage.setItem("token", res.token);
    });

   // Message  to tell users if login is successful
    function LoggedIn(){
      alert("You have successfully loggedin!")
    }

// The following section of code is from Reactstrap
  return (
    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={8} size="example@.com.au">
          Email
        </Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@.com.au"
            bsSize="example@.com.au"
            id="Forget Password!"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="password" sm={8} size="password">
          Password
        </Label>
        <Col sm={10}>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </Col>
        <button onClick={LoggedIn}>Submit</button>
      </FormGroup>
      <a href="#"> *Forgot Password? </a>
    </Form>
  );
}
