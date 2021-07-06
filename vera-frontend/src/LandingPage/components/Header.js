import '../styles/Header.css';
import { Image, Button } from 'react-bootstrap';
import laptop from '../styles/images/laptop.png';

function Header() {
    return(
        <div className="header-container">
            <div className="header-text">
                <h1 className="header-text-title">
                    Bet early on artists.<br/>
                    Prosper together.
                </h1><br/>
                <i className="header-text-body">
                    Support underground artists and grow your portfolio as they grow their fan base.
                </i><br/><br/><br/>
                <Button variant="outline-light" className="join-waitlist-button">JOIN WAITLIST</Button>
            </div>
            <Image src={laptop} />
        </div>
    );
}

export default Header;