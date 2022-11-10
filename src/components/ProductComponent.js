import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderProduct = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Card style={{ width: "14rem" }} key={id} className="me-5 mb-5">
        <div>
          <Card.Img
            variant="top"
            className="img-fluid mx-auto"
            style={{ width: "200px", height: "200px" }}
            src={image}
          />
        </div>
        <div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <Card.Text>{category}</Card.Text>
          </Card.Body>
        </div>
        <div style={{ "margin-bottom": "20px" }}>
          <Button variant="primary">Details</Button>
        </div>
      </Card>
    );
  });
  return <>{renderProduct}</>;
}
