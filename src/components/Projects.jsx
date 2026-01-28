import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const projects = [
  {
    id: 1,
    title: "CogniWrench (AIaaS Platform)",
    description: "Innovative AIaaS platform providing services such as music, image, code, and video generation on a single platform. Features monetized services with cutting-edge front-end technologies. Won Best Project Award at SCOE Avishkar Competition 2024.",
    tags: ["AI/ML", "React", "Monetization"],
    color: "#FF6B6B"
  },
  {
    id: 2,
    title: "Excel Analytics Platform",
    description: "Full-stack Excel analytics and visualization platform using MERN stack. Features file upload, data analysis, 2D/3D visualizations, AI-powered insights using OpenAI, upload history tracking, and admin dashboard.",
    tags: ["MERN", "AI", "Data Viz"],
    color: "#4ECDC4"
  },
  {
    id: 3,
    title: "Blogging Platform",
    description: "Full-stack blogging platform using MERN stack with secure JWT authentication, rich text editing, likes and comments, user profile management, and search/category filtering. Includes admin dashboard for content management.",
    tags: ["MERN", "JWT", "Full-Stack"],
    color: "#FFE66D"
  },
  {
    id: 4,
    title: "E-Commerce Fashion Website",
    description: "E-commerce website for fashion using HTML, CSS, JavaScript, Node.js, and MongoDB. Features custom design template with unique UI, secure payment gateway integration, and seamless transaction processing.",
    tags: ["Node.js", "MongoDB", "Payment"],
    color: "#A8E6CF"
  },
  {
    id: 5,
    title: "Hostel Management System",
    description: "Comprehensive Java-based system to manage hostel operations including room allocation, student information, fee payments, and reporting. Features robust database management using MySQL.",
    tags: ["Java", "MySQL", "Backend"],
    color: "#C7CEEA"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <div className="section-header">
          <span className="section-tag">My recent work</span>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
        </div>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={project.id}>
              <Card
                className="project-card h-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="project-color-bar"
                  style={{ background: project.color }}
                ></div>
                <Card.Body className="project-body">
                  <div className="project-number">0{project.id}</div>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} className="project-tag">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
