import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import EmpData from "./db";
// import Team2 from "./Team2";
import Test from "./test";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.type;
    value = event.target.value;
    console.log(value);
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      const response = await fetch(
        "https://login-from-dbdca-default-rtdb.firebaseio.com/testdata.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application.json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      //  all filed empty

      if (response) {
        setUser({
          email: "",
          password: "",
        });

        alert("Data store Succesfully");
      }
    } //  all filed empty
    else {
      alert("Plz Fill The Data");
    }

    console.log();
  };

  return (
    <section>
      {/* <Team2 /> */}
      <div className="container aos-init aos-animate">
        <div className="row">
          <EmpData />
        </div>
        <div className="row">
          <Form method="POST">
            <h1>Login Form</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={getUserData}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={getUserData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={postData}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Login;
