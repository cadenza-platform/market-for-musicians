import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/UserToggle.css';

function FanUserToggle() {
    return (
        <div className="toggle-button-group flex-md-col">
            <Link to="/">
                <Button variant="outline-secondary" className="toggle-button left selected">For Fans</Button>
            </Link>
            <Link to="/artist">
                <Button variant="outline-secondary" className="toggle-button right">For Artists</Button>
            </Link>
        </div>
    );
}

export default FanUserToggle;