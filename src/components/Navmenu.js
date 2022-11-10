import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Navmenu() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="pt-2">
          <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
            <Navbar.Brand className=" mt-5" href="#home">
              <h3>React Shop</h3>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
