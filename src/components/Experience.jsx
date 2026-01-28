import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Experience() {
  const experiences = [
    {
      role: "Software Development Engineer Intern",
      company: "Effizene Biztech Pvt Ltd",
      duration: "Recent",
      description: "Contributed to application development, debugging, and feature implementation. Assisted in designing, developing, and testing software modules in accordance with industry best practices.",
      color: "#FF6B6B"
    },
    {
      role: "Web Developer Intern",
      company: "Talent Craft India",
      duration: "2024",
      description: "Built web applications using React.js and PHP. Developed responsive user interfaces with React and implemented backend functionalities using PHP and MySQL. Integrated frontend components with backend services.",
      color: "#4ECDC4"
    },
    {
      role: "Web Developer Intern",
      company: "Zidio Development",
      duration: "2024",
      description: "Built and contributed to web projects, creating responsive interfaces and implementing features to improve application functionality.",
      color: "#FFE66D"
    },
    {
      role: "AI-ML Internship",
      company: "Training Program",
      duration: "2024",
      description: "Completed coursework and hands-on projects related to supervised learning, unsupervised learning, and reinforcement learning.",
      color: "#A8E6CF"
    },
    {
      role: "Python Developer Intern",
      company: "Saho Technologies",
      duration: "2023-2024",
      description: "Developed a range of Python applications focused on task management, interactive user experiences, and efficient data handling.",
      color: "#C7CEEA"
    },
    {
      role: "Web Developer Intern",
      company: "Saho Technologies",
      duration: "2023",
      description: "Developed responsive and user-friendly website layouts using HTML5 and CSS3, contributing to an improved UI experience for end users.",
      color: "#FFDAC1"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <Container>
        <div className="section-header">
          <span className="section-tag">My professional journey</span>
          <h2 className="section-title">
            Work <span className="highlight">Experience</span>
          </h2>
        </div>
        <Row className="g-4 justify-content-center">
          {experiences.map((exp, index) => (
            <Col md={6} lg={6} key={index}>
              <Card
                className="experience-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="experience-color-accent"
                  style={{ background: exp.color }}
                ></div>
                <Card.Body className="experience-body">
                  <div className="experience-header">
                    <div>
                      <Card.Title className="experience-role">{exp.role}</Card.Title>
                      <Card.Subtitle className="experience-company">
                        {exp.company}
                      </Card.Subtitle>
                    </div>
                    <div className="experience-duration">{exp.duration}</div>
                  </div>
                  <Card.Text className="experience-description">
                    {exp.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
