import './styles/Landing.css';
import Navbars from '../ElementsPage/components/Navbars';
import FanHeader from './components/FanHeader';
import GettingStarted from './components/GettingStarted';
import HowItWorks from './components/HowItWorks';
import FanFeatures from './components/FanFeatures';
import Contact from './components/Contact';

import { useScrollPercentage } from 'react-scroll-percentage';
import { useSelector } from 'react-redux';
import { selectView } from '../features/viewSlice';

function Landing() {
    const [scrollRef, scrollPercentage] = useScrollPercentage({ threshold: 0 });

    const view = useSelector(selectView);
    var landingView;

    if (view == "Artist") {
        landingView = (
            <div>

            </div>
        );
    } else {
        landingView = (
            <div>
                <FanHeader />
                <GettingStarted />
                <HowItWorks />
                <FanFeatures />
                <Contact />
            </div>
        );
    }

    return (
        <div className="landing-page" ref={scrollRef}>
            <Navbars fixed={scrollPercentage >= 0.30} />
            {landingView}
        </div>
    );
}

export default Landing;
