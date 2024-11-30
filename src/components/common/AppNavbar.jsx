import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AppThemeToggle from "./AppThemeToggle";

const AppNavbar = () => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? app.theme.dark : app.theme.light;

  return (
    <Navbar
      bg={theme.colors.gradientBackground}
      variant={app.darkMode ? "dark" : "light"}
      expand="lg"
      style={{
        width: "100%",
        background: theme.colors.gradientBackground,
      }}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/" className="d-none d-lg-block">
          Next Generation E-Commerce
        </Navbar.Brand>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
          style={{ width: "100%", marginRight: "13rem" }}
        >
          <Nav className="mx-auto" style={{ gap: "0.5rem" }}>
            {/* <Link to="/">Home</Link> */}
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: "grey", textDecoration: "none" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/link"
              style={{ color: "grey", textDecoration: "none" }}
            >
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <AppThemeToggle />
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
