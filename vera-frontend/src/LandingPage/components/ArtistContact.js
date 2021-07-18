import {
    Container,
    Button,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import { 
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import '../styles/ArtistContact.css';
import logo from "../../ElementsPage/styles/images/logo.png";
import UserToggle from '../../ElementsPage/components/UserToggle';

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
            <Router>
                <Row>
                    <Col xs={2}>
                        <Image src={logo} />
                    </Col>
                    <Col className="artist-contact-col-left" xs={8}>
                        <UserToggle />
                    </Col>
                    <Col xs={1}>
                        <Link className="artist-contact-link">Contact</Link>
                    </Col>
                    <Col xs={1}>
                        <Link className="artist-contact-link">Career</Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="artist-contact-col-left">
                        <p className="copyright">Vera Inc. © 2021. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Router>
        </Container>
    );
}

export default ArtistContact;