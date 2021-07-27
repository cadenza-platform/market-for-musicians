import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import recommendationsIcon from '../styles/images/recommendations-icon.svg';
import creativeFreedomIcon from '../styles/images/creative-freedom-icon.svg';
import simpleCreationIcon from '../styles/images/simple-creation-icon.svg';
import flexibleExchangeIcon from '../styles/images/flexible-exchange-icon.svg';
import securityIcon from '../styles/images/security-icon.svg';
import environmentIcon from '../styles/images/environment-icon.svg';
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
                        Vera allows you to unlock a new stream of crowd-funded revenue by tapping into your fanbase for trusted investment. By distributing assets such as music and special content to the public, you can provide an unparalleled level of interaction with your fans while bringing in a new source of income to keep the music flowing.
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
                        Our goal at Vera is to preserve your creative freedom while creating new opportunities using our crowd funding model. You retain all ownership and copyright over your original work, while your fans gain ownership of a limited edition DVR of your music. We want you to keep making music that we all love, and we’re here to support you along the way.
                    </p>
                </Col>
            </Row>
            <Row className="artist-feature-row">
                <Col>
                    <Image src={simpleCreationIcon} className="artist-feature-icon" />
                </Col>
                <Col className="artist-feature-description">
                    <h2 className="artist-feature-title">
                        Simple Creation
                    </h2>
                    <p className="artist-feature-body">
                        Once you have a song on a streaming service such as Spotify, creating a Vera DVR is as simple as clicking a button. You’ll simply connect your account and enter in information about the piece that will add to the creative value of the DVR! Vera will automatically set up an initial DVR auction for your followers and fans on the site.
                    </p>
                </Col>
            </Row>
            <Row className="artist-feature-row">
                <Col>
                    <Image src={flexibleExchangeIcon} className="artist-feature-icon" />
                </Col>
                <Col className="artist-feature-description">
                    <h2 className="artist-feature-title">
                        Monetization
                    </h2>
                    <p className="artist-feature-body">
                        You have the flexibility to set monetization rates on sales of your digital vinyl records! You make both a large percentage of initial record auction sales, plus a small commission on all future transactions of your records on the Vera public market.
                    </p>
                </Col>
            </Row>
            <Row className="artist-feature-row">
                <Col>
                    <Image src={securityIcon} className="artist-feature-icon"/>
                </Col>
                <Col className="artist-feature-description">
                    <h2 className="artist-feature-title">
                        Security
                    </h2>
                    <p className="artist-feature-body">
                        Vera’s flexible exchange is a secure and regulated marketplace in which your DVRs can be transacted in a safe and efficient manner. Our thorough verification and certification processes for users and content on the platform allow us to ensure and maintain authenticity in our markets.
                    </p>
                </Col>
            </Row>
            <Row className="artist-feature-row">
                <Col>
                    <Image src={environmentIcon} className="artist-feature-icon"/> 
                </Col>
                <Col className="artist-feature-description">
                    <h2 className="artist-feature-title">
                        Low Environmental Impact
                    </h2>
                    <p className="artist-feature-body">
                        Traditional NFTs and other new, online art market systems utilize high-energy processes that use extensive amounts of electricity. Vera is committed to a more environmentally friendly approach to decentralized market creation and helping reduce the carbon footprint of the internet.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default ArtistFeatures;