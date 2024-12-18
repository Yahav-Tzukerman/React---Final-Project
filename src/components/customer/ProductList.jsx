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
    <Container className="my-4">
      <Row
        className="gx-3 gy-4 justify-content-center"
        style={{ color: theme.colors.textLight }}
      >
        {products.map((product) => (
          <Col
            key={product.id}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="d-flex justify-content-center"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
