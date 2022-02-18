import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant={"dark"} expand="lg" expanded={expanded} sticky="top">

        <Container style={{ fontSize: "17px" }}>
          <Navbar.Brand href="/"><span style={{ fontSize: "20px" }}>Location Son'OR</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
            </Nav>
            <Nav >
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Accueil</Nav.Link>
              <Nav.Link as={Link} to="/covid19" onClick={() => setExpanded(false)}>Covid-19</Nav.Link>
              <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>Nos Services</Nav.Link>
              <Nav.Link as={Link} to="/realisations" onClick={() => setExpanded(false)}>Réalisations</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
              <Nav.Link as={Link} to="/commentaires" onClick={() => setExpanded(false)}>Vos Commentaires</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;