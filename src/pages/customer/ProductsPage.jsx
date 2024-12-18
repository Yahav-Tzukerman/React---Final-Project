import React from "react";
import { useSelector } from "react-redux";
import appTheme from "../../styles/theme";
import { Col, Row, Container } from "react-bootstrap";
import ProductList from "../../components/customer/ProductList";
import CartToggleComp from "../../components/cart/CartToggleButton";
import Cart from "../../components/cart/Cart";

const ProductsPage = () => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const [showCart, setShowCart] = React.useState(false);

  const containerStyle = {};

  const mediaQueryStyle = {
    "@media (max-width: 768px)": {
      display: showCart ? "none" : "flex",
    },
  };

  const combinedStyle = {
    ...containerStyle,
    ...(window.innerWidth <= 768
      ? mediaQueryStyle["@media (max-width: 768px)"]
      : {}),
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: theme.colors.gradientBackground,
        color: theme.colors.textLight,
        fontFamily: theme.fontFamily,
      }}
    >
      <Container fluid className="py-4">
        <Row>
          {/* If cart is not open, show toggle button in a narrow column */}
          {!showCart && (
            <Col
              xs={1}
              className="d-flex justify-content-center align-items-start"
            >
              <CartToggleComp
                isCartOpen={showCart}
                onToggleCart={() => setShowCart(!showCart)}
              />
            </Col>
          )}

          {/* If cart is open, display it along with the toggle button */}
          {showCart && (
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column align-items-start mb-3"
            >
              <div className="mb-3">
                <CartToggleComp
                  isCartOpen={showCart}
                  onToggleCart={() => setShowCart(!showCart)}
                />
              </div>

              <Cart />
            </Col>
          )}

          {/* Product List occupies remaining space */}
          <Col
            style={combinedStyle}
            xs={showCart ? 12 : 11}
            md={showCart ? 6 : 11}
          >
            <ProductList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductsPage;
