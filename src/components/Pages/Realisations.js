import React from "react";
import { CardGroup, Card, Container, Row, Image } from "react-bootstrap";
import Image1 from '../../assets/1.jpg'
import Image2 from '../../assets/2.jpg'
import Image3 from '../../assets/3.jpg'
import Image4 from '../../assets/4.2.jpg'
import Image5 from '../../assets/5.jpg'
import Image6 from '../../assets/6.jpg'
import TopImage from '../../assets/pexels-francesco-ungaro-6530797.jpg'
import Video1 from '../../assets/1.mp4'
import Video2 from '../../assets/2.mp4'
import Video3 from '../../assets/3.mp4'
import Video4 from '../../assets/4.mp4'
import Video5 from '../../assets/5.mp4'
import Video6 from '../../assets/6.mp4'
import Video7 from '../../assets/7.mp4'
import { ScrollButton } from "./ScrollButton";

export const Realisations = () => {
  return (
    <>
      <Row id="topimagerow" style={{ postion: "relative" }}>
        <Image style={{ height: "400px", width: '100%', objectFit: 'cover' }} src={TopImage} />
        <ScrollButton />
      </Row>

      <Container id="container" style={{ backgroundColor: 'white', marginTop: '50px' }} className="mb-5">
        <Row className="mb-5">
          <h3>PHOTOS</h3>
        </Row>
        <Container className="mb-5">

          <CardGroup >
            <Card className="m-3">
              <Card.Img style={{ height: "100%" }} src={Image6} />
            </Card>
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
              <video style={{ objectFit: "fill", height: "100%" }} src={Video5} controls muted type="video/mp4" />
            </Card>
            <Card className="m-3">
              <video style={{ objectFit: "fill", height: "100%" }} src={Video1} controls muted type="video/mp4" />
            </Card>
            <Card className="m-3">
              <video style={{ objectFit: "fill", height: "100%" }} src={Video2} controls muted type="video/mp4" />
            </Card>
          </CardGroup>

          <CardGroup >
            <Card className="m-3">
              <video style={{ objectFit: "fill", height: "100%" }} src={Video6} controls muted type="video/mp4" />
            </Card>
            <Card className="m-3">
              <video style={{ objectFit: "fill", height: "100%" }} src={Video7} controls muted type="video/mp4" />
            </Card>
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
