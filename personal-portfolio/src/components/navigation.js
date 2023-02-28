import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import githubIcon from '../assets/img/githubIcon.png';
import linkedinIcon from '../assets/img/linkedinIcon.png';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";

export const Navigation = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const highlightActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Router>
    <Navbar fixed="top" bg="success" expand="lg" className={scrolled ? "scrolled": ""}>
      <Container fluid>
        <Navbar.Brand>Ezinma Nwankwo</Navbar.Brand>
        <div className="social-icon" >
        <a href="https://github.com/Ezmaa"><img src={githubIcon} alt="" /></a>
        <a href="https://www.linkedin.com/in/ezinma-nwankwo-3b7905234"><img src={linkedinIcon} alt="" /></a>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => highlightActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => highlightActiveLink('home')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => highlightActiveLink('home')}>Projects</Nav.Link>
          </Nav>
          <span className="navabr-text">
            <HashLink to='#connect'>
            <button className="social-button"><span>Lets Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
  )
}


