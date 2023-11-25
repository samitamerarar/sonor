import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Image5 from "../../assets/pexels-francesco-ungaro-6530797.jpg";
import { ScrollButton } from "./ScrollButton";

export const Feedback = () => {
  return (
    <>
      <Row id="topimagerow" style={{ postion: "relative" }}>
        <Image style={{ height: "400px", width: "100%", objectFit: "cover" }} src={Image5} />
        <ScrollButton />
      </Row>

      <Container id="container" style={{ backgroundColor: "white", marginTop: "50px" }} className="mb-5">
        <Row className="mb-5">
          <h2>VOS COMMENTAIRES</h2>
        </Row>
        <Row>
          <Col md={12}>
            <div style={{ fontSize: "1.5em", fontWeight: "300" }}>
              <p>
                Vos commentaires, suggestions, compliments sont importants pour nous afin que nous puissions nous
                améliorer. Vous pouvez nous faire part de votre expérience avec nous en remplissant le sondage ici.
              </p>

              <p>Note : Votre participation au sondage est strictement anonyme.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
