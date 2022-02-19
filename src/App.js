import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar, Nav, Row, Col, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

import logo from './images/logo.png'
import paper from './images/paper.png'
import bgImg from './images/bg.png';
import market from './images/market.png';
import twitter from './images/twitter.png';
import discord from './images/discord.png';
import opensea from './images/opensea.png';
import nfts100 from './images/100 nfts.png';
import sb from './images/sb.png';
import nftsBg from './images/nfts-bg.png';
import brwMarket from './images/Frame 205.png';
import involedBg from './images/involved.png';
import checkoutTwitter from './images/checkoutTwitter.png';
import joinDiscord from './images/joinDiscord.png';
import involvedNFTImg from './images/involvedNFTImg.png';




function App() {

  const styles = {
    // backgroundColor: '#191B1F',
    backgroundImage: 'url('+bgImg+')',
    // backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // minHeight: '100vh',
    // objectFit: 'scale-down',
    minWidth: '100%',
    with: '100%',
    // height: '100vh',
  };

  const involed = {
    backgroundImage: 'url('+involedBg+')',
    // backgroundPosition: 'center',
    backgroundSize: 'cover',
    // objectFit: 'scale-down',
    minWidth: '100%',
    with: '100%',
    // height: '100%',
  };

  return (
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
                                    {/* WhitePAPER */}
                                    <img
                                        src={paper}
                                        width="150"
                                        height="50"
                                        // className="paper"
                                        alt="whitepaper"
                                    />
                                </a>
                            </Nav.Link>
                            {/* <Nav.Link>
                                <Button className='btn'
                                    onClick={handleClick}
                                    >Connect Wallet
                                </Button>{' '}
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
            </Container>
      </Navbar>

      <Container fluid style={styles} id="home" >
        <Container className='hero '>
          <Row className='exp d-flex justify-content-center text-center'>
            <Col>
            Create your own
            </Col>
          </Row>
          <Row className='exp'>
            <Col>
            NFT experience
            </Col>
          </Row>
          <Row className='d-flex justify-content-center text-center'>
            <Link to="/marketplace">
              <img className='market'
                src={market}
                width="250"
                height="50"
                // className="paper"
                alt="enter the marketplace"
              />
            </Link>
          </Row>

          <Row className='mt-5 pb-5 d-flex justify-content-center text-center'>
          <Col>
              <a rel="noopener noreferrer" target="_blank" href="">
                  <img className='social'
                      src={opensea}
                      width="20"
                      height="20"
                      // className="paper"
                      alt="whitepaper"
                  />
              </a>
            </Col>
            <Col>
              <a rel="noopener noreferrer" target="_blank" href="">
                  <img className='social'
                      src={twitter}
                      width="20"
                      height="20"
                      // className="paper"
                      alt="whitepaper"
                  />
              </a>
            </Col>
            <Col>
              <a rel="noopener noreferrer" target="_blank" href="">
                  <img className='social'
                      src={discord}
                      width="20"
                      height="20"
                      // className="paper"
                      alt="whitepaper"
                  />
              </a>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row>
          <Col>
            <Row>
              <img className='nfts-100'
                  src={nfts100}
                  width="200"
                  height="800"
                  // className="paper"
                  alt="whitepaper"
              />
            </Row>
            <Row>
              <div className='exclusive'>
              Exclusive!
              </div>
              <div className='nfts-hedera'>
              100 NFTs 1/1, minted on Hedera 
              </div>
              <div className='nfts-hedera'>
              Hashgraph Token Service.
              </div>
            </Row>
          </Col>
          <Col>
            <Row className='nft-intro'>
              <div className='intro-nft'>
                They let themselves go. Okay, okay... But they have superpowers. What about you? 
              </div>
              <div className='mt-5 nfts-hedera'>
              Nop. They are not avengers, they are not a shield. But a team! Or maybe a Tim -and some others around, trying to fit in their suit AGAIN.
              </div>
              <div className='mt-5 nfts-hedera'>
              <img className='sb'
                  src={sb}
                  width="60"
                  height="40"
                  // className="paper"
                  alt="whitepaper"
              />       
              </div>
              <div className='mt-2 nfts-hedera'>
                <h2>
                 Join the Club
                </h2>
              </div>
              <div className='mt-2 nfts-hedera'>
              Buy a Lazy Superhero and get rewarded in an exclusive club.
              </div>
            </Row>
          </Col>
        </Row>

        <div className='mt-5 hr-line'></div>

        <Row className='mt-5'>
          <div className='about-nft text-center'>
          Nop. They are not avengers, they are not a shield. But a team!  Or maybe a Tim -and some others around, trying to fit in their suit AGAIN.
          </div>
        </Row>
        </Container>


      <Container fluid>
        <Row>
          <img className='sb'
              src={nftsBg}
              width="100%"
              height="1300"
              // className="paper"
              alt="whitepaper"
          />     
        </Row>
      </Container>

      <Container className='text-center'>
        <a rel="noopener noreferrer" target="_blank" href="">
          <img 
            src={brwMarket}
            width="400"
            height="200"
            // className="paper"
            alt="whitepaper"
          />   
        </a>
      </Container>
      
      <Container fluid style={involed}>
        <Row className='text-center checkout-twitter'>
          <div>
            <h2 className='exp'>
            Get Involved
            </h2>
          </div>  
          <div className='mt-3 mb-5'>
            <div className='nfts-hedera'>
              Join the community and keep up-to-date 
            </div>
            <div className='nfts-hedera'>
              with our development process.
            </div>
          </div>
          <div className='mt-2'>
            <a rel="noopener noreferrer" target="_blank" href="">
              <img 
              // className='checkout-twitter'
                src={checkoutTwitter}
                width="500"
                height="60"
                // className="paper"
                alt="whitepaper"
              />   
            </a>
          </div>
          <div className='mt-3'>
            <a rel="noopener noreferrer" target="_blank" href="">
              <img 
              // className='checkout-twitter'
                src={joinDiscord}
                width="500"
                height="60"
                // className="paper"
                alt="whitepaper"
              />   
            </a>
          </div>
          <div>
              <img 
              // className='checkout-twitter'
                src={involvedNFTImg}
                width="500"
                height="500"
                // className="paper"
                alt="whitepaper"
              />   
          </div>
        </Row>
      </Container>
    </main>
  );
}

export default App;
