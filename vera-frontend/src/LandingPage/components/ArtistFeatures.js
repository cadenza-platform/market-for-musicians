import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import '../styles/ArtistFeatures.css';
import recommendationsIcon from '../styles/images/recommendations-icon.svg';
import creativeFreedomIcon from '../styles/images/creative-freedom-icon.svg';
import analyticsIcon from '../styles/images/analytics-icon.svg';
import flexibleExchangeIcon from '../styles/images/flexible-exchange-icon.svg';

function ArtistFeatures() {
    return (
        <Container fluid className="artist-features-container align-content-start" id="features">
            <h1 className="artist-features-header">Features</h1><br/>
            <Row xs={2} md={4}>
                <Col>
                    <Image src={recommendationsIcon} className="artist-features-icon" />
                </Col>
                <Col>
                    <h2 className="artist-feature-title">
                        Crowd Sourced Revenue
                    </h2>
                    <p className="artist-feature-description">

                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={creativeFreedomIcon} className="artist-features-icon" />
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={analyticsIcon} className="artist-features-icon" />
                </Col>
                <Col>
                
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={flexibleExchangeIcon} className="artist-features-icon" />
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
    );
}

export default ArtistFeatures;