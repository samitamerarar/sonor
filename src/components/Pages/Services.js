import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { useForm } from "./useForm";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Image5 from "../../assets/pexels-francesco-ungaro-6530797.jpg";
import { ScrollButton } from "./ScrollButton";

import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const weekDays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

export const Services = () => {
  const {
    handleSubmit, // handles form submission
    handleChange, // handles input changes
    data,
    errors,
  } = useForm({
    validations: {
      name: {
        pattern: {
          // value: '^[a-zA-Z]+$',
          message: "La valeur entrée n'est pas autorisée",
          required: true,
        },
      },
      phone: {
        pattern: {
          value: "^(?=.*[0-9])[- +#()0-9]+$",
          message: "Veuillez entrer un numéro de téléphone valide!",
          required: false,
        },
      },
      message: {
        pattern: {
          // value: '^[a-zA-Z]+$',
          message: "La valeur entrée n'est pas autorisée",
          required: false,
        },
      },
    },

    /* https://www.rapidtables.com/web/html/mailto.html */
    onSubmit: (e) => {
      const datesSelected = datesValue && datesValue.length > 0 ? datesValue : "";
      const heuresDebutSelected = heuresDebutValue ? heuresDebutValue : "";
      const heuresFinSelected = heuresFinValue ? heuresFinValue : "";
      console.log(
        data.message +
          "\n\nDates sélectionnées: " +
          datesSelected +
          "\nHeure de début de l’évènement: " +
          heuresDebutSelected +
          "\nHeure de fin de l’évènement: " +
          heuresFinSelected +
          "\nNuméro de téléphone entré: " +
          data.phone
      );
      window.open(
        `mailto:locationsonore@gmail.com?subject=Son'OR%20-%20R%C3%A9servation%20pour%20${encodeURIComponent(
          data.name
        )}
      &body=${encodeURIComponent(
        data.message +
          "\n\nDates sélectionnées: " +
          datesSelected +
          "\nHeure de début-fin de l’évènement: " +
          heuresDebutSelected +
          "\nHeure de fin de l’évènement: " +
          heuresFinSelected +
          "\nNuméro de téléphone entré: " +
          data.phone
      )}`,
        "_self"
      );
    },
    initialValues: {
      message:
        "Bonjour, je voudrais recevoir un appel de confirmation pour la demande de réservation selon la ou les dates sélectionnées.\n\nJe voudrais le matériel suivant:\n",
      phone: "",
    },
  });

  const [datesValue, setDatesValue] = useState([]);
  const [heuresDebutValue, setHeuresDebutValue] = useState("");
  const [heuresFinValue, setHeuresFinValue] = useState("");

  return (
    <>
      <Row id="topimagerow" style={{ postion: "relative" }}>
        <Image style={{ height: "400px", width: "100%", objectFit: "cover" }} src={Image5} />
        <ScrollButton />
      </Row>

      <Container id="container" style={{ backgroundColor: "white", marginTop: "50px" }} className="mb-5">
        <Row className="mb-5">
          <h2>NOS SERVICES</h2>
        </Row>
        <Row className="mb-5">
          <Col md={12}>
            <p style={{ fontSize: "1.4em", fontWeight: "350" }}>
              <span style={{ fontWeight: "500" }}>Clientèle: </span>Particulier · Petite/Moyenne/Grande Entreprise ·
              Vous êtes la bienvenue!
            </p>

            <p style={{ fontSize: "1.4em", fontWeight: "350" }}>
              <span style={{ fontWeight: "500" }}>Événements: </span>Mariage, fiançailles, Conférence, Coktail
              dînatoire, Fête de bureau, Événement résidentiel ou dans une salle louée et, bien plus encore!
            </p>

            <p style={{ fontSize: "1.4em", fontWeight: "350" }}>
              <span style={{ fontWeight: "500" }}>Équipements: </span>Haut-Parleurs · Microphones avec/sans fil ·
              Console de mixage · Subwoofers · Éclairage intelligent · Machine à fumée · Éclairage standard et/ou
              d'effets · Projecteur de vidéo/écran
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={12}>
            <div>
              <p style={{ fontSize: "2em", fontWeight: "400" }} className="mb-4">
                ENSEMBLES POPULAIRES
              </p>

              <div style={{ fontSize: "1.4em", fontWeight: "350" }}>
                <div className="mb-5">
                  <h4>Ensemble no 1:</h4>
                  <p style={{ lineHeight: "2" }}>
                    (2) Haut-Parleurs 12 po avec trépieds, (1) Micro avec fil, fillage, fils auxiliaires.
                    <br />
                    (Parfait pour Conférence, Cocktail dînatoire)
                  </p>
                  <p>
                    <strong>À partir de 200$</strong> - Installation comprise
                  </p>
                </div>

                <div className="mb-5">
                  <h4>Ensemble no 2:</h4>
                  <p style={{ lineHeight: "2" }}>
                    (2) Haut-Parleurs 12 po avec trépieds, (1) Subwoofer 18 po, (1) Micro avec fil, fils auxiliaires.
                    <br />
                    (Parfait pour Fête de bureau, Événement résidentiel)
                  </p>
                  <p>
                    <strong>À partir de 250$</strong> - Installation comprise
                  </p>
                </div>

                <div className="mb-5">
                  <h4>Ensemble no 3:</h4>
                  <p style={{ lineHeight: "2" }}>
                    (2) Haut-Parleurs 12 po avec trépieds, (1) Subwoofer 18 po, (1) Console mixeur à 16 entrées, Micros
                    sans fil, fillage, fils auxiliaires.
                    <br />
                    (Parfait pour une petite réception, Événement dans une salle louée)
                  </p>
                  <p>
                    <strong>À partir de 280$</strong> - Installation comprise
                  </p>
                </div>

                <p>
                  Note: Tous les ensembles peuvent être modifiés pour y ajouter de l'éclairage et d'autres accessoires.
                </p>

                {/* <p>Obtenir une soumission</p> */}
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <p style={{ fontSize: "2em", fontWeight: "400" }} className="mb-4">
              RÉSERVER
            </p>

            <form onSubmit={handleSubmit} style={{ fontSize: "1.1em", fontWeight: "400" }}>
              <Row>
                <p>Dates: </p>
                <p>
                  {/* https://www.npmjs.com/package/react-multi-date-picker */}
                  <DatePicker
                    style={{ padding: "0.25em" }}
                    value={datesValue}
                    onChange={setDatesValue}
                    minDate={new Date()}
                    months={months}
                    weekDays={weekDays}
                  />
                </p>
              </Row>

              <Row>
                <Col md={3}>
                  <p>Heure de début de l'événement: </p>
                  <p>
                    {/* https://www.npmjs.com/package/react-time-picker */}
                    <TimePicker onChange={setHeuresDebutValue} disableClock={true} value={heuresDebutValue} />
                  </p>
                </Col>
                <Col md={3}>
                  <p>Heure de fin de l'événement: </p>
                  <p>
                    {/* https://www.npmjs.com/package/react-time-picker */}
                    <TimePicker onChange={setHeuresFinValue} disableClock={true} value={heuresFinValue} />
                  </p>
                </Col>
              </Row>

              <Row>
                <p>
                  <span style={{ color: "red" }}>*</span> Nom:{" "}
                </p>
                <p>
                  <input
                    style={{ padding: "0.3em", borderRadius: "5px", borderWidth: "1px" }}
                    value={data.name || ""}
                    onChange={handleChange("name")}
                    type="text"
                    maxLength="40"
                    size="30"
                    required
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </p>
              </Row>

              <Row>
                <p>Numéro de téléphone: </p>
                <p>
                  <input
                    style={{ padding: "0.3em", borderRadius: "5px", borderWidth: "1px" }}
                    value={data.phone || ""}
                    onChange={handleChange("phone")}
                    type="text"
                    maxLength="20"
                    size="30"
                  />
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </p>
              </Row>

              <Row>
                <p>
                  <span style={{ color: "red" }}>*</span> Message:{" "}
                </p>
                <p>
                  <textarea
                    style={{ width: "100%", padding: "0.3em", borderRadius: "5px", borderWidth: "1px" }}
                    value={data.message || ""}
                    onChange={handleChange("message")}
                    rows="8"
                    required
                  />
                  {errors.message && <p className="error">{errors.message}</p>}
                </p>
              </Row>

              <Button as="input" type="submit" value="Envoyer" />
            </form>

            <Row className="mt-3">
              <p>
                Suite à l'envoi de votre courriel, notre équipe SON'OR vous répondra dans les plus brefs délais (24 à
                48 heures).
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
