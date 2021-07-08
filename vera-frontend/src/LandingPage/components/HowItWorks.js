import {
    Image, 
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Dropdown from '../../ElementsPage/components/Dropdown';
import '../styles/HowItWorks.css';
import howItWorksIcon from '../styles/images/howitworks-icon.png';

const faqWhatProps = {
    "header": "What’s a NFT (non-fungible token)?",
    "body": "Take the painting of the Mona Lisa, for example. It is copied, photographed, and distributed everywhere, but there's only one original physical painting. This gives the original painting and its owner incredible value due to its rarity. Non-Fungible Tokens do this for digital creations like art, games, and in our case, music."
}

const faqHowProps = {
    "header": "How does Vera use NFTs?",
    "body": "Vera allows you to invest in your favorite artists by purchasing shares of their NFTs, and enables us to securely give you ownership of their music. This is possible because NFTs are unique and certified digital assets stored on the blockchain. While copies of digital items are available for anyone to obtain, NFTs track and provide you with proof of ownership over a digital asset."
}

function HowItWorks() {
    return (
        <Container fluid className="howitworks-container">
            <Row className="flex-column-reverse flex-md-row">
                <Col>
                    <h1 className="howitworks-text-title">
                        How it works
                    </h1>
                </Col>
                <Col>
                    <i className="howitworks-text-body">
                        With Vera, artists can distribute their music in the form of NFTs to the public.
                        You can invest in your favorite artists by purchasing shares of these NFTs.
                    </i>
                </Col>
            </Row><br/>
            <Row>
                <Col>
                    <Image src={howItWorksIcon}/>
                </Col>
                <Col>
                    <Dropdown content={faqWhatProps}/>
                    <Dropdown content={faqHowProps}/>

                </Col>
            </Row>
        </Container>
    )
}

export default HowItWorks;