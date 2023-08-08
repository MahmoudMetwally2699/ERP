import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import { Image } from "react-bootstrap";
import Logo from "../../assets/imgs/Logo.png";
import { login } from "../../features/login";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import dataJson from "./data.json";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    //handle login logic here
  };
  return (
    <section>
      <div class="login-box">
        <div className="logo__login">
          <Image src={Logo} alt="Logo" />
        </div>
        <p className="title">Login</p>
        <Form method="post">
          <Form.Group class="user-box">
            <Form.Control
              required="username"
              name="username"
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <Form.Label>User Name</Form.Label>
          </Form.Group>
          <Form.Group class="user-box">
            <Form.Control
              required="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Form.Label>Password</Form.Label>
          </Form.Group>
          <Link
            onClick={(event) => {
              event.preventDefault();
              const formData = {
                username,
                password,
              };
              const jsonData = JSON.stringify(formData);
              console.log(jsonData);
              dispatch(login(jsonData));
              // navigate("/admin/dashboard");
            }}
            type="submit"
            className="btn-submit "
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link>
        </Form>
        <p>
          Don't have an account?
          <Link href="/signup" class="a2">
            Sign up!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
