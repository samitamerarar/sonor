import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Video from '../../assets/home-video2.gif'
import { HomeButton, LinkButton } from '../StyledComponents/HomeButton'
import { HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, ArrowDownward, ArrowDown } from '../StyledComponents/HomeElements'
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <Container fluid className="mb-5">
      <Row className="justify-content-md-center" style={{ backgroundColor: 'black', height: `calc(100vh - 66px)` }}>
        <img src={Video} style={{ width: 'auto', height: `calc(100vh - 66px)`, filter: `opacity(75%) blur(1px)` }} />
        <HeroContent>
          <HeroH1>Location Son'OR</HeroH1>
          <HeroP>Équipements de Sonorisation et Audiovisuel</HeroP>
          <HeroBtnWrapper>
            <Scroll.Link style={{ textDecoration: 'none' }} to="anchor" spy={true} smooth={true} duration={250} offset={-20}>
              <HomeButton onMouseEnter={onHover} onMouseLeave={onHover} >
                {hover ? <ArrowDownward /> : <ArrowDown />}
              </HomeButton>
            </Scroll.Link>
          </HeroBtnWrapper>
        </HeroContent>
      </Row>

      <Container id="anchor" style={{ backgroundColor: 'white', marginTop: '35px' }}>
        <Row className="mb-5" >
          <h3>ACCUEIL</h3>
        </Row>
        <Row className="justify-content-md-center">
          <Col style={{ textAlign: 'center' }} lg="8">
            <span style={{ fontSize: "3em", fontWeight: "bold" }}>«Votre Événement. Notre Priorité.»</span><br />
            <span style={{ fontSize: "1.5em" }}>100% de notre clientèle satisfaite de notre service!</span>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-md-center" >
          <Col style={{ textAlign: 'center' }} lg="8">
            <span style={{ fontSize: "2em", fontWeight: 300 }}>
              Son'OR est une entreprise qui se spécialise dans la location en sonorisation et audiovisuel tout en offrant un service d'installation de désinstallation, à tout moment. Nos Spécialistes du son répondront à vos demandes et vous conseilleront lorsque nécessaire.
            </span>
          </Col>
        </Row>

        <Row className="pt-5 mt-5 mb-5 justify-content-md-center" >
          <Col style={{ textAlign: 'center' }} lg="8">
            <HeroBtnWrapper>
              <Link to='/services' style={{ textDecoration: 'none' }}>
                <LinkButton onMouseEnter={onHover} onMouseLeave={onHover} >
                  Réserver maintenant{hover ? <ArrowForward /> : <ArrowRight />}
                </LinkButton>
              </Link>
            </HeroBtnWrapper>
          </Col>
        </Row>

        <Row className="pt-5">
          <Col md={12} >
            <div style={{ fontSize: "1.2em", fontWeight: "350", transform: `translateY(40px)` }}>
              <p>La qualité sonore exceptionnelle que vous obtiendrez sera grâce à nos équipements de marques reconnues tels que Electro‑Voice, Shure, Pioneer, Soundcraft, Beyerdynamic, etc.</p>

              <p>Zones désservies: Montréal et tous les environs!</p>
            </div>
          </Col>
        </Row>

      </Container>
    </Container >
  );
};
