import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import appTheme from "../../styles/theme";
import AppCounter from "../common/AppCounter";

const ProductCardComp = ({ product }) => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Find the cart item before setting the state
  const cartItem = cart.cartItems.find(
    (item) => item.product.id === product.id
  );

  // Initialize the quantity state based on what's in the cart, if any
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

  // If you want the component to react to changes in cart items over time,
  // you can update the effect to run again when cart changes:
  useEffect(() => {
    const updatedCartItem = cart.cartItems.find(
      (item) => item.product.id === product.id
    );
    if (updatedCartItem) {
      setQuantity(updatedCartItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [cart, product.id]);

  const cardStyle = {
    backgroundColor: theme.colors.cardBackground,
    color: theme.colors.textLight,
    fontFamily: theme.fontFamily,
    border: ".5px solid #ccc",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "1rem",
    margin: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    objectFit: "cover",
  };

  const headerStyle = {
    fontWeight: "bold",
    fontSize: "2.5rem",
    marginBottom: "0.3rem",
  };

  const subHeaderStyle = {
    fontSize: "1rem",
    marginBottom: "0.5rem",
    color: theme.colors.textSecondary,
  };

  return (
    <Card style={cardStyle}>
      <Row className="align-items-center w-100">
        <Col md={5}>
          <div style={headerStyle}>{product.title}</div>
          <div style={subHeaderStyle}>{product.description}</div>
          <div>Price: ${product.price}</div>
          <div>In stock: {product.stock}</div>

          <AppCounter
            counter={quantity}
            onChange={(count) => {
              dispatch({
                type: "UPDATE_CART",
                payload: {
                  product,
                  count: count,
                },
              });
            }}
          />
        </Col>

        <Col md={4} className="text-center">
          <Image
            src={`/products/${product.imageUrl}.webp`}
            style={imageStyle}
            alt={`/products/${product.imageUrl}-image`}
          />
        </Col>

        <Col md={3} className="text-center">
          <div>Bought: {product.bought || 43}</div>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCardComp;
