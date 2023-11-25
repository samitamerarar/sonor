import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Image5 from "../../assets/pexels-francesco-ungaro-6530797.jpg";
import { ScrollButton } from "./ScrollButton";

export const Contact = () => {
  return (
    <>
      <Row id="topimagerow">
        <Image style={{ height: "400px", width: "100%", objectFit: "cover" }} src={Image5} />
        <ScrollButton />
      </Row>

      <Container id="container" style={{ backgroundColor: "white", marginTop: "50px" }} className="mb-5">
        <Row className="mb-5">
          <h2>CONTACT</h2>
        </Row>
        <Row>
          <Col md={12}>
            <div style={{ fontSize: "1.5em", fontWeight: "300" }}>
              <p>
                <span style={{ fontWeight: "400" }}>Lieu :</span> Montréal, Laval et les environs{" "}
              </p>

              <p>
                <span style={{ fontWeight: "400" }}>Téléphone :</span>
                <br />
                Montréal, Laval et les environs : <a href="tel:5145815460">(514) 581-5460</a>
              </p>

              <p>
                <span style={{ fontWeight: "400" }}>Courriel :</span>{" "}
                <a href="mailto:locationsonore@gmail.com">locationsonore@gmail.com</a>
              </p>
              <br />
            </div>

            <p style={{ fontSize: "2em", fontWeight: "400" }}>RÉSERVATIONS</p>

            <p style={{ fontSize: "1.5em", fontWeight: "300" }}>
              Pour toute réservation ou pour des informations concernant la location, veuillez nous contactez.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
