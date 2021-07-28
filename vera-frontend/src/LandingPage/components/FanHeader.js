import '../styles/FanHeader.css';
import {
    Image, 
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import laptop from '../styles/images/laptop.png';

function FanHeader() {
    return(
        <Container fluid className="fan-header-container" id="header">
            <Row className="flex-column-reverse flex-md-row" xs={1} md={2}>
                <Col className="fan-header-text fan-desktop-col">
                    <h1 className="fan-header-text-title">
                        Support artists early on.<br/>
                        Prosper together.
                    </h1><br/>
                    <i className="fan-header-text-body">
                        Support underground artists and grow your portfolio as they grow their fan base.
                    </i><br/><br/><br/>
                    <Link to={{ pathname: "https://1vd6ke3g2u4.typeform.com/to/BDLe1YBE" }} target="_blank" >
                        <Button variant="outline-light" className="fan-join-waitlist-button">JOIN WAITLIST</Button>
                    </Link>
                </Col>
                <Col className="fan-desktop-col">
                    <Image fluid src={laptop} />
                </Col>
                <Col className="fan-mobile-col">
                    <h1 className="fan-header-text-title">
                        Support artists early on.<br/>
                        Prosper together.
                    </h1><br/>
                    <Image fluid src={laptop} className="fan-header-image-mobile"/>
                    <i className="fan-header-text-body">
                        Support underground artists and grow your portfolio as they grow their fan base.
                    </i>
                    <Link to={{ pathname: "https://1vd6ke3g2u4.typeform.com/to/BDLe1YBE" }} target="_blank" >
                        <Button variant="outline-light" className="fan-join-waitlist-button">JOIN WAITLIST</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default FanHeader;