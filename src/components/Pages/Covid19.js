import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Image5 from '../../assets/5.jpg'

export const Covid19 = () => {
  return (
    <>
      <Row style={{ width: `calc(100vw + 5px)` }}>
        <Image style={{ height: "500px", width: '100%', objectFit: 'cover' }} src={Image5}></Image>
      </Row>

      <Container style={{ backgroundColor: 'white', marginTop: '35px' }}>
        <Row className="mb-5">
          <h3>PROTOCOLE SANITAIRE POST COVID SONOR</h3>
        </Row>
        <Row className="mb-5">
          <Col md={12}>
            <p style={{ fontSize: "1.5em", fontWeight: "400" }}>Suite aux recommandations de notre gouvernement et de l’Institut National de la
              Santé Publique, nous désirons nous assurer que nos employés et notre clientèle
              soient protégés du risque de contracter le virus. Comme la situation et les mesures
              recommandées par le gouvernement évoluent rapidement, il se peut que ce
              protocole soit appelé à changer. Nous vous tiendrons informé de tous changements.</p><br />

            <p style={{ fontSize: "1.5em", fontWeight: "500" }}>LOCATION SON’OR OFFRERA TOUJOURS UN SERVICE DE LOCATION
              AVEC INSTALLATION ET DÉSINSTALLATION DE NOTRE ÉQUIPEMENT
              INCLUS DANS NOS FORFAITS.
            </p><br />

            <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              Les mesures suivantes ont été mise en place :
            </p>

            <div style={{ fontSize: "1.4em" }}>
              <p>
                - Vérification de l’état de santé de tout employé qui aura intervenir
                lors d’une demande de location par un client. Si un employé
                présente des symptômes du Covid-19, il ne pourra pas participer dans
                la préparation ou l’organisation de l’évènement.
              </p>

              <p>
                - Vérification de l’état de santé de nos clients à la prise de rendez –
                vous et lors de l’installation de notre équipement.
              </p>

              <p>
                - Hygiène. Chaque employé présent a un évènement devra se laver
                les mains <span style={{ fontWeight: "bold" }}>avant et après</span> l’installation de l’équipement SON’OR
                (lavage à l’eau et au savon ou utilisation d’une solution hydro
                alcoolique (Purell*). <span style={{ fontWeight: "bold" }}>Le port du couvre-visage, de gants et de
                  lunette de protection sera obligatoire pour tout employé se
                  présentant à un contrat pour une installation/désinstallation</span>.
              </p>

              <p>
                - Salubrité de l’équipement. Notre équipement sera désinfecté
                <span style={{ fontWeight: "bold" }}> avant et après</span> chaque installation lors d’un contrat. Des lingettes
                nettoyantes et désinfectantes (Lysol) seront utilisées. Une rotation
                de l’équipement sera <span style={{ fontWeight: "bold" }}>obligatoire</span> et un minimum de <span style={{ fontWeight: "bold" }}>4 jours de
                  quarantaine</span> devra être respecté avant la réutilisation.
              </p>

              <p style={{ fontWeight: "bold" }}>
                Il en va de la responsabilité de tous de limiter la propagation de
                ce virus et d’assurer un milieu de vie sécuritaire pour tous.
                Soyez assuré que nous faisons tout le nécessaire pour assurer
                votre sécurité.
              </p>

              <p style={{ textAlign: 'right' }}> -Équipe Son’OR S.E.N.C</p>
            </div>

          </Col>
        </Row>

      </Container >
    </>
  );
};
