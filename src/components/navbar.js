import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../images/logo.png'
import paper from '../images/paper.png'
import '../App.css';
import {Link} from "react-router-dom";


function navbar() {
    return(
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
    );
}


export default navbar;
