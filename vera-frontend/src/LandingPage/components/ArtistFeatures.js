import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import recommendationsIcon from '../styles/images/recommendations-icon.svg';
import creativeFreedomIcon from '../styles/images/creative-freedom-icon.svg';
import analyticsIcon from '../styles/images/analytics-icon.svg';
import flexibleExchangeIcon from '../styles/images/flexible-exchange-icon.svg';
import '../styles/ArtistFeatures.css';

function ArtistFeatures() {
    return (
        <Container fluid className="artist-features-container align-content-start" id="features">
            <h1 className="artist-features-header">Features</h1>
            <Row className="artist-feature-row">
                <Col>
                    <Image src={recommendationsIcon} className="artist-feature-icon" />
                </Col>
                <Col className="artist-feature-description">
                    <h2 className="artist-feature-title">
                        Crowd Sourced Revenue
                    </h2>
                    <p className="artist-feature-body">
                        Vera allows you to unlock a new stream of revenue by tapping into your fanbase for trusted investment. By distributing assets such as music and special content to the public, you can provide an unparalleled level of interaction with your fans.
                    </p>
                </Col>
            </Row>
            <Row className="artist-feature-row">
                <Col>
                    <Image src={creativeFreedomIcon} className="artist-feature-icon" />
                </Col>
                <Col className="artist-feature-description">
                    <h2 className="artist-feature-title">
                        Creative Freedom
                    </h2>
                    <p className="artist-feature-body">
                        Our goal at Vera is to preserve your creative freedom while creating new opportunities using our crowd funding model. We want you to keep making music that we all love, and we’re here to support you along the way.
                    </p>
                </Col>
            </Row>
            <Row className="artist-feature-row">
                <Col>
                    <Image src={analyticsIcon} className="artist-feature-icon" />
                </Col>
                <Col className="artist-feature-description">
                    <h2 className="artist-feature-title">
                        Visual Analytics
                    </h2>
                    <p className="artist-feature-body">
                        Vera provides detailed analytics and performance details of DVRs that you have distributed to the public. Our straightforward interface allows you to track user engagement in addition to transactional information on your DVRs.
                    </p>
                </Col>
            </Row>
            <Row className="artist-feature-row">
                <Col>
                    <Image src={flexibleExchangeIcon} className="artist-feature-icon" />
                </Col>
                <Col className="artist-feature-description">
                    <h2 className="artist-feature-title">
                        Flexible Exchange
                    </h2>
                    <p className="artist-feature-body">
                        Vera’s flexible exchange is a secure and regulated marketplace in which your DVRs can be transacted in a safe and efficient manner.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default ArtistFeatures;