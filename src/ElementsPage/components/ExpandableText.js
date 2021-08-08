import { useState } from "react";
import { Image } from "react-bootstrap";
import uparrow from "../styles/images/uparrow-white.svg";
import downarrow from "../styles/images/downarrow-white.svg";
import "../styles/ExpandableText.css";

function ExpandableText(props) {
  const [isExpanded, toggle] = useState(false);

  return (
    <div className="expandable-text">
      <span>{props.content.mainContent}</span>
      {isExpanded && <span>&nbsp;{props.content.extraContent}</span>}
      <button
        className="expandable-text-button"
        onClick={() => toggle(!isExpanded)}
      >
        {isExpanded ? (
          <i className="expandable-text-button-label">&nbsp;Read Less</i>
        ) : (
          <i className="expandable-text-button-label">&nbsp;Read More</i>
        )}
        <Image
          className="expandable-text-arrow"
          src={isExpanded ? uparrow : downarrow}
        />
      </button>
    </div>
  );
}

export default ExpandableText;
