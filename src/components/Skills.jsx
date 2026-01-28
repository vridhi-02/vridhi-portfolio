import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const skills = [
  { name: "React.js", icon: "⚛️", category: "Frontend" },
  { name: "JavaScript", icon: "🟨", category: "Language" },
  { name: "HTML5", icon: "🔶", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "Git & GitHub", icon: "📦", category: "Tools" },
  { name: "Responsive Design", icon: "📱", category: "Design" },
  { name: "REST APIs", icon: "🔌", category: "Backend" }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="section-header">
          <span className="section-tag">What I bring to the table</span>
          <h2 className="section-title">
            My <span className="highlight">Skills</span>
          </h2>
        </div>
        <Row className="g-4 justify-content-center">
          {skills.map((skill, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={index}>
              <div
                className="skill-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-category">{skill.category}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
