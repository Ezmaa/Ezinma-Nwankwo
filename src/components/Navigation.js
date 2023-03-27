import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import githubIcon from '../assets/img/github-icon.png';
import linkedinIcon from '../assets/img/linked-in-icon.png';
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
    <Navbar fixed="top" expand="lg" className={scrolled ? "scrolled": ""}>
      <Container fluid>
        <Navbar.Brand>Ezinma Nwankwo</Navbar.Brand>

        <Navbar.Toggle className="custom-toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => highlightActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => highlightActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => highlightActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
          <div className="social-icon" >
        <a href="https://github.com/Ezmaa"><img src={githubIcon} alt="" /></a>
        <a href="https://www.linkedin.com/in/ezinma-nwankwo-3b7905234"><img src={linkedinIcon} alt="" /></a>
        </div>
          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
  )
}


