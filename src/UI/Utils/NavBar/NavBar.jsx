import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css"; // Import the CSS file
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import {
  MDBContainer,
  MDBCol,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBRow,
} from "mdb-react-ui-kit";

import logoImage from "../../../assets/imgs/Logo.png"; // Replace with the actual path to your logo image
import profileImage from "../../../assets/imgs/Logo.png"; // Replace with the actual path to your profile image

function NavBar() {
  function clearTokenFromLocalStorage ()
  {
    localStorage.removeItem( "token" ); // Replace "authToken" with the actual name of your token key
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logoImage}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top logo-black"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Payments</Nav.Link>
            <Nav.Link href="#action2">Customers</Nav.Link>
            <Nav.Link href="#action2">Products</Nav.Link>
            <MDBNavbarItem className="position-static">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  More
                </MDBDropdownToggle>
                <MDBDropdownMenu
                  className="mt-0 w-100 justify-content-center"
                  style={{
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0",
                  }}
                >
                  <MDBContainer>
                    <MDBRow className="my-4">
                      <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
                        <p className="text-uppercase font-weight-bold">
                          Payments
                        </p>
                        <a href="" className="text-dark">
                          <MDBRow className="mb-4 border-bottom pb-2">
                            <MDBCol col="3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Hollywood Sign on The Hill"
                              />
                            </MDBCol>
                            <MDBCol col="9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </a>
                        <a href="" className="text-dark">
                          <MDBRow className="mb-4 border-bottom pb-2">
                            <MDBCol col="3">
                              <FontAwesomeIcon
                                icon={faDollarSign}
                                className="box-icon"
                              />
                            </MDBCol>
                            <MDBCol col="9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </a>
                        <a href="" className="text-dark">
                          <MDBRow className="mb-4 border-bottom pb-2">
                            <MDBCol col="3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Los Angeles Skyscrapers"
                              />
                            </MDBCol>
                            <MDBCol col="9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </a>
                        <a href="" className="text-dark">
                          <MDBRow className="mb-4 border-bottom pb-2">
                            <MDBCol col="3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Skyscrapers"
                              />
                            </MDBCol>
                            <MDBCol col="9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </a>
                      </MDBCol>
                      <MDBCol md="6" lg="4" className="mb-4 mb-md-0">
                        <p className="text-uppercase font-weight-bold">
                          Iste quaerato
                        </p>
                        <a href="" className="text-dark">
                          <MDBRow className="mb-4 border-bottom pb-2">
                            <MDBCol col="3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Hollywood Sign on The Hill"
                              />
                            </MDBCol>
                            <MDBCol col="9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </a>
                        <a href="" className="text-dark">
                          <MDBRow className="mb-4 border-bottom pb-2">
                            <MDBCol col="3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Palm Springs Road"
                              />
                            </MDBCol>
                            <MDBCol col="9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </a>
                        <a href="" className="text-dark">
                          <MDBRow className="mb-4 border-bottom pb-2">
                            <MDBCol col="3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Los Angeles Skyscrapers"
                              />
                            </MDBCol>
                            <MDBCol col="9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </a>
                        <a href="" className="text-dark">
                          <MDBRow className="border-bottom pb-2">
                            <MDBCol col="3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Skyscrapers"
                              />
                            </MDBCol>
                            <MDBCol col="9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary custom__style">Search</Button>
          </Form>
          {/* Profile Image and Dropdown */}
          <Nav id="profile-dropdown">
            <NavDropdown
              title={
                <React.Fragment>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "#e6e9ef", margin: "0px 5px 0 5px" }}
                  />

                  <span className="d-none d-lg-inline-block user">
                    John Doe
                  </span>
                </React.Fragment>
              }
              id="profile-dropdown-menu"
            >
              <NavDropdown.Item href="#dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={ clearTokenFromLocalStorage }>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
