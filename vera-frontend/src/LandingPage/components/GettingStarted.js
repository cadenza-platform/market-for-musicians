import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/GettingStarted.css";
import laptopIcon from "../styles/images/laptop-icon.svg";
import investIcon from "../styles/images/invest-icon.svg";
import tradeIcon from "../styles/images/trade-icon.svg";
import investmentIcon from "../styles/images/investment-icon.svg";

function GettingStarted() {
  return (
    <Container fluid className="gettingstarted-container" id="getting-started">
      <Row className="gettingstarted-desktop">
        <Col className="gettingstarted-col">
          <Image className="gettingstarted-image" src={laptopIcon} />
          <Image className="gettingstarted-image" src={investmentIcon} />
        </Col>
        <Col>
          <p className="gettingstarted-header">1. Sign Up</p>
          <p className="gettingstarted-text">
            Sign up for an account &<br />
            customize your feed
          </p>
          <p className="gettingstarted-header">2. Invest</p>
          <p className="gettingstarted-text">
            Invest in musicians
            <br />
            by purchasing digital records
          </p>
          <p className="gettingstarted-header">3. Grow</p>
          <p className="gettingstarted-text">
            Grow your investments
            <br />
            as they grow their fan base
          </p>
          <p className="gettingstarted-header">4. Trade</p>
          <p className="gettingstarted-text">
            Trade your virtual records &<br />
            expand your musical portfolio
          </p>
        </Col>
      </Row>
      <div className="gettingstarted-mobile">
        <div className="gettingstarted-mobile-icon-group">
          <p className="gettingstarted-header">1. Sign Up</p>
          <Image className="gettingstarted-image" src={laptopIcon} />
          <p className="gettingstarted-text">
            Sign up for an account &<br />
            customize your feed
          </p>
        </div>
        <div className="gettingstarted-mobile-icon-group">
          <p className="gettingstarted-header">2. Invest</p>
          <Image className="gettingstarted-image" src={investIcon} />
          <p className="gettingstarted-text">
            Invest in musicians
            <br />
            by purchasing digital records
          </p>
        </div>
        <div className="gettingstarted-mobile-icon-group">
          <p className="gettingstarted-header">3. Grow</p>
          <Image className="gettingstarted-image" src={investmentIcon} />
          <p className="gettingstarted-text">
            Grow your investments
            <br />
            as they grow their fan base
          </p>
        </div>
        <div className="gettingstarted-mobile-icon-group">
          <p className="gettingstarted-header">4. Trade</p>
          <Image className="gettingstarted-image" src={tradeIcon} />
          <p className="gettingstarted-text">
            Trade your virtual records &<br />
            expand your musical portfolio
          </p>
        </div>
      </div>
    </Container>
  );
}

export default GettingStarted;
