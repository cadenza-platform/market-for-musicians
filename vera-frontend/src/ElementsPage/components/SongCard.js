import { Card, Row, Col, Image, Button } from "react-bootstrap";
import "../styles/SongCard.css";
import uparrow from "../styles/images/uparrow.svg";

function SongCard(props) {
  return (
    <Card className="songcard">
      <Card.Img variant="top" src={uparrow} />
      <Card.Body>
        <Row>
          <Col>
            <Card.Title className="songcard-title">
              {props.song.title}
            </Card.Title>
          </Col>
          <Col className="d-flex justify-content-start">
            <Card.Text className="songcard-currency">$</Card.Text>
            <Card.Text className="songcard-title">{props.song.price}</Card.Text>
            <Image className="songcard-arrow" src={uparrow} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Text className="songcard-artist">
              {props.song.artist}
            </Card.Text>
          </Col>
          <Col>
            <Card.Text className="songcard-listens">
              {props.song.listens} Listens
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Button className="songcard-button">Trade</Button>
    </Card>
  );
}

export default SongCard;
