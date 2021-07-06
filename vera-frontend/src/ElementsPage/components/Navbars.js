import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Image
} from 'react-bootstrap';
import { BrowserRouter as Router } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Navbars.css';
import logo from "../styles/images/logo.png";

import { useSelector, useDispatch } from 'react-redux';
import {
    toggleView,
    selectView
} from '../../features/viewSlice';

function Navbars() {
    const view = useSelector(selectView);
    const dispatch = useDispatch();

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
                    <Nav class="ml-auto nav navbar-nav">
                        <Nav.Link onClick={() => dispatch(toggleView())}>{view}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Router>
    );
}

export default Navbars;