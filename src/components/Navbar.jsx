import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Vridhi_Srivastava_Resume.pdf';
    link.download = 'Vridhi_Srivastava_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#hero" className="brand-name">
          <span className="brand-first">Vridhi </span>
          <span className="brand-last">Srivastava</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links align-items-lg-center">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            
            {/* Resume Download Button - FIRST */}
            <button 
              className="resume-download-btn"
              onClick={handleDownloadResume}
              title="Download Resume"
            >
              <i className="bi bi-download"></i>
              <span className="resume-btn-text">Resume</span>
            </button>

            {/* Theme Toggle - SECOND */}
            <ThemeToggle />

            {/* Contact Button - LAST */}
            <Nav.Link href="#contact" className="contact-btn">
              Let's Talk
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;