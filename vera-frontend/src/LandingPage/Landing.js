import './styles/Landing.css';
import Navbars from '../ElementsPage/components/Navbars';
import Header from './components/Header';
import GettingStarted from './components/GettingStarted';
import HowItWorks from './components/HowItWorks';

function Landing() {
    return (
        <div className="landing-page">
            <Navbars />
            <Header />
            <GettingStarted />
            <HowItWorks />
        </div>
    );
}

export default Landing;
