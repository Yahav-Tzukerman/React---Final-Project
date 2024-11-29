import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import ThemeProvider, { useTheme } from "./contexts/ThemeProvider";
import SignInComp from "./components/Signin";
import PageNotFound from "./pages/PageNotFound";
import SignupComp from "./components/Signup";
// import SignUpComp from "./components/sign-up/Signup";
// import HomeComp from "./components/home/Home";

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider>
      <Container
        fluid
        style={{
          background: theme.colors.gradientBackground,
          color: theme.colors.textLight,
          fontFamily: theme.fontFamily,
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/signin" element={<SignInComp />} />
          <Route path="/signup" element={<SignupComp />} />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/sign-up" component={SignUpComp} />
          <Route path="/" component={HomeComp} exact /> */}
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
