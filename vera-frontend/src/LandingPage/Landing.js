import './styles/Landing.css';
import Navbars from '../ElementsPage/components/Navbars';
import Header from './components/Header';
import GettingStarted from './components/GettingStarted';

function Landing() {
    return (
        <div className="landing-page">
            <Navbars />
            <Header />
            <GettingStarted />
        </div>
    );
}

export default Landing;
