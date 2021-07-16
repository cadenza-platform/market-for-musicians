import { useState } from 'react';
import { Image } from 'react-bootstrap';
import uparrow from '../styles/images/uparrow-white.svg';
import downarrow from '../styles/images/downarrow-white.svg';
import '../styles/ExpandableText.css';

function ExpandableText(props) {
    const [isCollapsed, toggle] = useState(true);

    return (
        <div className="expandable-text">
            <div className="expandable-text-body" style={{ height: (isCollapsed ? `${props.content.collapsedHeight}px` : `100%`) }}>
                {props.content.body}
            </div>
            <button className="expandable-text-button" onClick={() => toggle(!isCollapsed)}>
                {
                    isCollapsed ?
                    <i className="expandable-text-button-label">Read More</i> :
                    <i className="expandable-text-button-label">Read Less</i>
                }
                <Image className="expandable-text-arrow" src={isCollapsed ? downarrow : uparrow}/>
            </button>
        </div>
    );
}

export default ExpandableText;