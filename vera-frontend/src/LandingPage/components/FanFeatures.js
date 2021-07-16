import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import '../styles/FanFeatures.css';
import recommendationsIcon from '../styles/images/recommendations-icon.svg';
import analyticsIcon from '../styles/images/analytics-icon.svg';
import advancedSearchIcon from  '../styles/images/advanced-search-icon.svg';
import flexibleExchangeIcon from '../styles/images/flexible-exchange-icon.png';

function FanFeatures() {
    return (
        <Container fluid className="features-container align-content-start" id="features">
            <h1 className="features-header">Features</h1>
            <Row xs={2} md={4}>
                <Col>
                    <Image src={recommendationsIcon} className="features-icon" />
                    <p className="features-icon-label">
                        Investment<br/>
                        Recommendations
                    </p>
                </Col>
                <Col>
                    <Image src={analyticsIcon} className="features-icon" />
                    <p className="features-icon-label">
                        Visual<br/>
                        Analytics
                    </p>
                </Col>
                <Col>
                    <Image src={advancedSearchIcon} className="features-icon" />
                    <p className="features-icon-label">
                        Advanced<br/>
                        Search
                    </p>
                </Col>
                <Col>
                    <Image src={flexibleExchangeIcon} className="features-icon" />
                    <p className="features-icon-label">
                        Flexible<br/>
                        Exchange
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default FanFeatures;
