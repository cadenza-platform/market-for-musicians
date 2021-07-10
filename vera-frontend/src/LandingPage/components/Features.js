import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import '../styles/Features.css';
import recommendationsIcon from '../styles/images/recommendations-icon.png';
import analyticsIcon from '../styles/images/analytics-icon.png';
import advancedSearchIcon from  '../styles/images/advanced-search-icon.png';
import flexibleExchangeIcon from '../styles/images/flexible-exchange-icon.png';

function Features() {
    return (
        <Container fluid className="features-container align-content-start">
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

export default Features;
