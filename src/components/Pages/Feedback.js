import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Feedback = () => {
  return (
    <Container style={{ backgroundColor: 'white', marginTop: '35px' }}>
      <Row>
        <h3>VOS COMMENTAIRES</h3>
      </Row>
      <Row>
        <Col>
          Vos commentaires, suggestions, compliments sont importants pour nous afin que nous puissions nous améliorer. Vous pouvez nous faire part de votre expérience avec nous en remplissant le sondage ici.<br /><br />

          Note : Votre participation au sondage est strictement anonyme.<br />
        </Col>
      </Row>

    </Container>
  );
};
