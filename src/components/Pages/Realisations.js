import React from "react";
import { CardGroup, Card, Container, Row, Image } from "react-bootstrap";
import Image1 from '../../assets/1.jpg'
import Image2 from '../../assets/2.jpg'
import Image3 from '../../assets/3.jpg'
import Image4 from '../../assets/4.2.jpg'
import Image5 from '../../assets/5.jpg'
import Video1 from '../../assets/1.mp4'
import Video2 from '../../assets/2.mp4'
import Video3 from '../../assets/3.mp4'
import Video4 from '../../assets/4.mp4'

export const Realisations = () => {
  return (
    <>
      <Row style={{ width: `calc(100vw + 5px)` }}>
        <Image style={{ height: "500px", width: '100%', objectFit: 'cover' }} src={Image5}></Image>
      </Row>

      <Container style={{ backgroundColor: 'white', marginTop: '35px' }} className="mb-5">
        <Row className="mb-5">
          <h3>PHOTOS</h3>
        </Row>
        <Container className="mb-5">

          <CardGroup >
            <Card className="m-3">
              <Card.Img style={{ height: "100%" }} src={Image4} />
            </Card>
            <Card className="m-3">
              <Card.Img style={{ height: "100%" }} src={Image5} />
            </Card>
          </CardGroup>

          <CardGroup >
            <Card className="m-3">
              <Card.Img style={{ height: "100%" }} src={Image2} />
            </Card>
            <Card className="m-3">
              <Card.Img style={{ height: "100%" }} src={Image3} />
            </Card>
            <Card className="m-3">
              <Card.Img style={{ height: "100%" }} src={Image1} />
            </Card>
          </CardGroup>
        </Container>

        <Row className="mb-5">
          <h3>VIDEOS</h3>
        </Row>
        <Container className="mb-5">

          <CardGroup >
            <Card className="m-3">
              <video style={{ objectFit: "fill", height: "100%" }} src={Video1} controls muted type="video/mp4" />
            </Card>
            <Card className="m-3">
              <video style={{ objectFit: "fill", height: "100%" }} src={Video2} controls muted type="video/mp4" />
            </Card>
          </CardGroup>


          <CardGroup >
            <Card className="m-3">
              <video style={{ objectFit: "fill", height: "100%" }} src={Video3} controls muted type="video/mp4" />
            </Card>
            <Card className="m-3">
              <video style={{ objectFit: "fill", height: "100%" }} src={Video4} controls muted type="video/mp4" />
            </Card>
          </CardGroup>

        </Container>

      </Container>
    </>
  );
};
