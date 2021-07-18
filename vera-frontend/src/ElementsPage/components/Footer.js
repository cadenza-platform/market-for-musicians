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
import '../styles/Footer.css';
import logo from "../styles/images/logo-white.png";
import background from "../styles/images/footer-background.png"
import UserToggle from './UserToggle';

function Footer() {
    return (
        <Container fluid className="footer-container">
            <Container className="footer-inner-container">
                <Container className="footer-text-wrapper" style={{ backgroundImage: `url(${background})` }}>
                    <h1 className="footer-title">
                        Want your gift to also be an investment in your favorite artists?
                    </h1>
                    <Row>
                        <Col xs={7}>
                            <p className="footer-subtitle">
                                Sign up to get notified when VERA launches!
                            </p>
                        </Col>
                        <Col className="footer-col-right">
                            <Button variant="outline-light" className="footer-button">JOIN WAITLIST</Button>
                        </Col>
                    </Row>
                </Container>
                <Router>
                    <Row>
                        <Col xs={2}>
                            <Image src={logo} className="footer-logo" />
                        </Col>
                        <Col className="footer-col-left" xs={6}>
                            <UserToggle className="test-test" />
                        </Col>
                        <Col xs={2}>
                            <Link className="footer-link">Contact</Link>
                        </Col>
                        <Col xs={2}>
                            <Link className="footer-link">Career</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="footer-col-left">
                            <p className="footer-copyright">Vera Inc. © 2021. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Router>
            </Container>
        </Container>
    );
}

export default Footer;