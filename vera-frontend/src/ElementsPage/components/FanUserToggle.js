import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/UserToggle.css";
import { useDispatch } from "react-redux";
import { toggleCollapseClose } from "../../features/viewSlice";

function FanUserToggle() {
  const dispatch = useDispatch();

  return (
    <div className="toggle-button-group flex-md-col">
      <Link to="/">
        <Button
          variant="outline-secondary"
          className="toggle-button left selected"
          onClick={() => dispatch(toggleCollapseClose())}
        >
          For Fans
        </Button>
      </Link>
      <Link to="/artist">
        <Button
          variant="outline-secondary"
          className="toggle-button right"
          onClick={() => dispatch(toggleCollapseClose())}
        >
          For Artists
        </Button>
      </Link>
    </div>
  );
}

export default FanUserToggle;
