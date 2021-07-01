import Buttons from "./components/Buttons"
import SongCard from "./components/SongCard"

var songcardProps = {
    "title": "Test Title",
    "price": "9.00",
    "artist": "Test Artist",
    "listens": "100"
}

function Elements() {
    return (
        <div>
            <Buttons />
            <SongCard song={songcardProps}/>
        </div>
    );
}

export default Elements;