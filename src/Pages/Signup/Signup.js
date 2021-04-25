import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import "./Signup.css";

export default function Signup() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [success, setSuccess] = useState(false);

  function submit(event) {
    event.preventDefault();
    if (!fName || !lName || !email || !password || !phone || !date || !gender) {
      window.alert("make sure you fill all the info! ");
    } else {
      setSuccess(true);

      console.log({ fName, lName, email, phone, date, gender });
    }
  }
  return (
    <div className="center">
      {success && <p className="success"> Success! </p>}

      <h1>Subscribe yourself</h1>
      <p> send us your cv and we find you a match Job!</p>

      <Form onSubmit={submit} className="sign-form">
        <Form.Group className="line">
          <Form.Label className="label">First name</Form.Label>
          <Form.Control
            className="input"
            type="text"
            placeholder="Enter Firstname"
            name="fname"
            onChange={(event) => {
              console.log("new input .value:", event.target.value);
              setFName(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="line">
          <Form.Label className="label">Last name</Form.Label>
          <Form.Control
            className="input"
            type="LName"
            placeholder="Enter Lastname"
            name="lname"
            onChange={(event) => {
              console.log("new input .value:", event.target.value);
              setLName(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="line">
          <Form.Label className="label">Email address</Form.Label>
          <Form.Control
            className="input"
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(event) => {
              console.log("new input .value:", event.target.value);
              setEmail(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="line">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(event) => {
              console.log("new input .value:", event.target.value);
              setPassword(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="line">
          <Form.Label className="label">Phone</Form.Label>
          <Form.Control
            className="input"
            type="phone"
            placeholder="Enter phone"
            name="phone"
            onChange={(event) => {
              console.log("new input .value:", event.target.value);
              setPhone(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="line">
          <Form.Label className="label">Date of birth</Form.Label>
          <Form.Control
            className="input"
            type="date"
            placeholder="Enter date"
            onChange={(event) => {
              console.log("new input .value:", event.target.value);
              setDate(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="line">
          <Form.Label className="label">Gender</Form.Label>
          <Form.Control
            className="input"
            as="select"
            custom
            onChange={(event) => {
              console.log("new input .value:", event.target.value);
              setGender(event.target.value);
            }}>
            <option value=""></option>
            <option value="female">female</option>
            <option value="male">male</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="line">
          <Form.Label className="label">Upload CV :</Form.Label>
          <Form.File
            id="exampleFormControlFile1"
            style={{ marginTop: "30px" }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox" className="line">
          <Form.Check type="checkbox" label="agreed to term and conditions" />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
