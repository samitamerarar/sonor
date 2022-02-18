import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {
  return (
    <Container style={{ backgroundColor: 'white', marginTop: '35px' }}>
      <Row>
        <h3>CONTACT</h3>
      </Row>
      <Row>
        <Col>
          Lieu : Montréal, Laval et les environs<br /><br />

          Téléphone :<br />
          Montréal: 514 581-5460<br />
          Laval et les environs: 438 880-9136<br /><br />

          Courriel : info@locationsonor.com<br /><br />

          RÉSERVATIONS<br />
          Pour toute réservation ou pour des informations concernant la location, veuillez nous contactez.<br />
        </Col>
      </Row>

    </Container>
  );
};
