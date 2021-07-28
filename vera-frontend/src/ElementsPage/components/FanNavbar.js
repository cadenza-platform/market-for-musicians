import {
    Navbar,
    Nav,
    Image,
    Button
} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Navbars.css';
import logo from "../styles/images/logo.svg";
import { useSelector, useDispatch } from 'react-redux';

import FanUserToggle from './FanUserToggle';
import {
    selectCollapse,
    toggleCollapseOpen,
    toggleCollapseClose,
} from '../../features/viewSlice';

function FanNavbar(props) {
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
        props.fixed ? (
            <Link to={{ pathname: "https://1vd6ke3g2u4.typeform.com/to/BDLe1YBE" }} target="_blank" >
                <Button variant="outline-dark" className="nav-join-waitlist-button">JOIN WAITLIST</Button>
            </Link>
        ) :
        <FanUserToggle/>
    );

    return (
        <Navbar expand="lg" className="navbar flex-row-reverse flex-lg-row" fixed={props.fixed ? "top" : "none"}>
            <Link to="#header">
                <Navbar.Brand >
                    <Image src={logo} className="navbar-logo"/>
                </Navbar.Brand>
            </Link>
        
            {collapseToggle}

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav">
                    <Link to="#getting-started" className="nav-link">Getting Started</Link>
                    <Link to="#how-it-works" className="nav-link">How It Works</Link>
                    <Link to="#features" className="nav-link">Features</Link>
                    <Link to="#careers" className="nav-link">Careers</Link>
                </Nav>

                <Nav className="ml-auto nav">
                    {trailingContent}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default FanNavbar;