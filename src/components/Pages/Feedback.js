import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Image5 from '../../assets/5.jpg'

export const Feedback = () => {
  return (
    <>
      <Row style={{ width: `calc(100vw + 5px)` }}>
        <Image style={{ height: "500px", width: '100%', objectFit: 'cover' }} src={Image5}></Image>
      </Row>

      <Container style={{ backgroundColor: 'white', marginTop: '35px' }} className="mb-5">
        <Row className="mb-5" >
          <h3>VOS COMMENTAIRES</h3>
        </Row>
        <Row>
          <Col md={12}>
            <div style={{ fontSize: "1.5em", fontWeight: "300" }}>
              <p>
                Vos commentaires, suggestions, compliments sont importants pour nous afin que nous puissions nous améliorer. Vous pouvez nous faire part de votre expérience avec nous en remplissant le sondage ici.
              </p>

              <p>
                Note : Votre participation au sondage est strictement anonyme.
              </p>
            </div>

          </Col>
        </Row>

      </Container>
    </>
  );
};
