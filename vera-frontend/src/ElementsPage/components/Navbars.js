import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Image,
    Button
} from 'react-bootstrap';
import { BrowserRouter as Router } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Navbars.css';
import logo from "../styles/images/logo.png";

import { useSelector, useDispatch } from 'react-redux';
import {
    toggleArtist,
    toggleFan,
    selectView
} from '../../features/viewSlice';

function Navbars() {
    const view = useSelector(selectView);
    const dispatch = useDispatch();

    var toggle = (<Nav className="ml-auto nav">
        <Button variant="outline-secondary" className="toggle-button left selected">Fan</Button>
        <Button variant="outline-secondary" className="toggle-button right" onClick={() => dispatch(toggleArtist())}>Artist</Button>
    </Nav>);

    if (view == "Artist") {
        toggle = (<Nav className="ml-auto nav">
            <Button variant="outline-secondary" className="toggle-button left" onClick={() => dispatch(toggleFan())}>Fan</Button>
            <Button variant="outline-secondary" className="toggle-button right selected">Artist</Button>
        </Nav>);
    }

    return (
        <Router>
            <Navbar expand="md" className="navbar">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <Image src={logo} />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 navbar-form" />
                </Form>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav">
                        <LinkContainer to="/getting-started">
                            <Nav.Link>Getting Started</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/how-it-works">
                            <Nav.Link>How It Works</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/features">
                            <Nav.Link>Features</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/careers">
                            <Nav.Link>Careers</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    {toggle}
                </Navbar.Collapse>
            </Navbar>
        </Router>
    );
}

export default Navbars;