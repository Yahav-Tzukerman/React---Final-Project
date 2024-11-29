import React, { useState } from "react";
import { Form, Container, Row, Col, Card } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeProvider";
import AppButton from "./common/AppButton";
import AppInput from "./common/AppInput";
import AppLabel from "./common/AppLabel";
import AppCheckbox from "./common/AppCheckBox";
import { Link } from "react-router-dom";
import { validateUsername, validatePassword } from "../utils/regexValidations";

const SignInComp = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Username:", Username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
    if (validateUsername(e.target.value)) {
      setError("");
    } else {
      setError("Username");
    }
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    if (validatePassword(e.target.value)) {
      setError("");
    } else {
      setError("password");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card
            style={{
              backgroundColor: theme.colors.cardBackground,
              color: theme.colors.textLight,
              fontFamily: theme.fontFamily,
              width: "100%",
              minHeight: "50vh",
              padding: "0.2rem",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{ fontSize: "2rem", fontWeight: "bold", margin: "3px" }}
              >
                Sign in
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  style={{ marginTop: "4vh" }}
                  controlId="formBasicUsername"
                >
                  <AppLabel text="Username" />
                  <AppInput
                    type="text"
                    placeholder="Enter Username"
                    value={Username}
                    onChange={onUsernameChange}
                    error={error.match(/Username/i)}
                    errorMessage="Username is invalid"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <AppLabel text="Password" />
                  <AppInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChange}
                    error={error.match(/password/i)}
                    errorMessage="Password is invalid"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <AppCheckbox
                    label="Remember me"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => {
                      setRememberMe(!rememberMe);
                    }}
                  />
                </Form.Group>

                <div style={{ marginTop: "3vh" }}>
                  <AppButton label="Sign In" onClick={handleSubmit} />
                </div>

                <div style={{ marginTop: "3vh", textAlign: "center" }}>
                  <p style={{ color: theme.colors.textLight }}>
                    Don't have an account?
                    <Link
                      to="/signup"
                      style={{
                        color: theme.colors.primary,
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      Sign Up
                    </Link>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInComp;
