import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import appTheme from "../../styles/theme";
import AppButton from "../common/AppButton";
import CartItemCard from "./CartItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const app = useSelector((state) => state.app);
  const { cartItems } = useSelector((state) => state.cart);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;

  return (
    <Container fluid className="mt-3">
      <Row className="gx-2 gy-2">
        <Col
          xs={12}
          className="d-flex flex-column align-items-start"
          style={{ minHeight: "80vh" }}
        >
          <div
            className="d-flex align-items-center mb-3"
            style={{
              color: theme.colors.textLight,
              fontFamily: theme.fontFamily,
            }}
          >
            <h1 className="me-2 mb-3">Cart</h1>
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: "2rem" }}
            />
          </div>

          {cartItems.map((cartItem) => (
            <Row key={cartItem.product.id} className="w-100 m-0">
              <Col xs={12}>
                <CartItemCard cartItem={cartItem} />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
      <div style={{ position: "fixed", bottom: 0, left: 0, margin: "1rem" }}>
        <AppButton label="Order" variant="success" onClick={() => {}} />
      </div>
    </Container>
  );
};

export default Cart;
