import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderProduct = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Card style={{ width: "14rem" }} key={id} className="me-5 mb-5">
        <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
          <div>
            <Card.Img
              variant="top"
              className="img-fluid mx-auto mt-2"
              style={{ width: "140px", height: "140px" }}
              src={image}
            />
          </div>
          <div>
            <Card.Body style={{ color: "black" }}>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                <h4>${price}</h4>
              </Card.Text>
              <Card.Text>{category}</Card.Text>
            </Card.Body>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <Button variant="primary">Details</Button>
          </div>
        </Link>
      </Card>
    );
  });
  return <>{renderProduct}</>;
}
