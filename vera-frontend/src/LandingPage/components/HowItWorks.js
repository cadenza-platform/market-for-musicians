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
    "header": <div>What are <div className="popout-letter">D</div>igital <div className="popout-letter">L</div>imited Edition <div className="popout-letter">V</div>inyl Records (DLVs)</div>,
    "body": "DLVs are a new way to experience music. Take the painting of the Mona Lisa, for example. It is copied, photographed, and distributed everywhere, but there's only one original physical painting. This gives the original painting and its owner incredible value due to its rarity. Digital vinyl records do this with music, creating limited edition works that can grow in value as artists gain popularity."
}

const faqHowProps = {
    "header": "How does Vera use DLVs",
    "body": "Vera allows you to grow with your favorite artists by purchasing shares of their digital vinyl records, and enables us to securely give you ownership of a limited edition record showcasing their music. This is possible because these records are unique and certified digital assets stored on the blockchain. While copies of digital items are available for anyone to obtain, Vera’s digital vinyl records track and provide you with proof of ownership over the asset."
}

const faqSellProps = {
    "header": "How can I buy and sell DLVs?",
    "body": "Vera’s marketplace allows you to explore, buy, and sell DLVs with other fans on the platform. When artists launch a brand new DLV, auctions will be hosted giving you the opportunity to be the first to own these exclusive items!"
}

const faqSecurityProps = {
    "header": "How does Vera handle security?",
    "body": "Vera’s flexible exchange is a secure and regulated marketplace in which your DLVs can be transacted in a safe and efficient manner. Our thorough verification and certification processes for users and content on the platform allow us to ensure and maintain authenticity in our markets."
}

const fawEnvironmentProps = {
    "header": "What is Vera’s impact on the environment?",
    "body": "Traditional NFTs and other new, online art market systems utilize high-energy processes that use extensive amounts of electricity. Vera is committed to a more environmentally friendly approach to decentralized market creation and helping reduce the carbon footprint of the internet."
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
                        With Vera, artists can distribute their music in the form of digital vinyl records to the public. You can follow the growth of your favorite artists by purchasing copies of these records.
                    </i>
                </Col>
            </Row><br/>
            <Row className="flex-column flex-md-row">
                <Col className="flex-md-col">
                    <Image className="howitworks-icon" src={coinDataIcon}/>
                </Col>
                <Col>
                    <Dropdown content={faqWhatProps}/><br/>
                    <Dropdown content={faqHowProps}/><br/>
                    <Dropdown content={faqSellProps}/><br/>
                    <Dropdown content={faqSecurityProps}/><br/>
                    <Dropdown content={fawEnvironmentProps}/>
                </Col>
            </Row>
        </Container>
    )
}

export default HowItWorks;