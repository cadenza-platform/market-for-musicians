import Buttons from './components/Buttons';
import Navbars from './components/Navbars';
import SongCard from "./components/SongCard";

var songcardProps = {
    "title": "Test Title",
    "price": "9.00",
    "artist": "Test Artist",
    "listens": "100"
}

function Elements() {
    return (
        <div>
            <Navbars />
            <Buttons />
            <SongCard song={songcardProps}/>
        </div>
    );
}

export default Elements;