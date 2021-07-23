import {
    Navbar,
    Nav,
    Image,
    Button
} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Navbars.css';
import logo from "../styles/images/logo.png";
import { useSelector, useDispatch } from 'react-redux';

import ArtistUserToggle from './ArtistUserToggle';
import {
    selectCollapse,
    toggleCollapseOpen,
    toggleCollapseClose,
} from '../../features/viewSlice';

function ArtistNavbar(props) {
    const dispatch = useDispatch();

    const collapse = useSelector(selectCollapse);
    var collapseToggle = (<Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle-open" onClick={() => dispatch(toggleCollapseOpen())} />);
    if (collapse === 'open') {
        collapseToggle = (
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle-close" onClick={() => dispatch(toggleCollapseClose())}>
                <button type="button" className="close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </Navbar.Toggle>
        );
    }

    var trailingContent = (
        props.fixed ? 
        <Button variant="outline-dark" className="nav-join-waitlist-button">JOIN WAITLIST</Button> :
        <ArtistUserToggle/>
    );

    return (
        <Navbar expand="lg" className="navbar flex-row-reverse flex-lg-row" fixed={props.fixed ? "top" : "none"}>
            <Link to="#header">
                <Navbar.Brand>
                    <Image src={logo} />
                </Navbar.Brand>
            </Link>
        
            {collapseToggle}

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav">
                    <Link to="#features" className="nav-link">Features</Link>
                    <Link to="#footer" className="nav-link">Contact Us</Link>
                </Nav>

                <Nav className="ml-auto nav">
                    {trailingContent}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default ArtistNavbar;