import './styles/Landing.css';
import Navbars from '../ElementsPage/components/Navbars';
import Header from './components/Header';
import GettingStarted from './components/GettingStarted';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Contact from './components/Contact';
import { useScrollPercentage } from 'react-scroll-percentage'

function Landing() {
    const [scrollRef, scrollPercentage] = useScrollPercentage({ threshold: 0 })

    return (
        <div className="landing-page" ref={scrollRef}>
            <Navbars fixed={scrollPercentage >= 0.30}/>
            <Header />
            <GettingStarted />
            <HowItWorks />
            <Features />
            <Contact />
        </div>
    );
}

export default Landing;
