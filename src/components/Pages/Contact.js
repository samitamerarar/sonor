import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Image5 from '../../assets/5.jpg'

export const Contact = () => {
  return (
    <>
      <Row style={{ width: `calc(100vw + 5px)` }}>
        <Image style={{ height: "500px", width: '100%', objectFit: 'cover' }} src={Image5}></Image>
      </Row>

      <Container style={{ backgroundColor: 'white', marginTop: '35px' }} className="mb-5">
        <Row className="mb-5">
          <h3>CONTACT</h3>
        </Row>
        <Row>
          <Col md={12}>
            <div style={{ fontSize: "1.5em", fontWeight: "300" }}>
              <p> <span style={{ fontWeight: "400" }}>Lieu :</span> Montréal, Laval et les environs </p>

              <p><span style={{ fontWeight: "400" }}>Téléphone :</span><br />
                Montréal: 514 581-5460<br />
                Laval et les environs: 438 880-9136<br />
              </p>

              <p><span style={{ fontWeight: "400" }}>Courriel :</span> info@locationsonor.com</p><br />
            </div>

            <p style={{ fontSize: "2em", fontWeight: "400" }}>RÉSERVATIONS</p>

            <p style={{ fontSize: "1.5em", fontWeight: "300" }}>Pour toute réservation ou pour des informations concernant la location, veuillez nous contactez.</p>

          </Col>
        </Row>

      </Container >
    </>
  );
};
