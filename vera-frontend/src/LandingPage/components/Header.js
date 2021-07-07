import '../styles/Header.css';
import {
    Image, 
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import laptop from '../styles/images/laptop.png';

function Header() {
    return(
        <Container fluid className="header-container">
            <Row className="flex-column-reverse flex-md-row" xs={1} md={2}>
                <Col className="header-text">
                    <h1 className="header-text-title">
                        Bet early on artists.<br/>
                        Prosper together.
                    </h1><br/>
                    <i className="header-text-body">
                        Support underground artists and grow your portfolio as they grow their fan base.
                    </i><br/><br/><br/>
                    <Button variant="outline-light" className="join-waitlist-button">JOIN WAITLIST</Button>
                </Col>
                <Col>
                    <Image fluid src={laptop} />
                </Col>
            </Row>
        </Container>
    );
}

export default Header;