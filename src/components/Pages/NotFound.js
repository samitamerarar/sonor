import React from "react";
import { Container, Row } from "react-bootstrap";

export const NotFound = () => {
  return (
    <>
      <Container id="container" style={{ backgroundColor: "white", marginTop: "50px" }} className="mb-5">
        <Row className="justify-content-md-center">
          <h2>Page Not Found</h2>
        </Row>
      </Container>
    </>
  );
};
