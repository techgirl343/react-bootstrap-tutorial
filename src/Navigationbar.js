import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import git from './icons/git.svg';
import linkedin from './icons/linkedin.svg';
import twitter from './icons/twitter.svg';


function Navigationbar() {
  return (
    <div>
        <Navbar variant='dark' bg='dark' expand="lg" sticky='top'>
        <Container>
            <Navbar.Brand href="/" style={{ fontFamily:'Oxygen'}}>
            React-Bootstrap</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='icons' style={{justifyContent:'end'}}>
            <Nav className="me-auto">
            <Nav.Link href="/carousel">Carousel</Nav.Link>
            <Nav.Link href="/card">Card</Nav.Link>
            </Nav>
                <Nav style={{gap:'0.5rem', alignItems:'center'}}>
                    <img src={git} alt='git' ></img>
                    <img src={twitter} alt='twitter'></img>
                    <img src={linkedin} alt='linkedin'></img>
                </Nav>
            </Navbar.Collapse>
            
        </Container>
        </Navbar>
    </div>
  )
}

export default Navigationbar