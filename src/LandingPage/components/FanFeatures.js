import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/FanFeatures.css";
import recommendationsIcon from "../styles/images/recommendations-icon.svg";
import analyticsIcon from "../styles/images/analytics-icon.svg";
import advancedSearchIcon from "../styles/images/advanced-search-icon.svg";
import flexibleExchangeIcon from "../styles/images/flexible-exchange-icon.svg";

function FanFeatures() {
  return (
    <Container
      fluid
      className="fan-features-container align-content-start"
      id="features"
    >
      <h1 className="fan-features-header">Features</h1>
      <Row xs={2} md={4}>
        <Col>
          <Image src={recommendationsIcon} className="fan-features-icon" />
          <p className="fan-features-icon-label">
            INVESTMENT
            <br />
            RECOMMENDATIONS
          </p>
        </Col>
        <Col>
          <Image src={analyticsIcon} className="fan-features-icon" />
          <p className="fan-features-icon-label">
            VISUAL
            <br />
            ANALYTICS
          </p>
        </Col>
        <Col>
          <Image src={advancedSearchIcon} className="fan-features-icon" />
          <p className="fan-features-icon-label">
            ADVANCED
            <br />
            SEARCH
          </p>
        </Col>
        <Col>
          <Image src={flexibleExchangeIcon} className="fan-features-icon" />
          <p className="fan-features-icon-label">
            FLEXIBLE
            <br />
            EXCHANGE
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default FanFeatures;
