import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content">
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="footer-brand">
              <h3 className="footer-logo">
                Vridhi <span>Srivastava</span>
              </h3>
              <p className="footer-tagline">
                Crafting digital experiences with passion and precision.
              </p>
            </div>
          </Col>
          
          <Col lg={4}>
            <div className="footer-social">
              <h4 className="footer-heading">Connect With Me</h4>
              <div className="social-links">
                <a
  href="https://www.linkedin.com/in/vridhi-srivastava/"
  className="social-link"
  aria-label="LinkedIn"
  target="_blank"
  rel="noopener noreferrer"
>
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
  href="https://github.com/vridhi-02"
  className="social-link"
  aria-label="GitHub"
  target="_blank"
  rel="noopener noreferrer"
>
                  <i className="bi bi-github"></i>
                </a>
              <a
  href="mailto:vridhisri.2003@gmail.com"
  className="social-link"
  aria-label="Email"
>
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Vridhi Srivastava. All rights reserved.
          </p>
         
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
