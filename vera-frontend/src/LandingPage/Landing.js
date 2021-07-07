import './styles/Landing.css';
import Navbars from '../ElementsPage/components/Navbars';
import Header from './components/Header';
import GettingStarted from './components/GettingStarted';
import Features from './components/Features';

function Landing() {
    return (
        <div className="landing-page">
            <Navbars />
            <Header />
            <GettingStarted />
            <Features />
        </div>
    );
}

export default Landing;
