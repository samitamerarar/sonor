import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Image5 from '../../assets/5.jpg'

export const Services = () => {
  return (
    <>
      <Row style={{ width: `calc(100vw + 5px)` }}>
        <Image style={{ height: "500px", width: '100%', objectFit: 'cover' }} src={Image5}></Image>
      </Row>

      <Container style={{ backgroundColor: 'white', marginTop: '35px' }}>
        <Row className="mb-5" >
          <h3>NOS SERVICES</h3>
        </Row>
        <Row className="mb-5">
          <Col md={12} >
            <p style={{ fontSize: "1.4em", fontWeight: "350" }}><span style={{ fontWeight: "500" }}>Clientèle: </span>Particulier · Petite/Moyenne/Grande Entreprise · Vous êtes la bienvenue!</p>

            <p style={{ fontSize: "1.4em", fontWeight: "350" }}><span style={{ fontWeight: "500" }}>Événements: </span>Mariage, fiançailles, Conférence, Coktail dînatoire, Fête de bureau, Événement résidentiel ou dans une salle louée et, bien plus encore!</p>

            <p style={{ fontSize: "1.4em", fontWeight: "350" }}><span style={{ fontWeight: "500" }}>Équipements: </span>Haut-Parleurs · Microphones avec/sans fil · Console de mixage · Subwoofers · Éclairage intelligent · Machine à fumée · Éclairage standard et/ou d'effets · Projecteur de vidéo/écran</p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={12} >
            <p style={{ fontSize: "2em", fontWeight: "400" }} className="mb-4">ENSEMBLES POPULAIRES</p>

            <div style={{ fontSize: "1.4em", fontWeight: "350" }}>
              <p style={{ lineHeight: "2" }} className="mb-4">
                1. (2) Haut-Parleurs 12 po avec trépieds, (1) Micro avec fil, fillage, fils auxiliaires.<br />
                ❤️ (Parfait pour Conférence, Cocktail dînatoire)
              </p>

              <p style={{ lineHeight: "2" }} className="mb-4">
                2. (2) Haut-Parleurs 12 po avec trépieds, (1) Subwoofer 18 po, (1) Micro avec fil, fils auxiliaires.<br />
                ❤️ (Parfait pour Fête de bureau, Événement résidentiel)
              </p>

              <p style={{ lineHeight: "2" }} className="mb-5">
                3. (2) Haut-Parleurs 12 po avec trépieds, (1) Subwoofer 18 po, (1) Console mixeur à 16 entrées, Micros sans fil, fillage, fils auxiliaires.<br />
                ❤️ (Parfait pour Mariage, Fiancailles, Événement dans une salle louée)<br />
              </p>

              <p className="mb-5">Note: Tous les ensembles peuvent êtres modifiés pour y ajouter de l'éclairage et d'autres accessoires.</p>

              <p className="mb-5">Obtenir une soumission</p>

            </div>


          </Col>
        </Row >
        <Row className="mb-5">
          <Col md={12} >
            <div style={{ fontSize: "1.4em", fontWeight: "350" }}>
              <p>La qualité sonore exceptionnelle que vous obtiendrez sera grâce à nos équipements de marques reconnues tels que Electro‑Voice, Shure, Pioneer, Soundcraft, Beyerdynamic, etc.</p>

              <p>Zones désservies: Montréal et tous les environs!</p>
            </div>
          </Col>
        </Row>

      </Container >
    </>
  );
};
