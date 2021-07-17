import {
    Container,
    Button,
    Row,
    Col
} from 'react-bootstrap';
import '../styles/ArtistContact.css';

function ArtistContact() {
    return (
        <Container fluid className="artist-contact-container">
            <Container className="artist-contact-inner-container">
                <Container className="artist-contact-text-wrapper">
                    <h1 className="artist-contact-title">
                        Want your gift to also be an investment in your favorite artists?
                    </h1>
                    <Row>
                        <Col xs={7}>
                            <p className="artist-contact-subtitle">
                                Sign up to get notified when VERA launches!
                            </p>
                        </Col>
                        <Col className="artist-contact-col-right">
                            <Button variant="outline-light" className="artist-contact-button">JOIN WAITLIST</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    );
}

export default ArtistContact;