import { Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";
import { Container } from "react-bootstrap";
import SignInComp from "./components/Signin";
import PageNotFound from "./pages/PageNotFound";
import SignupComp from "./components/Signup";
// import SignUpComp from "./components/sign-up/Signup";
// import HomeComp from "./components/home/Home";
import LoginPage from "./pages/LoginPage";
import AppNavbar from "./components/common/AppNavbar";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <Container
      fluid
      style={{
        background: theme.darkMode
          ? theme.theme.dark.colors.gradientBackground
          : theme.theme.light.colors.gradientBackground,
        color: theme.darkMode
          ? theme.theme.dark.colors.textLight
          : theme.theme.light.colors.textLight,
        fontFamily: theme.darkMode
          ? theme.theme.dark.colors.fontFamily
          : theme.theme.light.colors.fontFamily,
        minHeight: "100vh",
      }}
    >
      <AppNavbar />
      <AppRouter />
    </Container>
  );
};

export default App;
