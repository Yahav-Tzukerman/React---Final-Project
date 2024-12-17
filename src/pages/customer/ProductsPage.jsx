import React, { useState } from "react";
import appTheme from "../../styles/theme";
import { useSelector } from "react-redux";
import ProductList from "../../components/customer/ProductList";
import { Col, Row } from "react-bootstrap";
import AppButton from "../../components/common/AppButton";
import CartToggleComp from "../../components/cart/CartToggleButton";

const ProductsPage = () => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const [showCart, setShowCart] = React.useState(false);

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    background: theme.colors.gradientBackground,
    color: theme.colors.textLight,
    fontFamily: theme.fontFamily,
  };

  const headerStyle = {
    margin: "3rem 0",
    textAlign: "center",
  };

  const contentStyle = {
    width: "90%",
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <Row>
          {!showCart && (
            <Col md={1} style={{ textAlign: "center", display: "flex" }}>
              <CartToggleComp
                isCartOpen={showCart}
                onToggleCart={() => setShowCart(!showCart)}
              />
            </Col>
          )}
          {showCart && (
            <Col md={4} style={{ textAlign: "center", display: "flex" }}>
              <CartToggleComp
                isCartOpen={showCart}
                onToggleCart={() => setShowCart(!showCart)}
              />
            </Col>
          )}
          <Col md={showCart ? 8 : 11}>
            {/* <AppButton
              onClick={() => setShowCart(!showCart)}
              style={{ margin: "1rem" }}
            /> */}
            <ProductList />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductsPage;
