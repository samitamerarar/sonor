import React from "react";
import { Container, Row } from "react-bootstrap";

export const Realisations = () => {
  return (
    <Container style={{ backgroundColor: 'white', marginTop: '35px' }}>
      <Row>
        <h3>PHOTOS</h3>
      </Row>
      <Container>
        photos...
      </Container>

      <Row>
        <h3>VIDEOS</h3>
      </Row>
      <Container>
        videos...
      </Container>

    </Container>
  );
};
