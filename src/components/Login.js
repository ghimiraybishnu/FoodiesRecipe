import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("Login " + userData.username + " " + userData.password);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Login</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button className="button" onClick={this.onLoginClick}>Login</Button>
            <p className="link mt-2">
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;

// Embedded CSS
const styles = `
.container {
  margin-top: 50px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 10px;
}

.button {
  margin-top: 20px;
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

.link {
  margin-top: 10px;
  display: block;
}

.link a {
  color: #007bff;
  text-decoration: none;
}

.link a:hover {
  text-decoration: underline;
}
`;

// Inject CSS into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
