import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import appTheme from "../../styles/theme";
import ProductCard from "./ProductCard";
import useProducts from "../../hooks/useProducts";

const ProductList = () => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const products = useProducts();

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row className="justify-content-center">
        <div
          style={{
            color: theme.colors.textLight,
            fontFamily: theme.fontFamily,
            width: "100%",
            minHeight: "85vh",
            padding: "2rem",
            marginTop: "1rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {products.map((product) => (
            <Col
              key={product.id}
              xs={8}
              sm={8}
              md={8}
              lg={8}
              className="d-flex justify-content-center"
            >
              <ProductCard product={product} />
            </Col>
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default ProductList;
