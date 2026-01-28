import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function About() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={12}>
              <div className="hero-content">
                <h1 className="hero-title">
                  Hi, I'm <span className="highlight">Vridhi Srivastava</span>
                  <br />
                  <span className="hero-subtitle">Software Developer</span>
                </h1>
                <p className="hero-description">
                  Designing and building applications that combine technical excellence with user-centric design. Experienced in creating clean, maintainable, and high-performance code. Dedicated to developing software that makes a real difference.
                </p>
                <div className="hero-cta">
                  <Button href="#projects" className="btn-primary-custom">
                    View My Work
                  </Button>
                 
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">6</div>
                    <div className="stat-label">Internships</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">2024</div>
                    <div className="stat-label">Graduate</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <Container>
          <div className="section-header">
            <span className="section-tag">Get to know me</span>
            <h2 className="section-title">
              About <span className="highlight">Me</span>
            </h2>
          </div>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="about-content">
                <div className="about-text-block">
                  <p className="about-text">
                    I'm a <strong>Software Developer</strong> and recent graduate 
                    from University of Mumbai (BE - Information Technology, 2020-2024). 
                    I specialize in building modern web applications using the{" "}
                    <strong>MERN stack</strong>, <strong>React.js</strong>, and various 
                    backend technologies including {" "}
                    <strong>Node.js</strong>, and <strong>PHP</strong>.
                  </p>
                  <p className="about-text">
                    My experience spans across multiple internships where I've worked 
                    on full-stack development, AI/ML applications, and responsive web 
                    interfaces. I'm passionate about creating clean, maintainable code 
                    and building applications that solve real-world problems. My project 
                    CogniWrench won the <strong>Best Project Award</strong> at SCOE 
                    Avishkar Competition 2024.
                  </p>
                </div>
                <div className="about-highlights">
                  <div className="highlight-item">
                 <div className="highlight-icon">⚡</div>
                    <div className="highlight-content">
                      <h4>Fast Learner</h4>
                      <p>Always exploring new technologies and frameworks</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🤖</div>
                    <div className="highlight-content">
                      <h4>AI/ML Enthusiast</h4>
                      <p>Experience with AI integration and machine learning projects</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🏆</div>
                    <div className="highlight-content">
                      <h4>Award Winner</h4>
                      <p>Best Project Award at SCOE Avishkar Competition 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
