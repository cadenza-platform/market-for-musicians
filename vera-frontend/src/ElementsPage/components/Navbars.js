import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Image
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Navbars.css';
import logo from "../styles/images/logo.png";

import { useSelector, useDispatch } from 'react-redux';
import {
    toggleView,
    selectView
} from '../../features/viewSlice';
import { Link } from 'react-router-dom';

function Navbars(props) {
    const view = useSelector(selectView);
    const dispatch = useDispatch();

    return (
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
                    <LinkContainer to="/marketplace">
                        <Nav.Link>Marketplace</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/activity">
                        <Nav.Link>Activity</Nav.Link>
                    </LinkContainer>
                    <Nav.Link onClick={() => dispatch(toggleView())}>{view}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbars;