import './styles/Landing.css';
import ArtistNavbar from '../ElementsPage/components/ArtistNavbar';
import ArtistHeader from './components/ArtistHeader';
import Footer from '../ElementsPage/components/Footer';
import ArtistFeatures from './components/ArtistFeatures';

import { useScrollPercentage } from 'react-scroll-percentage';

function Landing() {
    const [scrollRef, scrollPercentage] = useScrollPercentage({ threshold: 0 });

    return (
        <div className="landing-page artist-view" ref={scrollRef}>
            <ArtistNavbar fixed={scrollPercentage >= 0.40} />
            <ArtistHeader />
            <ArtistFeatures />
            <Footer />
        </div>
    );
}

export default Landing;
