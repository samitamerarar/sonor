import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../assets/logo.jpg";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar variant={"dark"} expand="lg" expanded={expanded} style={{ backgroundColor: "#323438" }} fixed="top">
        <Container style={{ fontSize: "17px" }}>
          <Navbar.Brand href="/">
            <img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top" />{" "}
            <span style={{ fontSize: "20px" }}>Location Son'OR</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                Accueil
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/covid19" onClick={() => setExpanded(false)}>Covid-19</Nav.Link> */}
              <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>
                Nos Services
              </Nav.Link>
              <Nav.Link as={Link} to="/nouveautes" onClick={() => setExpanded(false)} className="text-warning">
                Nouveautés
              </Nav.Link>
              <Nav.Link as={Link} to="/realisations" onClick={() => setExpanded(false)}>
                Réalisations
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/faq" onClick={() => setExpanded(false)}>Questions/Réponses</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
