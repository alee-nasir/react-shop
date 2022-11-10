import React from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navmenu() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="me-5" href="#home">
            React Shop
          </Navbar.Brand>
          {/* <Nav className="me-auto ">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#offers">Offers</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
    </>
  );
}
