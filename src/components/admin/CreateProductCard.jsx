import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import AppButton from "../common/AppButton";
import AppInput from "../common/AppInput";
import appTheme from "../../styles/theme";
import AppTable from "../common/AppTable";
import AppComboBox from "../common/AppComboBox";
import useCategories from "../../hooks/useCategories";
import AppTextArea from "../common/AppTextArea";
import productsService from "../../services/products.service";
import AppLabel from "../common/AppLabel";
import useOrders from "../../hooks/useOrders";

const CreateProductCard = ({ product, showPopup }) => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const categories = useCategories();
  const categoryNames = categories.map((category) => category.category);
  const { orders } = useOrders();
  const orderedBy = orders.filter((order) => order.product.id === product?.id);
  const orderedByData = orderedBy.map((order) => ({
    name: order.user.username,
    quantity: order.quantity,
    date: order.date,
  }));

  const [productData, setProductData] = useState({
    title: product?.title || "Product Title",
    price: product?.price || "1",
    category: product?.category || "Product Category",
    imageUrl: product?.imageUrl || "Product Image URL",
    description: product?.description || "Product Description",
    inStock: product?.inStock || "2500",
  });

  const cardStyle = {
    backgroundColor: theme.colors.cardBackground,
    color: theme.colors.textLight,
    fontFamily: theme.fontFamily,
    border:
      productData.title === ""
        ? `.5px solid ${theme.colors.warning}`
        : ".5px solid black",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "1rem",
    margin: "1rem",
    maxHeight: "60vh",
  };

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "QTY", accessor: "quantity" },
    { header: "Date", accessor: "date" },
  ];

  const data = orderedByData;

  const onTitleChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      title: e.target.value,
    }));
  };

  const onPriceChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      price: e.target.value,
    }));
  };

  const onCategoryChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      category: e.target.value,
    }));
  };

  const onImageUrlChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      imageUrl: e.target.value,
    }));
  };

  const onDescriptionChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      description: e.target.value,
    }));
  };

  const handleSaveClick = async () => {
    if (
      productData.title === "" ||
      productData.title === "Product Title" ||
      productData.price === "" ||
      productData.imageUrl === "" ||
      productData.imageUrl === "Product Image Url" ||
      productData.description === "" ||
      productData.description === "Product Description" ||
      productData.category === "" ||
      productData.category === "Product Category"
    ) {
      showPopup("Please fill in all fields", "error");
      return;
    }
    if (product.id == undefined) {
      const resp = await productsService.addProduct(productData);
      if (resp.error) {
        showPopup(resp.error, "error");
      } else {
        showPopup("Product added successfully", "success");
      }
    } else {
      const resp = await productsService.updateProduct(product.id, productData);
      if (resp.includes("Error")) {
        showPopup(resp, "error");
      } else {
        showPopup("Product updated successfully", "success");
      }
    }
  };

  const handleCloseErrorPopup = () => {
    setPopup({ ...popup, show: false, message: "" });
  };

  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <AppLabel text={"Title:"} />
              <AppInput
                label="Title"
                type="text"
                value={productData.title}
                onChange={onTitleChange}
                placeholder="Enter product title"
                error={productData.title === ""}
                errorMessage="* Title is required"
              />
            </Col>
            <Col md={6}>
              <AppLabel text={"Price:"} />
              <AppInput
                label="Price"
                type="number"
                value={productData.price}
                onChange={onPriceChange}
                placeholder="Enter price"
                error={productData.price === "" || productData.price <= "0"}
                errorMessage="* Price is required"
                instructions={"Price is Greater than 0"}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <AppLabel text={"Category:"} />
              <AppComboBox
                name={"category"}
                value={productData.category}
                options={categoryNames}
                onChange={onCategoryChange}
              />
            </Col>
            <Col md={6}>
              <AppLabel text={"Link to Pic:"} />
              <AppInput
                label="Link to Pic"
                name="imageUrl"
                value={productData.imageUrl}
                onChange={onImageUrlChange}
                placeholder="Enter image URL"
                error={productData.imageUrl === ""}
                errorMessage="* Image URL is required"
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} style={{ maxHeight: "30vh", overflowY: "auto" }}>
              <AppLabel text={"Description:"} />
              <AppTextArea
                label="Description"
                name="description"
                value={productData.description}
                onChange={onDescriptionChange}
                placeholder="Enter product description"
                rows={3}
                error={productData.description === ""}
                errorMessage="* Description is required"
              />
              <Col md={12}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <AppButton
                    label="Save"
                    onClick={handleSaveClick}
                    disabled={false}
                    variant="success"
                    style={{ maxWidth: "100px" }}
                  />
                </div>
              </Col>
            </Col>
            <Col md={6}>
              {data.length === 0 ? (
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  No Purchases for this item yet
                </p>
              ) : (
                <>
                  <AppLabel text={"Bought By:"} />
                  <div style={{ maxHeight: "20vh", overflowY: "auto" }}>
                    <AppTable columns={columns} data={data} />
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CreateProductCard;
