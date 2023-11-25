import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "./ReviewCarousel.css";

const reviews = [
  {
    name: "Christina Escribens",
    rating: 5,
    message:
      "J’ai trouvé Son’Or via un site web pour trouver un DJ dernière minute (24h avant l’événement) et Emmanuel m’a grandement aidé! J’ai pu avoir 2DJ & l’équipement sonore🔥 le service était parfait …",
    image: "jane-smith.jpg",
  },
  {
    name: "Michael Levesque",
    rating: 5,
    message:
      "Nous avons requis ses services pour un 60e anniversaire dans une grande salle. Il est venu installer l’équipement à l’heure convenue et a été très patient. Nous avions commandé un lunch (hot-dogs) à travers la déco et tout. C’était assez chaotique. Nous étions avec nos enfants de 6 ans et moins qui touchaient à tout et courraient partout. Il a été très patient avec eux et cela est apprécié. Son équipement a été fonctionnel toute la soirée sans aucun problème. Nous avons été très satisfaits !",
    image: "jane-smith.jpg",
  },
  {
    name: "Jey Diaz",
    rating: 5,
    message:
      "Très belle expérience. Bon prix et surtout des personnes professionnels qui ont à coeur la satisfaction de leur client. Rien de négatif à dire si vous voulez faire la fête Location Son'Or ne va pas vous décevoir.",
    image: "jane-smith.jpg",
  },
  {
    name: "Claude Daguste",
    rating: 5,
    message:
      "Je recommande FORTEMENT ! En tant que DJ j'ai souvent eu à faire affaire avec eux et le service fût constamment à la hauteur de mes attentes ! Très professionnel et prix abordable 🔥 …",
    image: "jane-smith.jpg",
  },
  {
    name: "Noemie Francoeur",
    rating: 5,
    message:
      "Je recommande 100% !!! \n J’ai eu l’occasion plusieurs fois d’être dans des événements avec Location Son’Or et je n’ai jamais été déçu! Très bon service et la qualité du son est incroyable!! Pour avoir une bonne ambiance, c’est vraiment ce que je recommanderais à tout le monde définitivement!",
    image: "jane-smith.jpg",
  },
  {
    name: "Nicole Atisso",
    rating: 5,
    message:
      "J'ai eu l'occasion de faire appel à la compagnie pour ma fête et j'ai adoré mon expérience! Les équipements sont de très bonne qualité et le prix est abordable. Le service était aussi très professionnel.",
    image: "jane-smith.jpg",
  },
  {
    name: "Sam",
    rating: 5,
    message: "Très bon service et surtout abordable!",
    image: "jane-smith.jpg",
  },
  {
    name: "Marcia Maxis",
    rating: 5,
    message: "",
    image: "jane-smith.jpg",
  },
  {
    name: "Dreezy Gabriel",
    rating: 5,
    message: "Excellent sound system. Excellent customer service and price are really good.",
    image: "jane-smith.jpg",
  },
];

const ReviewCarousel = () => {
  return (
    <Carousel>
      {reviews.map((review, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex flex-column align-items-center">
            {/* <Image src={review.image} alt={review.name} roundedCircle style={{ width: "80px", height: "80px" }} /> */}
            <h4>{review.name}</h4>
            <p className="review-message">{review.message}</p>
            <div className="d-flex">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i} style={{ color: "gold", fontSize: "1.5em", marginRight: "5px" }}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ReviewCarousel;
