import { Container, Button } from "react-bootstrap";
import "../styles/FanContact.css";

function Contact() {
  return (
    <Container fluid className="fan-contact-container" id="careers">
      <h1 className="fan-contact-header">Careers</h1>
      <p className="fan-contact-text">
        At Vera, we are driven by our mission to revolutionize the music
        industry and offer an unparalleled level of interaction between artists
        and fans. We're currently looking for ambitious individuals with talent
        in software, design, and finance.
        <br />
        <br />
        If our mission and product interests you, we'd love to see you in our
        inbox!
        <br />
        Let us know a bit about your background and why you think you'd be a
        good fit.
      </p>
      <Button
        href="mailto:anishtech1@gmail.com?subject=Opportunities at Vera"
        variant="outline-light"
        className="fan-contact-button"
      >
        CONTACT US
      </Button>
    </Container>
  );
}

export default Contact;
