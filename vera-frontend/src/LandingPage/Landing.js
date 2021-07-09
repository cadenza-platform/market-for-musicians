import './styles/Landing.css';
import Navbars from '../ElementsPage/components/Navbars';
import Header from './components/Header';
import GettingStarted from './components/GettingStarted';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Contact from './components/Contact';

function Landing() {
    return (
        <div className="landing-page">
            <Navbars />
            <Header />
            <GettingStarted />
            <HowItWorks />
            <Features />
            <Contact />
        </div>
    );
}

export default Landing;
