import './styles/Landing.css';
import Navbars from '../ElementsPage/components/Navbars';
import FanHeader from './components/FanHeader';
import GettingStarted from './components/GettingStarted';
import HowItWorks from './components/HowItWorks';
import FanFeatures from './components/FanFeatures';
import FanContact from './components/FanContact';
import ArtistHeader from './components/ArtistHeader';
import Footer from '../ElementsPage/components/Footer';
import ArtistFeatures from './components/ArtistFeatures';

import { useScrollPercentage } from 'react-scroll-percentage';
import { useSelector } from 'react-redux';
import { selectView } from '../features/viewSlice';

function Landing() {
    const [scrollRef, scrollPercentage] = useScrollPercentage({ threshold: 0 });

    const view = useSelector(selectView);
    var landingView;

    if (view === "Artist") {
        landingView = (
            <div className="artist-view">
                <Navbars fixed={scrollPercentage >= 0.40} />
                <ArtistHeader />
                <ArtistFeatures />
                <Footer />
            </div>
        );
    } else {
        landingView = (
            <div className="fan-view">
                <Navbars fixed={scrollPercentage >= 0.30} />
                <FanHeader />
                <GettingStarted />
                <HowItWorks />
                <FanFeatures />
                <FanContact />
                <Footer />
            </div>
        );
    }

    return (
        <div className="landing-page" ref={scrollRef}>
            {landingView}
        </div>
    );
}

export default Landing;
