import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Covid19 = () => {
  return (
    <Container style={{ backgroundColor: 'white', marginTop: '35px' }}>
      <Row>
        <h3>PROTOCOLE SANITAIRE POST COVID SONOR</h3>
      </Row>
      <Row>
        <Col>
          <p>Suite aux recommandations de notre gouvernement et de l’Institut National de la
            Santé Publique, nous désirons nous assurer que nos employés et notre clientèle
            soient protégés du risque de contracter le virus. Comme la situation et les mesures
            recommandées par le gouvernement évoluent rapidement, il se peut que ce
            protocole soit appelé à changer. Nous vous tiendrons informé de tous changements.</p>

          <p>LOCATION SON’OR OFFRERA TOUJOURS UN SERVICE DE LOCATION
            AVEC INSTALLATION ET DÉSINSTALLATION DE NOTRE ÉQUIPEMENT
            INCLUS DANS NOS FORFAITS.
          </p>

          <p>
            Les mesures suivantes ont été mise en place :
          </p>

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
            les mains avant et après l’installation de l’équipement SON’OR
            (lavage à l’eau et au savon ou utilisation d’une solution hydro
            alcoolique (Purell*). Le port du couvre-visage, de gants et de
            lunette de protection sera obligatoire pour tout employé se
            présentant à un contrat pour une installation/désinstallation.
          </p>

          <p>
            - Salubrité de l’équipement. Notre équipement sera désinfecté
            avant et après chaque installation lors d’un contrat. Des lingettes
            nettoyantes et désinfectantes (Lysol) seront utilisées. Une rotation
            de l’équipement sera obligatoire et un minimum de 4 jours de
            quarantaine devra être respecté avant la réutilisation.
          </p>

          <p>
            Il en va de la responsabilité de tous de limiter la propagation de
            ce virus et d’assurer un milieu de vie sécuritaire pour tous.
            Soyez assuré que nous faisons tout le nécessaire pour assurer
            votre sécurité.
          </p>

          <p style={{ textAlign: 'right' }}> -Équipe Son’OR S.E.N.C</p>

        </Col>
      </Row>

    </Container>
  );
};
