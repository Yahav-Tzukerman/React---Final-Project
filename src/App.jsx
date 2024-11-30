import React, { useEffect } from "react";
import AppRouter from "./AppRouter";
import { Container } from "react-bootstrap";
import AppNavbar from "./components/common/AppNavbar";
import { useSelector, useDispatch } from "react-redux";
import { restoreState } from "./redux/actions/appActions";

const App = () => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? app.theme.dark : app.theme.light;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreState()); // Restore state on app load
  }, [dispatch]);

  return (
    <Container
      fluid
      style={{
        background: theme.colors.gradientBackground,
        color: theme.colors.textLight,
        fontFamily: theme.colors.fontFamily,
        minHeight: "100vh",
      }}
    >
      <AppNavbar />
      <AppRouter />
    </Container>
  );
};

export default App;
