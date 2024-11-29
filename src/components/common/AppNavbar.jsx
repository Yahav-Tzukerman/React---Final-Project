import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import AppThemeToggle from "./AppThemeToggle";

const AppNavbar = () => {
  const reduxTheme = useSelector((state) => state.theme);
  let theme = reduxTheme.darkMode
    ? reduxTheme.theme.dark
    : reduxTheme.theme.light;

  return (
    <Navbar
      bg={theme.colors.gradientBackground}
      variant={reduxTheme.darkMode ? "dark" : "light"}
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
          style={{ width: "100%", marginRight: "10rem" }}
        >
          <Nav className="mx-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <AppThemeToggle />
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
