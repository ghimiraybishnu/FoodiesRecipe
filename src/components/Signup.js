import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Form } from "react-bootstrap";


class Signup extends Component {
  state = {
    username: "",
    email: "",
    phoneNumber: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { username, email, phoneNumber, password } = this.state;
    console.log("Sign up data:", { username, email, phoneNumber, password });
  };

  render() {
    const { username, email, phoneNumber, password } = this.state;

    return (
      <Container className="signup-container">
        <Row>
          <Col md="6" className="mx-auto signup-form">
            <h1 className="signup-header">Sign up</h1>
            <Form>
              <Form.Group controlId="usernameId" className="form-group">
                <Form.Label className="form-label">User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={username}
                  onChange={this.handleChange}
                  className="form-input"
                />
              </Form.Group>

              <Form.Group controlId="emailId" className="form-group">
                <Form.Label className="form-label">Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleChange}
                  className="form-input"
                />
              </Form.Group>

              <Form.Group controlId="phoneNumberId" className="form-group">
                <Form.Label className="form-label">Phone number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={this.handleChange}
                  className="form-input"
                />
              </Form.Group>

              <Form.Group controlId="passwordId" className="form-group">
                <Form.Label className="form-label">Create password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={this.handleChange}
                  className="form-input"
                />
              </Form.Group>

              <Button
                variant="primary"
                onClick={this.handleSubmit}
                className="signup-button"
              >
                Sign up
              </Button>
            </Form>

            <p className="mt-3 login-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
