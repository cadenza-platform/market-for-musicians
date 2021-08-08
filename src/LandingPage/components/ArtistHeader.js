import "../styles/ArtistHeader.css";
import { Image, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import mockup from "../styles/images/header-mockup.png";

function ArtistHeader() {
  return (
    <Container fluid className="artist-header-container" id="header">
      <Row
        className="flex-column-reverse flex-md-row justify-content-center"
        xs={1}
        md={2}
      >
        <Col className="artist-header-text artist-desktop-col">
          <h1 className="artist-header-text-title">The Vinyl Record</h1>
          <p className="artist-header-text-subtitle">
            Reimagined for the Digital Age
          </p>
          <br />
          <i className="artist-header-text-body">
            A decentralized record label for a more sustainable future
          </i>
          <br />
          <br />
          <br />
          <Link
            to={{ pathname: "https://1vd6ke3g2u4.typeform.com/to/BYLLLPlb" }}
            target="_blank"
          >
            <Button
              variant="outline-light"
              className="artist-join-waitlist-button"
            >
              JOIN ARTIST WAITLIST
            </Button>
          </Link>
        </Col>
        <Col className="artist-desktop-col">
          <Image fluid src={mockup} />
        </Col>

        <Col className="artist-mobile-col">
          <h1 className="artist-header-text-title">The Vinyl Record</h1>
          <h1 className="artist-header-text-subtitle">
            Reimagined for the Digital Age
          </h1>
          <br />
          <Image fluid src={mockup} className="artist-header-image-mobile" />
          <i className="artist-header-text-body">
            Support underground artists and grow your portfolio as they grow
            their fan base.
          </i>
          <Link
            to={{ pathname: "https://1vd6ke3g2u4.typeform.com/to/BYLLLPlb" }}
            target="_blank"
          >
            <Button
              variant="outline-light"
              className="artist-join-waitlist-button"
            >
              JOIN WAITLIST
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ArtistHeader;
