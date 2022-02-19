import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Video from '../../assets/home-video2.gif'
import { HomeButton } from './HomeButton'
import { HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HomeElements'
import * as Scroll from 'react-scroll';


export const Home = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  // height: `calc(100vh - 67.5px - calc(100vh - 100%))`
  return (
    <Container fluid >
      <Row className="justify-content-md-center" style={{ backgroundColor: 'black', height: `calc(100vh - 66px)` }}>
        <img src={Video} style={{ width: 'auto', height: `calc(100vh - 66px)`, filter: `opacity(75%) blur(1px)` }} />
        <HeroContent>
          <HeroH1>Location Son'OR</HeroH1>
          <HeroP>Équipements de Sonorisation et Audiovisuel</HeroP>
          <HeroBtnWrapper>
            <Scroll.Link style={{ textDecoration: 'none' }} to="anchor" spy={true} smooth={true} duration={250} offset={-80}>
              <HomeButton to='signup' onMouseEnter={onHover} onMouseLeave={onHover} >
                Défiler{hover ? <ArrowForward /> : <ArrowRight />}
              </HomeButton>
            </Scroll.Link>

          </HeroBtnWrapper>
        </HeroContent>
      </Row>
      <Container id="anchor" style={{ backgroundColor: 'white', marginTop: '35px' }}>
        <Row>
          <h3>ACCUEIL</h3>
        </Row>
        <Row className="mt-5 justify-content-md-center">
          <Col style={{ textAlign: 'center' }} lg="8">
            <span style={{ fontSize: "3em", fontWeight: "bold" }}>«Votre Événement. Notre Priorité.»</span><br />
            <span style={{ fontSize: "1.6em" }}>100% de notre clientèle satisfaite de notre service!</span>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-md-center" >
          <Col style={{ textAlign: 'center' }} lg="8">
            <span style={{ fontSize: "2em", fontWeight: 200 }}>
              Son'OR est une entreprise qui se spécialise dans la location en sonorisation et audiovisuel tout en offrant un service d'installation de désinstallation, à tout moment. Nos Spécialistes du son répondront à vos demandes et vous conseilleront lorsque nécessaire.
            </span>.
          </Col>
        </Row>
        <Row className="mt-5 justify-content-md-center" >
          <Col style={{ textAlign: 'center' }} lg="8">
            <span style={{ fontSize: "2em", fontWeight: 200 }}>
              Son'OR est une entreprise qui se spécialise dans la location en sonorisation et audiovisuel tout en offrant un service d'installation de désinstallation, à tout moment. Nos Spécialistes du son répondront à vos demandes et vous conseilleront lorsque nécessaire.
            </span>.
          </Col>
        </Row>
        <Row className="mt-5 justify-content-md-center" >
          <Col style={{ textAlign: 'center' }} lg="8">
            <span style={{ fontSize: "2em", fontWeight: 200 }}>
              Son'OR est une entreprise qui se spécialise dans la location en sonorisation et audiovisuel tout en offrant un service d'installation de désinstallation, à tout moment. Nos Spécialistes du son répondront à vos demandes et vous conseilleront lorsque nécessaire.
            </span>.
          </Col>
        </Row>
        <Row className="mt-5 justify-content-md-center" >
          <Col style={{ textAlign: 'center' }} lg="8">
            <span style={{ fontSize: "2em", fontWeight: 200 }}>
              Son'OR est une entreprise qui se spécialise dans la location en sonorisation et audiovisuel tout en offrant un service d'installation de désinstallation, à tout moment. Nos Spécialistes du son répondront à vos demandes et vous conseilleront lorsque nécessaire.
            </span>.
          </Col>
        </Row>
        <Row className="mt-5 justify-content-md-center" >
          <Col style={{ textAlign: 'center' }} lg="8">
            <span style={{ fontSize: "2em", fontWeight: 200 }}>
              Son'OR est une entreprise qui se spécialise dans la location en sonorisation et audiovisuel tout en offrant un service d'installation de désinstallation, à tout moment. Nos Spécialistes du son répondront à vos demandes et vous conseilleront lorsque nécessaire.
            </span>.
          </Col>
        </Row>

      </Container>
    </Container >
  );
};
