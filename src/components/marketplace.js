// import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Navbar, Nav, Row, Col, Container, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import logo from '../images/logo.png';
import connectWallet from '../images/connectWallet.png';
import marketBanner from '../images/marketBanner.png';
import auctionHouse from '../images/auctionHouse.png';
import nft from '../images/nft.png';
import heart from '../images/heart.png';
import buyNow from '../images/buyNow.png';
import loadMore from '../images/loadMore.png';




function marketplace() {
    const styles = {
        // backgroundColor: '#191B1F',
        backgroundImage: 'url('+marketBanner+')',
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // minHeight: '100vh',
        // objectFit: 'scale-down',
        minWidth: '100%',
        with: '100%',
        // height: '100vh',
    };

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


            <Container fluid style={styles} id="home" >
                <Container className='hero mb-5'>
                <Row className='nfts-hedera pb-5'>
                    <Col>
                        <span className='displaying'>Displaying</span>  100 NFTs
                    </Col>
                    <Col>
                        <Form.Check 
                            // type={type}
                            // id={`default-${type}`}
                            label='Show Available NFTs'
                        />
                    </Col>
                    <Col>
                        <select className='collection'>
                            <option>All Collections</option>
                        </select>
                    </Col>
                    <Col>
                        <img
                            src={auctionHouse}
                            width="200"
                            height="45"
                            // className="d-inline-block align-top"
                            alt="Auction House"
                        />
                    </Col>
                </Row>

                <div className='mb-5 hr-line gray'></div>

                </Container>
            </Container>

            <Container>
                <Row className='mb-5'>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <a rel="noopener noreferrer" href="/nft">
                                <img className='nft-img'
                                    src={nft}
                                    width="274"
                                    height="274"
                                    // className="d-inline-block align-top"
                                    alt="Auction House"
                                />
                            </a>
                            <div className='mt-3'>
                                <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='mb-5'>
                   <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                   <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                   <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                   <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='mb-5'>
                   <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                   <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                   <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                   <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='mb-5'>
                   <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                   <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                   <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                   <Col md={3} className='d-flex justify-content-center'>
                        <div className='nft-box'>
                            <img className='nft-img'
                                src={nft}
                                width="274"
                                height="274"
                                // className="d-inline-block align-top"
                                alt="Auction House"
                            />
                            <div className='mt-3'>
                                 <div className='on-sale'>#Sale</div>
                                <div className='nft-name'>
                                    Hoodboi #20
                                    <span className='nft-likes-number'>
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
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span>
                                    <img className='nft-img'
                                        src={buyNow}
                                        width="80"
                                        height="44"
                                        // className="d-inline-block align-top"
                                        alt="Likes"
                                    />
                                </span>
                                <span className='price'>
                                    HBAR 200
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='justify-content-center text-center'>
                    <Col>
                    <a rel="noopener noreferrer" target="_blank" href="">
                        <img
                            src={loadMore}
                            width="250"
                            height="200"
                            // className="paper"
                            alt="Load More"
                        />
                    </a>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default marketplace;
