import './styles/Landing.css';
import FanNavbar from '../ElementsPage/components/FanNavbar';
import FanHeader from './components/FanHeader';
import GettingStarted from './components/GettingStarted';
import HowItWorks from './components/HowItWorks';
import FanFeatures from './components/FanFeatures';
import FanContact from './components/FanContact';
import Footer from '../ElementsPage/components/Footer';

import { useScrollPercentage } from 'react-scroll-percentage';

function Landing() {
    const [scrollRef, scrollPercentage] = useScrollPercentage({ threshold: 0 });

    return (
        <div className="landing-page fan-view" ref={scrollRef}>
            <FanNavbar fixed={scrollPercentage >= 0.30} />
            <FanHeader />
            <GettingStarted />
            <HowItWorks />
            <FanFeatures />
            <FanContact />
            <Footer />
        </div>
    );
}

export default Landing;
