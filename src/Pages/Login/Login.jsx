import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Login.css";
import { Image } from "react-bootstrap";
import Logo from "../../assets/imgs/Logo.png";
const Login = () => {
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
        <Form>
          <Form.Group class="user-box">
            <Form.Control required="username" name="username" type="email" />
            <Form.Label>Email</Form.Label>
          </Form.Group>
          <Form.Group class="user-box">
            <Form.Control required="password" name="password" type="password" />
            <Form.Label>Password</Form.Label>
          </Form.Group>
          <Button
            onClick={loginHandler()}
            type="submit"
            className="btn-submit "
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Button>
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
