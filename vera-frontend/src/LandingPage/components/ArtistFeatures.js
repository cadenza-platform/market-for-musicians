import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import ExpandableText from '../../ElementsPage/components/ExpandableText';
import Dropdown from '../../ElementsPage/components/Dropdown';
import recommendationsIcon from '../styles/images/recommendations-icon.svg';
import creativeFreedomIcon from '../styles/images/creative-freedom-icon.svg';
import analyticsIcon from '../styles/images/analytics-icon.svg';
import flexibleExchangeIcon from '../styles/images/flexible-exchange-icon.svg';
import '../styles/ArtistFeatures.css';

const expandableTextProps = {
    "mainContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a suscipit mi, nec vestibulum nisi. Mauris vel imperdiet ex, quis ultricies sem. Duis rutrum lorem mauris, eu cursus orci cursus non. Curabitur accumsan non nisl nec scelerisque. Integer molestie velit.",
    "extraContent": "Vivamus elementum felis et orci vulputate, et dictum nisi dignissim. Phasellus suscipit nec risus id tempor. Maecenas luctus ut libero et luctus. Proin lobortis est et ante dapibus interdum. Vivamus porta imperdiet egestas. Nulla ultricies commodo urna, et hendrerit lorem lacinia eu. Suspendisse feugiat at nulla vitae dapibus."
}

const faqWhatProps = {
    "header": "What’s a NFT (non-fungible token)?",
    "body": "Take the painting of the Mona Lisa, for example. It is copied, photographed, and distributed everywhere, but there's only one original physical painting. This gives the original painting and its owner incredible value due to its rarity. Non-Fungible Tokens do this for digital creations like art, games, and in our case, music."
}

const faqHowProps = {
    "header": "How does Vera use NFTs?",
    "body": "Vera allows you to invest in your favorite artists by purchasing shares of their NFTs, and enables us to securely give you ownership of their music. This is possible because NFTs are unique and certified digital assets stored on the blockchain. While copies of digital items are available for anyone to obtain, NFTs track and provide you with proof of ownership over a digital asset."
}

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
                    <ExpandableText content={expandableTextProps}/>
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
                    <ExpandableText content={expandableTextProps}/>
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
                    <ExpandableText content={expandableTextProps}/>
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
                    <ExpandableText content={expandableTextProps}/>
                    <div className="artist-feature-dropdown">
                        <Dropdown content={faqWhatProps}/>
                    </div>
                    <div className="artist-feature-dropdown">
                        <Dropdown content={faqHowProps}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ArtistFeatures;