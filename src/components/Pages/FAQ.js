import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Image5 from "../../assets/pexels-francesco-ungaro-6530797.jpg";
import { ScrollButton } from "./ScrollButton";

export const FAQ = () => {
  return (
    <>
      <Row id="topimagerow" style={{ postion: "relative" }}>
        <Image style={{ height: "400px", width: "100%", objectFit: "cover" }} src={Image5} />
        <ScrollButton />
      </Row>

      <Container id="container" style={{ backgroundColor: "white", marginTop: "50px" }} className="mb-5">
        <Row className="mb-5">
          <h2>FOIRE AUX QUESTIONS</h2>
        </Row>
        <Row className="mb-5">
          <Col md={12}>
            <p style={{ fontSize: "1.4em", fontWeight: "400" }}>
              Question : Est-ce que vous offrez la livraison avec vos forfaits?
            </p>
            <p style={{ fontSize: "1.1em" }} className="mb-4">
              Réponse : Oui, qu’il s’agit de livrer à votre domicile ou une salle de réception, chez Location SON’OR
              nous offrons un service clé en main, ce qui inclus la livraison, l’installation et la désinstallation
              après votre évènement ! Il est aussi possible d’effectuer seulement un ramassage à notre entrepôt à
              Laval.
            </p>

            <p style={{ fontSize: "1.4em", fontWeight: "400" }}>Question : Quel est le coût de la livraison?</p>
            <p style={{ fontSize: "1.1em" }} className="mb-4">
              Réponse : Nous Livrons pour le Grand Montréal et aussi les environs. Le prix est variable selon la
              localisation, le nombre d’équipements et la date, cette information vous sera transmise après avoir
              remplie notre formulaire en ligne. Profiter de notre prix avantageux pour Montréal et Laval!
            </p>

            <p style={{ fontSize: "1.4em", fontWeight: "400" }}>Question : Avez-vous un horaire de livraison?</p>
            <p style={{ fontSize: "1.1em" }} className="mb-4">
              Réponse : Non, on peut effectuer une désinstallation ou une livraison de nos équipements avant, pendant
              ou après les heures d’ouverture normale de magasin!
            </p>

            <p style={{ fontSize: "1.4em", fontWeight: "400" }}>
              Question : Combien de temps puis- je m’attendre avant d’avoir une réponse à une soumission?
            </p>
            <p style={{ fontSize: "1.1em" }} className="mb-4">
              Réponse : Vous pouvez vous attendre à une réponse à l’intérieur de 24H-48H après avoir remplie notre
              formulaire en ligne ! Si on dépasse ce délai, avisez-nous, 10% de rabais s’appliquera à votre forfait!
            </p>

            <p style={{ fontSize: "1.4em", fontWeight: "400" }}>Question : Méthode de paiement?</p>
            <p style={{ fontSize: "1.1em" }} className="mb-4">
              Réponse : Nous acceptons carte de Débit, Crédit, Comptant et Virement Interac.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
