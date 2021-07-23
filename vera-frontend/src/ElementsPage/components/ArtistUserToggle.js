import { Button } from 'react-bootstrap';
import '../styles/UserToggle.css';
import { Link } from "react-router-dom";

function ArtistUserToggle() {
    return (
        <div className="toggle-button-group flex-md-col">
            <Link to="/">
                <Button variant="outline" className="toggle-button left">For Fans</Button>
            </Link>
            <Link to="/artist">
                <Button variant="outline" className="toggle-button right selected">For Artists</Button>
            </Link>
        </div>
    );
}

export default ArtistUserToggle;