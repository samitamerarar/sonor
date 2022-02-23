import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div style={{ marginTop: "120px", paddingBottom: "40px", }}>
            <Container fluid style={{ backgroundColor: '#e6e6e6', boxShadow: "0 50vh 0 50vh #e6e6e6" }}>
                <Row className="justify-content-md-center">
                    <Col className="mt-5" style={{ textAlign: 'center' }} md={12}>
                        <p style={{ fontSize: "2em", fontWeight: "bold" }}>Contactez-nous</p>
                        <p>Courriel: <a style={{ fontWeight: "bold" }} href="mailto:locationsonore@gmail.com">locationsonore@gmail.com</a></p>
                        <p>Téléphone: <br />
                            Montréal, Laval et les environs: <br /><a style={{ fontWeight: "bold" }} href="tel:5145815460">(514) 581-5460</a><br />
                        </p>
                        <p style={{ fontSize: "1.2em" }}>
                            <a href="https://www.facebook.com/profile.php?id=100063594722987/" target="_blank" rel="noreferrer" className="m-2">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://www.instagram.com/locationsonor/" target="_blank" rel="noreferrer" className="m-2">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container >
        </div>
    );
};
