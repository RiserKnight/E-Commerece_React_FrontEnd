import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DOTD1 from "../../../DOTD1.jpg";
import DOTD2 from "../../../DOTD1.jpg";
import DOTD3 from "../../../DOTD4.jpg";
import DOTD4 from "../../../DOTD4.jpg";
import "../../../public/styles2.css";

function Cart() {
  return (
    <div>
      <Container className="cart" fluid>
        <Row className="product">
          <Col>
            <img src={DOTD1} alt="filana dimakan" />
          </Col>
          <Col xl={10}>
            <h3 className="product_title">Free fire wala shirt lelo</h3>
            <p className="product_description">abababba</p>
            <p className="product_description">abababba</p>
            <p className="product_description">abababba</p>
            <p className="product_description">abababba</p>
          </Col>
        </Row>

        <Row className="product">
          <Col>
            <img src={DOTD2} alt="filana dimakan" />
          </Col>
          <Col xl={10}>
            <h3 className="product_title">Free fire wala shirt lelo</h3>
            <p className="product_description">abababba</p>
            <p className="product_description">abababba</p>
            <p className="product_description">abababba</p>
            <p className="product_description">abababba</p>
          </Col>
        </Row>

        <Row className="product">
          <Col>
            <img src={DOTD3} alt="filana dimakan" />
          </Col>
          <Col xl={10}>
            <h3 className="product_title">Free fire wala shirt lelo</h3>
            <p className="product_description">abababba</p>
            <p className="product_description">abababba</p>
            <p className="product_description">abababba</p>
            <p className="product_description">abababba</p>
          </Col>
        </Row>

        <Row className="product">
          <Col>
            <img src={DOTD4} alt="filana dimakan" />
          </Col>
          <Col xl={10}>
            <h3 className="product_title">Free fire wala shirt lelo</h3>
            <p className="product_description">abababba</p>
            <p className="product_description">abababba</p>
            <p className="product_description">abababba</p>
            <p className="product_description">abababba</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
