import Buttons from "./components/Buttons";
import FanNavbar from "./components/FanNavbar";
import ArtistNavbar from "./components/ArtistNavbar";
import SongCard from "./components/SongCard";
import Dropdown from "./components/Dropdown";
import CaptionedImage from "./components/Image";
import ExpandableText from "./components/ExpandableText";
import "./ElementsPage.css";
import {
  songcardProps,
  dropdownProps,
  noBorderProps,
  borderProps,
  noCaptionProps,
  noCaptionNoBorderProps,
  expandableTextProps,
} from "./ElementsPageProps";

function Elements() {
  return (
    <div className="elements-container">
      <FanNavbar />
      <br />
      <ArtistNavbar />
      <br />
      <Buttons />
      <br />
      <br />
      <div className="images-container">
        <CaptionedImage content={noCaptionNoBorderProps} />
        <CaptionedImage content={noCaptionProps} />
        <CaptionedImage content={noBorderProps} />
        <CaptionedImage content={borderProps} />
      </div>
      <br />
      <Dropdown content={dropdownProps} />
      <br />
      <div className="expandable-text-container">
        <ExpandableText content={expandableTextProps} />
      </div>
      <br />
      <SongCard song={songcardProps} />
      <br />
    </div>
  );
}

export default Elements;
