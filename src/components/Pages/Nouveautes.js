import React from "react";
import { CardGroup, Card, Container, Row, Image, Col } from "react-bootstrap";
import TopImage from "../../assets/pexels-francesco-ungaro-6530797.jpg";
import NouveauteVideo1 from "../../assets/nouveaute1.mp4";
import { ScrollButton } from "./ScrollButton";

export const Nouveautes = () => {
  return (
    <>
      <Row id="topimagerow" style={{ postion: "relative" }}>
        <Image style={{ height: "400px", width: "100%", objectFit: "cover" }} src={TopImage} />
        <ScrollButton />
      </Row>

      <Container id="container" style={{ backgroundColor: "white", marginTop: "50px" }} className="mb-5">
        <Row className="mb-5">
          <h2>NOUVEAUTÉS</h2>
        </Row>

        <Row>
          <Col md={8} className="d-flex align-items-center">
            <p style={{ fontSize: "1.5em", fontWeight: "300" }}>
              Son’OR est fière d’être la première compagnie au Québec à proposer des revêtements personnalisés à ces
              haut-parleurs. Essayez notre ensemble professionnel Électro-Voice 15 pouces avec un revêtement doré et Or
              14K incrusté en 12 points sur chaque Haut-parleur fait à la main. Donnez une ambiance plus prestigieuse à
              votre évènement !
            </p>
          </Col>
          <Col md={4}>
            {/* You can replace the placeholder URL with your actual video URL */}
            <Card className="m-3">
              <video
                style={{ objectFit: "fill", height: "100%" }}
                src={NouveauteVideo1}
                controls
                muted
                type="video/mp4"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
