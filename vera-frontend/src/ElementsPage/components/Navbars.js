import {
    Navbar,
    Nav,
    Image,
    Button
} from 'react-bootstrap';
import { BrowserRouter as Router } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Navbars.css';
import logo from "../styles/images/logo.png";

import { useSelector, useDispatch } from 'react-redux';
import {
    toggleArtist,
    toggleFan,
    selectView,
    selectCollapse,
    toggleCollapseOpen,
    toggleCollapseClose
} from '../../features/viewSlice';

function Navbars() {
    const view = useSelector(selectView);
    const dispatch = useDispatch();

    var toggle = (<Nav className="ml-auto nav">
        <Button variant="outline-dark" className="nav-join-waitlist-button">JOIN WAITLIST</Button>
        <div className="toggle-button-group flex-md-col">
            <Button variant="outline-secondary" className="toggle-button left selected">Fan</Button>
            <Button variant="outline-secondary" className="toggle-button right" onClick={() => dispatch(toggleArtist())}>Artist</Button>
        </div>
    </Nav>);

    if (view == "Artist") {
        toggle = (<Nav className="ml-auto nav">
            <Button variant="outline-dark" className="nav-join-waitlist-button">JOIN WAITLIST</Button>
            <div className="toggle-button-group flex-md-col">
                <Button variant="outline-secondary" className="toggle-button left" onClick={() => dispatch(toggleFan())}>Fan</Button>
                <Button variant="outline-secondary" className="toggle-button right selected">Artist</Button>
            </div>
        </Nav>);
    }

    const collapse = useSelector(selectCollapse);
    var collapseToggle = (<Navbar.Toggle aria-controls="basic-navbar-nav" class="nav-toggle-open" onClick={() => dispatch(toggleCollapseOpen())} />);
    if (collapse == 'open') {
        collapseToggle = (<Navbar.Toggle aria-controls="basic-navbar-nav" class="nav-toggle-close" onClick={() => dispatch(toggleCollapseClose())}>
            <button type="button" class="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </Navbar.Toggle>);
    }

    return (
        <Router>
            <Navbar expand="lg" className="navbar flex-row-reverse flex-lg-row">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <Image src={logo} />
                    </Navbar.Brand>
                </LinkContainer>

                {collapseToggle}

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav">
                        <Link to="#getting-started" className="nav-link">Getting Started</Link>
                        <Link to="#how-it-works" className="nav-link">How It Works</Link>
                        <Link to="#features" className="nav-link">Features</Link>
                        <Link to="#careers" className="nav-link">Careers</Link>
                    </Nav>
                    {toggle}
                </Navbar.Collapse>
            </Navbar>
        </Router>
    );
}

export default Navbars;