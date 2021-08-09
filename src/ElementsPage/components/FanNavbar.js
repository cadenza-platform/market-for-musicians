import { Navbar, Nav, Image, Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Navbars.css";
import "../styles/Buttons.css";
import logo from "../styles/images/logo.svg";
import { useSelector, useDispatch } from "react-redux";

import FanUserToggle from "./FanUserToggle";
import {
  selectCollapse,
  toggleCollapseOpen,
  toggleCollapseClose,
} from "../../features/viewSlice";

function FanNavbar(props) {
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
      to={{ pathname: "https://1vd6ke3g2u4.typeform.com/to/BDLe1YBE" }}
      target="_blank"
    >
      <Button variant="outline-dark" className="nav-join-waitlist-button">
        JOIN WAITLIST
      </Button>
    </Link>
  ) : (
    <FanUserToggle />
  );

  return (
    <Navbar
      collapseOnSelect
      className="navbar flex-row-reverse flex-lg-row"
      expand="lg"
      fixed={props.fixed ? "top" : "none"}
    >
      <Navbar.Brand href="#header">
        <Image src={logo} className="navbar-logo" />
      </Navbar.Brand>

      {collapseToggle}

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto nav">
          <Nav.Link
            href="#getting-started"
            className="nav-link"
            onClick={() => dispatch(toggleCollapseClose())}
          >
            Getting Started
          </Nav.Link>
          <Nav.Link
            href="#how-it-works"
            className="nav-link"
            onClick={() => dispatch(toggleCollapseClose())}
          >
            How it works
          </Nav.Link>
          <Nav.Link
            href="#features"
            className="nav-link"
            onClick={() => dispatch(toggleCollapseClose())}
          >
            Features
          </Nav.Link>
          <Nav.Link
            href="#careers"
            className="nav-link"
            onClick={() => dispatch(toggleCollapseClose())}
          >
            Careers
          </Nav.Link>
        </Nav>

        <Nav className="ml-auto nav">{trailingContent}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default FanNavbar;
