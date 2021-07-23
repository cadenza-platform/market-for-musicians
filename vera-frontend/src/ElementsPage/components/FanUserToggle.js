import { Button } from 'react-bootstrap';
import '../styles/UserToggle.css';

function FanUserToggle() {
    return (
        <div className="toggle-button-group flex-md-col">
            <Button variant="outline-secondary" className="toggle-button left selected">For Fans</Button>
            <Button variant="outline-secondary" className="toggle-button right">For Artists</Button>
        </div>
    );
}

export default FanUserToggle;