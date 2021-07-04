import { Image, Card } from 'react-bootstrap';
import '../styles/Image.css';

function CaptionedImage(props) {
    const image = 
    <div>
        <Image src={props.content.filename} />
        {props.content.caption && <div className="image-caption">{props.content.caption}</div>}
    </div>

    if (props.content.border) {
        return (
            <Card className="image-container">
                {image}
            </Card>
        );
    } else {
        return (
            <div className="image-container">
                {image}
            </div>
        );
    }
}

export default CaptionedImage;