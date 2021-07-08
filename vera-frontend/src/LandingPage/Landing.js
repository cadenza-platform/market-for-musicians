import './styles/Landing.css';
import Navbars from '../ElementsPage/components/Navbars';
import Header from './components/Header';
import GettingStarted from './components/GettingStarted';
import Contact from './components/Contact';

function Landing() {
    return (
        <div className="landing-page">
            <Navbars />
            <Header />
            <GettingStarted />
            <Contact />
        </div>
    );
}

export default Landing;
