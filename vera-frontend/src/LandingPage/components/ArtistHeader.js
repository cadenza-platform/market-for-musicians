import '../styles/ArtistHeader.css';
import {
    Image, 
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import laptop from '../styles/images/laptop.png';

function ArtistHeader() {
    return(
        <Container fluid className="artist-header-container" id="header">
            <Row className="flex-column-reverse flex-md-row" xs={1} md={2}>
                <Col className="artist-header-text artist-desktop-col">
                    <h1 className="artist-header-text-title">
                        The Vinyl Record
                    </h1>
                    <p className="artist-header-text-subtitle">
                        Reimagined for the Digital Age
                    </p>
                    <br/>
                    <i className="artist-header-text-body">
                        A decentralized record label for a more sustainable future
                    </i><br/><br/><br/>
                    <Button variant="outline-light" className="artist-join-waitlist-button">JOIN WAITLIST</Button>
                </Col>
                <Col className="artist-desktop-col">
                    <Image fluid src={laptop} />
                </Col>

                <Col className="artist-mobile-col">
                    <h1 className="artist-header-text-title">
                        The Vinyl Record
                    </h1>
                    <h1 className="artist-header-text-subtitle">
                        Reimagined for the Digital Age
                    </h1>
                    <br/>
                    <Image fluid src={laptop} className="artist-header-image-mobile"/>
                    <i className="artist-header-text-body">
                        Support underground artists and grow your portfolio as they grow their fan base.
                    </i>
                    <Button variant="outline-light" className="artist-join-waitlist-button">JOIN WAITLIST</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ArtistHeader;
