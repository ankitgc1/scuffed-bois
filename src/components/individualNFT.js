import '../App.css';
import {Navbar, Nav, Row, Col, Container, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import logo from '../images/logo.png';
import connectWallet from '../images/connectWallet.png';
import nft from '../images/nft.png';
import heart from '../images/heart.png';
import sb from '../images/whiteSB.png';
import arrowDown from '../images/arrowDown.png';
import INBuyNow from '../images/INBuyNow.png';
import share from '../images/share.png';


function individualNFT() {
    return(
        <main className='main'>
            <Navbar className="navbar-bg" expand="lg" fixed='top'>
                <Container fluid className='mt-3'>
                    <Link to="/">
                        <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="300"
                            height="80"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link>
                                    <a rel="noopener noreferrer" target="_blank" href="">
                                        <img
                                            src={connectWallet}
                                            width="150"
                                            height="50"
                                            // className="paper"
                                            alt="connectWallet"
                                        />
                                    </a>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='individual-nft-main'>
                <Row>
                    <Col>
                        <img className='nft-img'
                            src={nft}
                            width="730"
                            height="730"
                            // className="d-inline-block align-top"
                            alt="Auction House"
                        />
                    </Col>
                    <Col>
                        <div className='info-div'>
                            <Row>
                            <div className='for-sale-text'>
                                For Sale
                            </div>
                            </Row>

                            <Row>
                                <Col className='IN-nft-name-div'>
                                    <div className='IN-project-name'>
                                        Scuffed Bois 
                                    </div>
                                    <div className='IN-nft-name'>
                                        Hoodboi #20
                                    </div>
                                </Col>
                                <Col md="auto" className='IN-likes-div'>
                                    <span className='nft-likes-number' id='IN-nft-likes'>
                                        32
                                    </span>
                                    <span className='nft-likes'>
                                        <img className='nft-img'
                                            src={heart}
                                            width="22"
                                            height="22"
                                            // className="d-inline-block align-top"
                                            alt="Likes"
                                        />
                                    </span>
                                </Col>
                            </Row>

                            <Row className='mt-5'>
                                <Col>
                                    <div className='cl-1'>
                                        Creator
                                    </div>
                                </Col>
                                <Col>
                                    <div className='cl-1'>
                                        Collection
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mt-1'>
                                <Col>
                                    <img 
                                        src={sb}
                                        width="43"
                                        height="43"
                                        // className="paper"
                                        alt="whitepaper"
                                    /> 
                                    <span className='cl-2 cl-3'>
                                    0x2326d4fb2...cfe8
                                    </span>
                                </Col>
                                <Col>
                                    <img 
                                        src={nft}
                                        width="43"
                                        height="43"
                                        // className="paper"
                                        alt="whitepaper"
                                    /> 
                                    <span className='cl-2 cl-3'>
                                    ScuffedBois
                                    </span>
                                </Col>
                            </Row>

                            <Row className='mt-5'>
                                <span className='cl-2'>
                                    Details
                                </span>
                            </Row>
                            
                            <Row className='mt-2'>
                                <Col>
                                <div className='mb-5 hr-line gray'></div>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <span className='cl-1'>
                                Description
                                </span>
                            </Row>
                            <Row className='mt-1'>
                                <span className='cl-2'>
                                Created by ScuffedBois
                                </span>
                            </Row>
                            <Row className='mt-5'>
                                <span className='cl-1'>
                                Properties
                                </span>
                            </Row>

                            <Row className='mt-1'>
                                <Col className='justify-content-center text-center'>
                                    <div className='property-box p-1'>
                                        <div className='cl-4 m-1'>
                                            Background
                                        </div>
                                        <div className='cl-2'>
                                        New Hood White
                                        </div>
                                        <div className='cl-1'>
                                        9.3% rarity
                                        </div>
                                    </div>
                                </Col>
                                <Col className='justify-content-center text-center'>
                                    <div className='property-box p-1'>
                                        <div className='cl-4 m-1'>
                                            Background
                                        </div>
                                        <div className='cl-2'>
                                        New Hood White
                                        </div>
                                        <div className='cl-1'>
                                        9.3% rarity
                                        </div>
                                    </div>
                                </Col>
                                <Col className='justify-content-center text-center'>
                                    <div className='property-box p-1'>
                                        <div className='cl-4 m-1'>
                                            Background
                                        </div>
                                        <div className='cl-2'>
                                        New Hood White
                                        </div>
                                        <div className='cl-1'>
                                        9.3% rarity
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className='mt-2'>
                                <div className='cl-2'>
                                    More properties 
                                    <img
                                        src={arrowDown}
                                        width="16"
                                        height="16"
                                        // className="paper"
                                        alt="Arrow Down"
                                    />    
                                </div>
                            </Row>

                            <Row className='mt-4'>
                                <Col>
                                    <div className='cl-2 IN-curr-price'>
                                        Current Price
                                    </div>
                                </Col>
                                <Col>
                                    <div className='cl-2 IN-price-div'>
                                        HBAR
                                        <span className='IN-token-price'>
                                            100
                                        </span>
                                    <div className='cl-1 IN-USD-price'>
                                        ($79,958.77)
                                    </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                <div className='mt-2 hr-line'></div>
                                </Col>
                            </Row>

                            <Row className='mt-3'>
                                <Col>
                                <div className='cl-1'>
                                Sale ends February 9, 2022 at 12:32pm EST
                                </div>
                                </Col>
                            </Row>


                            <Row className='mt-5'>
                                <Col>
                                    <img
                                        src={INBuyNow}
                                        width="300"
                                        height="62"
                                        // className="paper"
                                        alt="Buy Now"
                                    />  
                                </Col>
                                <Col>
                                    <img
                                        src={share}
                                        width="150"
                                        height="62"
                                        // className="paper"
                                        alt="Buy Now"
                                    />  
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default individualNFT;
