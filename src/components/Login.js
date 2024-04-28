import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Form } from "react-bootstrap";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    console.log("Login " + username + " " + password);
  };

  render() {
    const { username, password } = this.state;

    return (
      <Container className="login-container">
        <Row>
          <Col md={4} className="mx-auto login-form">
            <h1 className="login-title">Login</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={username}
                  onChange={this.handleChange}
                  className="login-input"
                />
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={this.handleChange}
                  className="login-input"
                />
              </Form.Group>

              <Button
                variant="primary"
                onClick={this.handleLogin}
                className="login-button"
              >
                Login
              </Button>
            </Form>

            <p className="signup-link">
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
