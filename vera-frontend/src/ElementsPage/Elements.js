import Buttons from './components/Buttons';
import Navbars from './components/Navbars';
import SongCard from './components/SongCard';
import Dropdowns from './components/Dropdown';
import CaptionedImage from './components/Image';
import './ElementsPage.css';
import {
    songcardProps,
    dropdownProps,
    noBorderProps,
    borderProps
} from './ElementsPageProps';

function Elements() {
    return (
        <div className="elements-container">
            <Navbars /><br />
            <Buttons /><br /><br/>
            <div className="images-container">
                <CaptionedImage content={noBorderProps} />
                <CaptionedImage content={borderProps} />
            </div><br/>         
            <Dropdowns content={dropdownProps}/><br/>
            <SongCard song={songcardProps}/><br />
        </div>
    );
}

export default Elements;