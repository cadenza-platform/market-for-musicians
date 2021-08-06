import { Navbar, Nav, Image, Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Navbars.css";
import logo from "../styles/images/logo.svg";
import { useSelector, useDispatch } from "react-redux";

import ArtistUserToggle from "./ArtistUserToggle";
import {
  selectCollapse,
  toggleCollapseOpen,
  toggleCollapseClose,
} from "../../features/viewSlice";

function ArtistNavbar(props) {
  const dispatch = useDispatch();

  const collapse = useSelector(selectCollapse);
  var collapseToggle = (
    <Navbar.Toggle
      aria-controls="responsive-navbar-nav"
      className="nav-toggle-open"
      onClick={() => dispatch(toggleCollapseOpen())}
    />
  );
  if (collapse === "open") {
    collapseToggle = (
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="nav-toggle-close"
        onClick={() => dispatch(toggleCollapseClose())}
      >
        <button type="button" className="close">
          <span aria-hidden="true">&times;</span>
        </button>
      </Navbar.Toggle>
    );
  }

  var trailingContent = props.fixed ? (
    <Link
      to={{ pathname: "https://1vd6ke3g2u4.typeform.com/to/BYLLLPlb" }}
      target="_blank"
    >
      <Button variant="outline-dark" className="nav-join-waitlist-button">
        JOIN WAITLIST
      </Button>
    </Link>
  ) : (
    <ArtistUserToggle />
  );

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar flex-row-reverse flex-lg-row"
      fixed={props.fixed ? "top" : "none"}
    >
      <Navbar.Brand href="#header">
        <Image src={logo} className="navbar-logo" />
      </Navbar.Brand>

      {collapseToggle}

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto nav">
          <Nav.Link
            href="#features"
            className="nav-link"
            onClick={() => dispatch(toggleCollapseClose())}
          >
            Features
          </Nav.Link>
          <Nav.Link
            href="#footer"
            className="nav-link"
            onClick={() => dispatch(toggleCollapseClose())}
          >
            Contact Us
          </Nav.Link>
        </Nav>

        <Nav className="ml-auto nav">{trailingContent}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ArtistNavbar;
