import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productAction";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../index.css";

export default function ProductDetails() {
  const product = useSelector((state) => state.product);
  const { id, title, image, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductsDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductsDetails();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <Card style={{ width: "28rem" }}>
      {Object.keys(product).length === 0 ? (
        <h3>...Loading</h3>
      ) : (
        <>
          <Card.Img
            variant="top"
            className="img-fluid mx-auto mt-3"
            style={{ width: "180px", height: "180px" }}
            src={image}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ color: "red" }}>
              <h4>${price}</h4>
            </Card.Text>
            <Card.Text>{category}</Card.Text>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Button variant="danger">Add to Cart</Button>
        </>
      )}
    </Card>
  );
}
