import { Button } from "react-bootstrap";
import "../styles/UserToggle.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleCollapseClose } from "../../features/viewSlice";

function ArtistUserToggle() {
  const dispatch = useDispatch();

  return (
    <div className="toggle-button-group flex-md-col">
      <Link to="/">
        <Button
          variant="outline"
          className="toggle-button left"
          onClick={() => dispatch(toggleCollapseClose())}
        >
          For Fans
        </Button>
      </Link>
      <Link to="/artist">
        <Button
          variant="outline"
          className="toggle-button right selected"
          onClick={() => dispatch(toggleCollapseClose())}
        >
          For Artists
        </Button>
      </Link>
    </div>
  );
}

export default ArtistUserToggle;
