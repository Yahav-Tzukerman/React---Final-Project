import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppButton from "../components/common/AppButton";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/signin");
  };

  return (
    <Container className="text-center">
      <Row>
        <Col lg={8} md={8} sm={8} className="mx-auto">
          <h1 style={{ marginTop: "25vh" }}>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>
          <AppButton label="Return Home" variant="primary" onClick={goHome} />
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
