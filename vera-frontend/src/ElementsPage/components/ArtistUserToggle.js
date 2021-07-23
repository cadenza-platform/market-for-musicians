import { Button } from 'react-bootstrap';
import '../styles/UserToggle.css';

function ArtistUserToggle() {
    return (
        <div className="toggle-button-group flex-md-col">
            <Button variant="outline" className="toggle-button left">For Fans</Button>
            <Button variant="outline" className="toggle-button right selected">For Artists</Button>
        </div>
    );
}

export default ArtistUserToggle;