import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductComponent from "./ProductComponent";

export default function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <ProductComponent />
      </Row>
    </Container>
  );
}
