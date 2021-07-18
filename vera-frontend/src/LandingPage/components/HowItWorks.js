import {
    Image, 
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Dropdown from '../../ElementsPage/components/Dropdown';
import '../styles/HowItWorks.css';
import coinDataIcon from '../styles/images/coin-data-icon.svg';

const faqWhatProps = {
    "header": "What’s a NFT (non-fungible token)?",
    "body": "Take the painting of the Mona Lisa, for example. It is copied, photographed, and distributed everywhere, but there's only one original physical painting. This gives the original painting and its owner incredible value due to its rarity. Non-Fungible Tokens do this for digital creations like art, games, and in our case, music."
}

const faqHowProps = {
    "header": "How does Vera use NFTs?",
    "body": "Vera allows you to invest in your favorite artists by purchasing shares of their digital records, and enables us to securely give you ownership of their music. This is possible because digital records are unique and certified digital assets stored on the blockchain. While copies of digital music are available for anyone to obtain, Vera’s digital vinyl records track and provide you with proof of ownership over a digital asset."
}

function HowItWorks() {
    return (
        <Container fluid className="howitworks-container" id="how-it-works">
            <Row className="flex-column flex-md-row">
                <Col>
                    <h1 className="howitworks-text-title">
                        How it works
                    </h1>
                </Col>
                <Col className="howitworks-text-body">
                    <i>
                        With Vera, artists can distribute their music in the form of digital vinyl records to the public. 
                        You can invest in your favorite artists by purchasing shares of these records.
                    </i>
                </Col>
            </Row><br/>
            <Row className="flex-column flex-md-row">
                <Col>
                    <Image className="howitworks-icon" src={coinDataIcon}/>
                </Col>
                <Col>
                    <Dropdown content={faqWhatProps}/><br/>
                    <Dropdown content={faqHowProps}/>
                </Col>
            </Row>
        </Container>
    )
}

export default HowItWorks;