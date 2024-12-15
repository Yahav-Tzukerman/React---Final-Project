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

const CreateProductCard = ({ product }) => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const categories = useCategories();
  const categoryNames = categories.map((category) => category.category);

  const [productData, setProductData] = useState({
    title: product?.title || "",
    price: product?.price || "",
    category: product?.category || "",
    imageUrl: product?.imageUrl || "",
    description: product?.description || "",
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
  };

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "QTY", accessor: "quantity" },
    { header: "Date", accessor: "date" },
  ];

  const data = [];

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
    const resp = await productsService.addProduct(productData);
    console.log("Product saved:", resp);
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
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <AppLabel text={"Category:"} />
              <AppComboBox
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
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <AppLabel text={"Description:"} />
              <AppTextArea
                label="Description"
                name="description"
                value={productData.description}
                onChange={onDescriptionChange}
                placeholder="Enter product description"
                rows={3}
              />
            </Col>
            <Col md={6}>
              <AppLabel text={"Bought By:"} />
              <AppTable columns={columns} data={data} />
            </Col>
          </Row>

          <Row>
            <Col md={2} className="mt-3">
              <div className="d-flex justify-content-end mt-4">
                <AppButton
                  label="Save"
                  onClick={handleSaveClick}
                  disabled={false}
                  variant="success"
                  style={{ maxWidth: "100px" }}
                />
              </div>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CreateProductCard;
