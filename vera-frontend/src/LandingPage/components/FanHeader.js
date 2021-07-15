import '../styles/Header.css';
import {
    Image, 
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import laptop from '../styles/images/laptop.png';

function FanHeader() {
    return(
        <Container fluid className="header-container" id="header">
            <Row className="flex-column-reverse flex-md-row" xs={1} md={2}>
                <Col className="header-text desktop-col">
                    <h1 className="header-text-title">
                        Bet early on artists.<br/>
                        Prosper together.
                    </h1><br/>
                    <i className="header-text-body">
                        Support underground artists and grow your portfolio as they grow their fan base.
                    </i><br/><br/><br/>
                    <Button variant="outline-light" className="join-waitlist-button">JOIN WAITLIST</Button>
                </Col>
                <Col className="desktop-col">
                    <Image fluid src={laptop} />
                </Col>
                <Col className="mobile-col">
                    <h1 className="header-text-title">
                        Bet early on artists.<br/>
                        Prosper together.
                    </h1><br/>
                    <Image fluid src={laptop} className="header-image-mobile"/>
                    <i className="header-text-body">
                        Support underground artists and grow your portfolio as they grow their fan base.
                    </i>
                    <Button variant="outline-light" className="join-waitlist-button">JOIN WAITLIST</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default FanHeader;