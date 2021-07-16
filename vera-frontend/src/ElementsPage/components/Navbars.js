import {
    Navbar,
    Nav,
    Image,
    Button
} from 'react-bootstrap';
import { BrowserRouter as Router } from "react-router-dom";
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
    toggleCollapseClose,
} from '../../features/viewSlice';

function Navbars(props) {
    const view = useSelector(selectView);
    const dispatch = useDispatch();

    var toggle = (
        <div className="toggle-button-group flex-md-col">
            <Button variant="outline-secondary" className="toggle-button left selected">Fan</Button>
            <Button variant="outline-secondary" className="toggle-button right" onClick={() => dispatch(toggleArtist())}>Artist</Button>
        </div>);

    var navlinks = (
        <Nav className="mr-auto nav">
            <Link to="#getting-started" className="nav-link">Getting Started</Link>
            <Link to="#how-it-works" className="nav-link">How It Works</Link>
            <Link to="#features" className="nav-link">Features</Link>
            <Link to="#careers" className="nav-link">Careers</Link>
        </Nav>
    );

    if (view === "Artist") {
        toggle = (
            <div className="toggle-button-group flex-md-col">
                <Button variant="outline-secondary" className="toggle-button left" onClick={() => dispatch(toggleFan())}>Fan</Button>
                <Button variant="outline-secondary" className="toggle-button right selected">Artist</Button>
            </div>);
        
        navlinks = (
            <Nav className="mr-auto nav">
                <Link to="#artist-features" className="nav-link">Features</Link>
                <Link to="#artist-how-it-works" className="nav-link">How It Works</Link>
                <Link to="#artist-contact-us" className="nav-link">Contact Us</Link>
            </Nav>
        )
    }

    const collapse = useSelector(selectCollapse);
    var collapseToggle = (<Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle-open" onClick={() => dispatch(toggleCollapseOpen())} />);
    if (collapse === 'open') {
        collapseToggle = (<Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle-close" onClick={() => dispatch(toggleCollapseClose())}>
            <button type="button" className="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </Navbar.Toggle>);
    }

    var joinWaitlistButton = (
        props.fixed ? 
        <Button variant="outline-dark" className="nav-join-waitlist-button">JOIN WAITLIST</Button> :
        <div></div>
    );

    return (
        <Router>
            <Navbar expand="lg" className="navbar flex-row-reverse flex-lg-row" fixed={props.fixed ? "top" : "none"}>
                <Link to="#header">
                    <Navbar.Brand>
                        <Image src={logo} />
                    </Navbar.Brand>
                </Link>
            
                {collapseToggle}

                <Navbar.Collapse id="basic-navbar-nav">
                    {navlinks}

                    <Nav className="ml-auto nav">
                        {joinWaitlistButton}
                        {toggle}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Router>
    );
}

export default Navbars;