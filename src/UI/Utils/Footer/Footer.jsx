import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../../../assets/imgs/Logo.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Image src={Logo} className="logo" alt="logo" />
        <Row>
          <Col className="custom__col">
            <Link to={"/"}>Home</Link>
            <Link to={"/payments"}>Payments</Link>
            <Link to={"/balances"}>Balances</Link>
          </Col>
          <Col className="custom__col">
            <Link to={"/customers"}>Customers</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/billing"}>Billing</Link>
          </Col>
          <Col className="custom__col">
            <Link to={"/reports"}>Reports</Link>
            <Link to={"/connect"}>Connect</Link>
            <Link to={"/balances"}>Balances</Link>
          </Col>
        </Row>
      </Container>
      <div className="socialMedia">
        <i className="bi bi-facebook custom__icon"></i>
        <i className="bi bi-instagram custom__icon"></i>
        <i className="bi bi-twitter custom__icon"></i>
      </div>
      <p className="copyRights">
        &copy;{new Date().getFullYear()} All rights reserved to IZO
      </p>
    </footer>
  );
};

export default Footer;
