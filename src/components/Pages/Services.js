import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { useForm } from "./useForm";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Image5 from '../../assets/5.jpg'
import { ScrollButton } from "./ScrollButton";

const weekDays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

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
          message:
            "La valeur entrée n'est pas autorisée",
          required: true,
        },
      },
      phone: {
        pattern: {
          value: '^(?=.*[0-9])[- +#()0-9]+$',
          message:
            "Veuillez entrer un numéro de téléphone valide!",
          required: false,
        },
      },
      message: {
        pattern: {
          // value: '^[a-zA-Z]+$',
          message:
            "La valeur entrée n'est pas autorisée",
          required: false,
        },
      },
    },

    /* https://www.rapidtables.com/web/html/mailto.html */
    onSubmit: (e) => {
      const datesSelected = datesValue && datesValue.length > 0 ? datesValue : '';
      window.open(`mailto:info@locationsonor.com?subject=Son'OR%20-%20R%C3%A9servation%20pour%20${encodeURIComponent(data.name)}
      &body=${encodeURIComponent(data.message + "\n\nDates sélectionnées: " + datesSelected + "\nNuméro de téléphone entré: " + data.phone)}`
        , '_self')
    },
    initialValues: {
      message: 'Bonjour, je voudrais recevoir un appel de confirmation pour la demande de réservation selon la ou les dates sélectionnées.\n\nJe voudrais le matériel suivant:\n',
      phone: '',
    },
  })

  const [datesValue, setDatesValue] = useState([]);

  return (
    <>
      <Row id="topimagerow" style={{ postion: "relative" }}>
        <Image style={{ height: "400px", width: '100%', objectFit: 'cover' }} src={Image5} />
        <ScrollButton />
      </Row>

      <Container id="container" style={{ backgroundColor: 'white', marginTop: '50px' }} className="mb-5">
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

              {/* <p className="mb-5">Obtenir une soumission</p> */}

            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12} >
            <p style={{ fontSize: "2em", fontWeight: "400" }} className="mb-4">RÉSERVER</p>

            <form onSubmit={handleSubmit} style={{ fontSize: "1.1em", fontWeight: "400" }}>
              <Row>
                <p>Dates: </p>
                <p>{/* https://www.npmjs.com/package/react-multi-date-picker */}
                  <DatePicker value={datesValue} onChange={setDatesValue} minDate={new Date()} months={months} weekDays={weekDays} />
                </p>
              </Row>

              <Row>
                <p><span style={{ color: 'red' }}>*</span> Nom: </p>
                <p>
                  <input value={data.name || ''} onChange={handleChange('name')} type="text" maxLength="40" size="30" required />
                  {errors.name && <p className="error">{errors.name}</p>}
                </p>
              </Row>

              <Row>
                <p>Numéro de téléphone: </p>
                <p>
                  <input value={data.phone || ''} onChange={handleChange('phone')} type="text" maxLength="20" size="30" />
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </p>
              </Row>


              <Row >
                <p><span style={{ color: 'red' }}>*</span> Message: </p>
                <p >
                  <textarea style={{ width: '100%' }} value={data.message || ''} onChange={handleChange('message')} rows="8" required />
                  {errors.message && <p className="error">{errors.message}</p>}
                </p>
              </Row>

              <Button as="input" type="submit" value="Envoyer" />

            </form>

          </Col>
        </Row>

      </Container >
    </>
  );
};
