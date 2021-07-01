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

function Navbars(props) {
    var toggle = (
        <LinkContainer to="/">
            <Nav.Link>Investors</Nav.Link>
        </LinkContainer>
    );
    if (props.toggle === "artist") {
        toggle = (
            <LinkContainer to="/">
                <Nav.Link>Investors</Nav.Link>
            </LinkContainer>
        );
    } else {
        toggle = (
            <LinkContainer to="/artist">
                <Nav.Link>Artists</Nav.Link>
            </LinkContainer>
        );
    }

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
                    {toggle}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbars;