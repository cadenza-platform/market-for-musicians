import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import '../styles/GettingStarted.css';
import laptopIcon from '../styles/images/laptop-icon.png';

function GettingStarted() {
    return (
        <Container fluid className="gettingstarted-container" id="getting-started">
            <Row>
                <Col className="gettingstarted-col">
                    <Image className="gettingstarted-image" src={laptopIcon} />
                </Col>
                <Col>
                    <p1 className="gettingstarted-header">1.  Sign Up</p1>
                    <p className="gettingstarted-text">
                        Sign up for an account &<br/>
                        customize your feed 
                    </p>
                    <p1 className="gettingstarted-header">2.  Invest</p1>
                    <p className="gettingstarted-text">
                        Invest in musicians<br/>
                        by purchasing NFTs
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default GettingStarted;