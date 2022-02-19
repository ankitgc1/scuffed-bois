import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import logo from '../images/footerLogo.png';
import footermarket from '../images/footerMarket.png';
import footerpaper from '../images/footerPaper.png';
import '../App.css';


function footer() {
    return(
        <footer>
            <Container>
                <Row className='pt-5 mt-5 mb-5'>
                    <Col>
                        <img
                            src={logo}
                            width="300"
                            height="80"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                        <div>
                        © Copyright 2021. All Rights Reserved.
                        </div>
                    </Col>
                    <Col>
                    <a rel="noopener noreferrer" target="_blank" href="">
                        <img 
                        // className='checkout-twitter'
                            src={footermarket}
                            width="200"
                            height="45"
                            // className="paper"
                            alt="whitepaper"
                        />   
                    </a>
                    <a className='footer-paper' rel="noopener noreferrer" target="_blank" href="">
                        <img 
                        // className='checkout-twitter'
                            src={footerpaper}
                            width="180"
                            height="45"
                            // className="paper"
                            alt="whitepaper"
                        />   
                    </a>
                    </Col>
                </Row>

            <div className='mb-5 hr-line'></div>
            </Container>


        </footer>
    );
}


export default footer;
