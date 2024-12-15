import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppButton from "../common/AppButton";
import appTheme from "../../styles/theme";
import CreateProductCard from "./CreateProductCard";
import productsService from "../../services/products.service";

const CreateProductListComp = () => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category: "",
    imageUrl: "",
    description: "",
  });

  useEffect(() => {
    const unsubscribe = productsService.getProducts((productsData) => {
      setProducts(productsData);
    });
    return () => unsubscribe();
  }, []);

  const handleAddProduct = () => {
    const addProduct = {
      product: newProduct,
    };
    products.find((product) => product.id === addProduct.id)
      ? null
      : setProducts([addProduct, ...products]);
    setNewProduct({
      title: "",
      price: "",
      category: "",
      imageUrl: "",
      description: "",
    });
  };

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.colors.cardBackground,
            color: theme.colors.textLight,
            fontFamily: theme.fontFamily,
            width: "100%",
            minHeight: "80vh",
            padding: "2rem",
            border: ".5px solid black",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            marginTop: "1rem",
          }}
        >
          <div style={{ flex: 1, overflowY: "auto", maxHeight: "70vh" }}>
            {products.map((product, index) => (
              <Col key={product.id || index} sm={12} md={12} lg={12}>
                <CreateProductCard product={product} />
              </Col>
            ))}
          </div>
          <Row style={{ marginTop: "1rem" }}>
            <Col xs={4}>
              <AppButton
                variant="success"
                label="Add New Product"
                onClick={handleAddProduct}
              />
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
};

export default CreateProductListComp;
