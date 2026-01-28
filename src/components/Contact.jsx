import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import swal from "sweetalert"; // ✅ SweetAlert import

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_1y6nwk9",     // 🔁 replace
        "template_l0lkjjc",    // 🔁 replace
        formData,
        "0PSgQJgwT6qCY6t-R"      // 🔁 replace
      )
      .then(
        () => {
          swal("Success!", "Message sent successfully ✅", "success"); // ✅ SweetAlert
          setFormData({
            name: "",
            email: "",
            message: ""
          });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          swal("Oops!", "Something went wrong ❌", "error"); // ✅ SweetAlert
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="section-header">
          <span className="section-tag">Let's connect</span>
          <h2 className="section-title">
            Get In <span className="highlight">Touch</span>
          </h2>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-content">
              <div className="contact-info">
                <p className="contact-intro">
                  Have a project in mind or want to discuss opportunities? I'd love
                  to hear from you. Drop me a message and I'll get back to you as soon
                  as possible!
                </p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">📧</div>
                    <div className="method-info">
                      <div className="method-label">Email</div>
                      <div className="method-value">
                        <a href="mailto:vridhisri.2003@gmail.com">
                          vridhisri.2003@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">📱</div>
                    <div className="method-info">
                      <div className="method-label">Phone</div>
                      <div className="method-value">
                        <a href="tel:+917317845350">
                          +91 73178 45350
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">💼</div>
                    <div className="method-info">
                      <div className="method-label">LinkedIn</div>
                      <div className="method-value">
                        <a
                          href="https://www.linkedin.com/in/vridhi-srivastava/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          linkedin.com/in/vridhi-srivastava
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">🐙</div>
                    <div className="method-info">
                      <div className="method-label">GitHub</div>
                      <div className="method-value">
                        <a
                          href="https://github.com/vridhi-02"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          github.com/vridhi-02
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-4">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="btn-submit-custom"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <span className="btn-arrow">→</span>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;