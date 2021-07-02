import Buttons from './components/Buttons';
import Navbars from './components/Navbars';
import SongCard from './components/SongCard';
import Dropdowns from './components/Dropdown';
import './ElementsPage.css';

var songcardProps = {
    "title": "Test Title",
    "price": "9.00",
    "artist": "Test Artist",
    "listens": "100"
}

var dropdownProps = {
    "header": "What’s a NFT (non-fungible token)?",
    "body": "Take the painting of the Mona Lisa, for example. It is copied, photographed, and distributed everywhere, but there's only one original physical painting. This gives the original painting and its owner incredible value due to its rarity. Non-Fungible Tokens do this for digital creations like art, games, and in our case, music."
}

function Elements() {
    return (
        <div className="elements-container">
            <Navbars /><br />
            <Buttons /><br /><br />
            <Dropdowns content={dropdownProps}/><br/>
            <SongCard song={songcardProps}/><br />
        </div>
    );
}

export default Elements;