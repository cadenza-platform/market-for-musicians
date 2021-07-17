import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/UserToggle.css';

import {
    toggleArtist,
    toggleFan,
    selectView,
} from '../../features/viewSlice';

function UserToggle() {
    const view = useSelector(selectView);
    const dispatch = useDispatch();

    if (view === "Artist") {
        return (
            <div className="toggle-button-group flex-md-col">
                <Button variant="outline-secondary" className="toggle-button left" onClick={() => dispatch(toggleFan())}>Fan</Button>
                <Button variant="outline-secondary" className="toggle-button right selected">Artist</Button>
            </div>
        );
    } else {
        return (
            <div className="toggle-button-group flex-md-col">
                <Button variant="outline-secondary" className="toggle-button left selected">Fan</Button>
                <Button variant="outline-secondary" className="toggle-button right" onClick={() => dispatch(toggleArtist())}>Artist</Button>
            </div>
        );
    }
}

export default UserToggle;